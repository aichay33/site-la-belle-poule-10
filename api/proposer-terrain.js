const MAX_FIELD_LENGTH = 1800;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, maxLength = MAX_FIELD_LENGTH) => {
  if (typeof value !== "string") return "";
  return value.replace(/[<>]/g, "").trim().slice(0, maxLength);
};

const line = (label, value) => `${label}: ${value || "Non renseigné"}`;

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { success: false, message: "Configuration Turnstile manquante côté serveur." };

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) return { success: false, message: "La vérification anti-robot est indisponible." };
  const result = await response.json();
  return { success: Boolean(result.success), message: result["error-codes"]?.join(", ") || "Vérification anti-robot refusée." };
}

async function sendEmail(subject, text, replyTo) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "labellepoule33@outlook.fr";
  const from = process.env.CONTACT_FROM_EMAIL || "La Belle Poule <onboarding@resend.dev>";

  if (!apiKey) return { success: false, message: "Configuration email manquante côté serveur." };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, reply_to: replyTo, text }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    return { success: false, message: body || "L’email n’a pas pu être envoyé." };
  }

  return { success: true, message: "Email envoyé." };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Méthode non autorisée." });
  }

  try {
    const body = req.body || {};
    const honeypot = clean(body.website, 120);
    if (honeypot) return res.status(400).json({ message: "Demande refusée." });

    const startedAt = Number(body.startedAt || 0);
    if (startedAt && Date.now() - startedAt < 2000) {
      return res.status(400).json({ message: "Merci de prendre le temps de vérifier votre message avant l’envoi." });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 160).toLowerCase();
    const phone = clean(body.phone, 40);
    const commune = clean(body.commune, 140);
    const surface = clean(body.surface, 80);
    const agricole = clean(body.agricole, 40);
    const plat = clean(body.plat, 40);
    const accesVoiture = clean(body.accesVoiture, 40);
    const eau = clean(body.eau, 40);
    const boisHaies = clean(body.boisHaies, 160);
    const prix = clean(body.prix, 160);
    const lien = clean(body.lien, 300);
    const message = clean(body.message, 1800);
    const turnstileToken = clean(body.turnstileToken, 2048);

    if (!name || !email || !commune || !surface || !message) {
      return res.status(400).json({ message: "Merci de remplir les champs obligatoires." });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ message: "Merci d’indiquer une adresse email valide." });
    }

    if (!turnstileToken) {
      return res.status(400).json({ message: "Validation anti-robot manquante." });
    }

    const ip = req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"]?.split(",")[0] || req.socket?.remoteAddress || null;
    const verified = await verifyTurnstile(turnstileToken, ip);
    if (!verified.success) {
      return res.status(400).json({ message: "La protection anti-robot n’a pas validé l’envoi." });
    }

    const emailText = [
      "Nouvelle proposition de terrain via le site La Belle Poule.",
      "",
      line("Nom", name),
      line("Email", email),
      line("Téléphone", phone),
      line("Commune / secteur", commune),
      line("Surface", surface),
      line("Terrain agricole", agricole),
      line("Terrain plat", plat),
      line("Accès voiture", accesVoiture),
      line("Eau disponible", eau),
      line("Bois / haies / taillis", boisHaies),
      line("Prix ou conditions", prix),
      line("Lien annonce / cadastre / photos", lien),
      "",
      "Message :",
      message,
    ].join("\n");

    const sent = await sendEmail(`Proposition de terrain - ${commune}`, emailText, email);
    if (!sent.success) {
      return res.status(500).json({ message: "Le formulaire est validé, mais l’envoi email n’est pas encore configuré." });
    }

    return res.status(200).json({ message: "Message envoyé." });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur. Merci de réessayer plus tard." });
  }
};
