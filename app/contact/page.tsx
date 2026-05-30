import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact — La Belle Poule",
  description: "Contactez Aïcha Yassine pour proposer un terrain agricole plat en Gironde, transmettre une mise en relation ou échanger sur le projet La Belle Poule.",
  path: "/contact",
  keywords: ["contact La Belle Poule", "proposer terrain Gironde", "Aïcha Yassine"],
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contacter La Belle Poule"
      intro="Vous pouvez me contacter pour proposer un terrain, transmettre une mise en relation, proposer du matériel de récupération ou poser une question sur le projet. La ferme est en préparation et l’ouverture est prévue le 05/2029."
    >
      <div className="grid gap-10 text-text-mid md:grid-cols-[0.95fr_1.05fr]">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Coordonnées</h2>
          <div className="mt-6 grid gap-4 text-lg">
            <a href="mailto:labellepoule33@outlook.fr" className="rounded-2xl bg-cream-soft px-5 py-4 font-bold text-green-deep hover:text-terracotta">labellepoule33@outlook.fr</a>
            <p className="rounded-2xl bg-cream-soft px-5 py-4">Gironde, France</p>
            <p className="rounded-2xl bg-cream-soft px-5 py-4"><strong className="text-green-deep">Univers illustré :</strong> la future BD La Belle Poule est en préparation.</p>
            <a href="https://www.linkedin.com/in/a%C3%AFcha-yassine-880678407" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-cream-soft px-5 py-4 font-bold text-green-deep hover:text-terracotta"><strong>LinkedIn :</strong> www.linkedin.com/in/aïcha-yassine-880678407</a>
          </div>
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 p-6">
          <h2 className="font-display text-3xl text-green-deep">Pour proposer une piste</h2>
          <p className="mt-4 leading-8">Merci d’indiquer si possible la commune, la surface, le statut agricole du terrain, l’accès voiture, l’accès à l’eau, la pente, la présence de bois/haies, les conditions de vente ou de mise en relation et quelques photos ou informations utiles.</p>
          <div className="mt-6 whitespace-pre-line rounded-[1.5rem] bg-cream-soft p-5 font-mono text-sm leading-7">{`Objet : Proposition pour La Belle Poule

Bonjour Aïcha,

Je vous contacte au sujet de :
Commune :
Surface :
Terrain agricole : oui / non
Terrain plat : oui / non
Accès voiture : oui / non
Accès à l’eau :
Bois / haies / taillis :
Type de proposition : terrain / mise en relation / matériel / conseil
Informations complémentaires :`}</div>
        </section>
      </div>
    </PageShell>
  );
}
