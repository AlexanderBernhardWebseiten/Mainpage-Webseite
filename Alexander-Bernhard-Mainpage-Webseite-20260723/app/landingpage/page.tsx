import { CtaPanel, Footer, PageHero, PlainSteps } from "../components";

const items = [
  { title: "Ein Angebot in den Mittelpunkt stellen", text: "Die Seite erklärt genau ein Thema: zum Beispiel eine Aktion, eine Dienstleistung oder ein neues Produkt." },
  { title: "Kurzer Weg zur Anfrage", text: "Besucher sollen nicht lange suchen. Der nächste Schritt ist klar sichtbar." },
  { title: "Gut für Werbung und Empfehlungen", text: "Eine Landingpage passt gut, wenn Sie gezielt Menschen auf ein bestimmtes Angebot schicken möchten." },
];

export default function LandingpagePage() {
  return (
    <main>
      <PageHero
        eyebrow="Landingpage"
        title="Eine Seite für"
        accent=" ein klares Angebot."
        text="Eine Landingpage ist keine komplette Firmenwebseite. Sie ist dafür da, ein bestimmtes Angebot schnell und überzeugend zu erklären."
      />
      <section className="content-section">
        <div className="page-shell"><PlainSteps items={items} /></div>
      </section>
      <section className="explain light">
        <div className="page-shell explain-grid">
          <div><p className="eyebrow dark"><span />Beispiel</p><h2>Wenn jemand nur eine Sache wissen soll.</h2></div>
          <div className="plain-text">
            <p>Zum Beispiel: „Wir bieten Fensterreinigung für Büros an.“ Dann erklärt die Landingpage genau das: Vorteil, Ablauf, Vertrauen und Kontakt.</p>
          </div>
        </div>
      </section>
      <CtaPanel />
      <section className="closing compact"><div className="page-shell"><Footer /></div></section>
    </main>
  );
}
