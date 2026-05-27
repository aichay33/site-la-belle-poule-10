import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Mentions légales — La Belle Poule",
  description: "Mentions légales du site La Belle Poule, projet de future exploitation avicole plein air agroforestière en préparation en Gironde.",
  path: "/mentions-legales",
  keywords: ["mentions légales La Belle Poule"],
});

export default function MentionsLegalesPage() {
  return (
    <PageShell eyebrow="Mentions légales" title="Mentions légales" intro="Informations générales sur le site La Belle Poule.">
      <div className="grid gap-8 text-text-mid">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Éditeur du site</h2>
          <p className="mt-3">La Belle Poule est un projet agricole en préparation porté par Aïcha Yassine.</p>
          <p className="mt-3">Email : <a href="mailto:labellepoule33@outlook.fr" className="font-bold text-green-deep hover:text-terracotta">labellepoule33@outlook.fr</a></p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-green-deep">Statut du projet</h2>
          <p className="mt-3 leading-8">La ferme n’est pas encore ouverte au public ni en activité commerciale. Le site présente un projet de future exploitation avicole plein air agroforestière en préparation, avec une ouverture prévue le 01/05/2029.</p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-green-deep">Formulaire de proposition de terrain</h2>
          <p className="mt-3 leading-8">Le formulaire du site sert uniquement à recevoir des propositions de terrain ou des mises en relation liées au projet La Belle Poule. Les informations transmises sont utilisées pour étudier la proposition et répondre à la personne ayant envoyé le message. Elles ne sont pas revendues.</p>
          <p className="mt-3 leading-8">Le formulaire est protégé par Cloudflare Turnstile afin de limiter les envois automatisés. L’envoi des messages est prévu via un service d’email sécurisé configuré côté serveur.</p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-green-deep">Photos et contenus</h2>
          <p className="mt-3 leading-8">Les images, textes, logos et éléments graphiques du site sont utilisés pour présenter le projet La Belle Poule. Les informations sont indicatives et pourront évoluer selon le terrain trouvé, les autorisations, la réglementation, l’accompagnement agricole et les contraintes locales.</p>
        </section>
      </div>
    </PageShell>
  );
}
