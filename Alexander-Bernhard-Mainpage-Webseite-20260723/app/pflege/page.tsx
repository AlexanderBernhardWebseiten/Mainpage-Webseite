import { CtaPanel, Footer, PageHero, PlainSteps } from "../components";

const items = [
  { title: "Texte ändern", text: "Wenn sich Öffnungszeiten, Angebote oder Formulierungen ändern, kann die Webseite angepasst werden." },
  { title: "Neue Seiten ergänzen", text: "Wenn Ihr Unternehmen wächst, kann die Webseite um neue Bereiche erweitert werden." },
  { title: "Bestehende Inhalte verbessern", text: "Manchmal reicht schon ein klarerer Text oder eine bessere Reihenfolge, damit Besucher schneller verstehen." },
];

export default function PflegePage() {
  return (
    <main>
      <PageHero
        eyebrow="Pflege & Erweiterung"
        title="Ihre Webseite"
        accent=" bleibt aktuell."
        text="Eine Webseite ist kein Prospekt, der für immer gleich bleiben muss. Wenn sich etwas ändert, kann die Seite mitwachsen."
      />
      <section className="content-section">
        <div className="page-shell"><PlainSteps items={items} /></div>
      </section>
      <CtaPanel />
      <section className="closing compact"><div className="page-shell"><Footer /></div></section>
    </main>
  );
}
