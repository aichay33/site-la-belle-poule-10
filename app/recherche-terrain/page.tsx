import PageShell from "../../components/PageShell";
import TerrainProposalForm from "../../components/TerrainProposalForm";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Recherche terrain agricole en Gironde — La Belle Poule",
  description: "La Belle Poule recherche un terrain agricole uniquement en Gironde : environ 4 hectares, terrain plat, accès voiture et eau indispensable, pour préparer une exploitation avicole plein air agroforestière avant l'ouverture prévue le 01/05/2029.",
  path: "/recherche-terrain",
  keywords: ["recherche terrain agricole Gironde", "terrain plat 4 hectares Gironde", "terrain avicole Gironde", "exploitation avicole Gironde"],
});

const criteria = [
  "Terrain agricole uniquement : pas de terrain de loisirs, pas de parcelle inadaptée au projet agricole.",
  "Surface recherchée : environ 4 hectares.",
  "Terrain plat ou très faiblement pentu, pour faciliter les paddocks, l’eau, les déplacements et l’accueil.",
  "Accès voiture obligatoire : installation, livraisons, secours, clients, abattoir partenaire et entretien.",
  "Eau indispensable : point d’eau, possibilité de stockage, toitures récupérables ou solution validable localement.",
  "Secteur : Gironde, priorité aux communes rurales ouvertes aux projets agricoles sobres.",
  "Possibilité d’installer des paddocks plein air agroforestiers pour pondeuses et volailles de chair.",
  "Présence idéale d’un petit bois, d’un taillis ou de haies adultes pour le paysage, l’ombre et l’autonomie bois.",
  "Espace suffisant pour point de vente, distributeur H24, parking, toilettes publiques, aire de pique-nique barbecue, aire de jeux pour enfants et parties communes ouvertes 10h-19h.",
  "Possibilité de séparer clairement zone publique, zone agricole et zone privée.",
];

const options = ["Terrain agricole uniquement", "Achat prioritaire", "Accès voiture + eau", "Terrain plat", "Projet à étudier avec la mairie"];

export default function RechercheTerrainPage() {
  return (
    <PageShell
      eyebrow="Recherche de terrain"
      title="Recherche terrain agricole plat en Gironde"
      intro="La Belle Poule recherche un terrain agricole uniquement, idéalement 4 hectares, plat, avec accès voiture et eau. Le terrain servira à préparer pendant 3 ans la future exploitation avant l’ouverture prévue le 01/05/2029."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="rounded-[2rem] bg-green-deep p-7 text-white md:p-9">
          <h2 className="font-display text-3xl">Critères non négociables</h2>
          <p className="mt-4 leading-8 text-white/85">
            Le projet cherche un vrai terrain agricole : plat, accessible en voiture, avec une solution d’eau et compatible avec une future activité avicole plein air agroforestière. Ces critères sont essentiels pour rassurer la mairie, la Chambre d’agriculture, les assureurs et les futurs partenaires.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Le terrain recherché</h2>
          <p className="mt-4 leading-8">
            Le terrain idéal permettrait d’installer les paddocks, les accès, le bâtiment agricole, le point de vente, les distributeurs, le système d’eau, les panneaux solaires, la zone privée et les parties communes. L’objectif est de construire d’abord un outil agricole propre et cohérent, puis d’ouvrir le 01/05/2029 après 3 ans de préparation.
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {criteria.map((item) => (
              <li key={item} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-terracotta">•</span> {item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Type de proposition recherchée</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {options.map((option) => (
              <span key={option} className="rounded-full border border-green-deep/10 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-green-deep shadow-[0_10px_30px_rgba(31,36,24,0.04)]">{option}</span>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Informations utiles à envoyer</h2>
          <p className="mt-4 leading-8">Pour proposer une piste, merci d’indiquer si possible :</p>
          <ul className="mt-4 grid gap-2 leading-8 md:grid-cols-2">
            <li>Commune ou secteur</li>
            <li>Surface approximative</li>
            <li>Confirmation : terrain agricole</li>
            <li>Terrain plat ou pente faible</li>
            <li>Accès voiture / chemin d’accès</li>
            <li>Accès à l’eau ou solution possible</li>
            <li>Bois, haies, taillis ou arbres présents</li>
            <li>Photos ou lien cadastral si disponible</li>
            <li>Prix, conditions ou contact du propriétaire</li>
          </ul>
        </section>

        <TerrainProposalForm />


        <section>
          <h2 className="font-display text-3xl text-green-deep">Modèle de message</h2>
          <div className="mt-5 whitespace-pre-line rounded-[2rem] border border-green-deep/10 bg-white p-6 font-mono text-sm leading-7 text-text-mid shadow-[0_12px_40px_rgba(31,36,24,0.05)]">{`Objet : Proposition de terrain — La Belle Poule

Bonjour Aïcha,

Je vous contacte au sujet d’un terrain situé à :
Commune :
Surface :
Terrain agricole : oui / non
Terrain plat : oui / non
Accès voiture : oui / non
Accès à l’eau :
Bois / haies / taillis :
Type de proposition : vente / mise en relation / autre piste
Informations complémentaires :

Cordialement,`}</div>
        </section>
      </div>
    </PageShell>
  );
}
