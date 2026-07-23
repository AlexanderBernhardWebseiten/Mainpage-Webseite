import { CtaPanel, Footer, PageHero } from "../components";

const steps = [
  {
    title: "1. Erstes Gespräch",
    text: "Wir klären, was Ihr Unternehmen anbietet, welche Kunden Sie erreichen möchten und welche Inhalte auf die Webseite sollen.",
  },
  {
    title: "2. Struktur planen",
    text: "Danach entsteht ein einfacher Aufbau: Startseite, Leistungen, Kontakt und weitere Seiten, wenn sie sinnvoll sind.",
  },
  {
    title: "3. Texte und Design erstellen",
    text: "Die Inhalte werden verständlich formuliert und optisch professionell dargestellt. Keine unnötige Fachsprache.",
  },
  {
    title: "4. Prüfen und verbessern",
    text: "Sie schauen sich die Webseite an. Wenn etwas nicht passt, wird es angepasst, bevor die Seite final übergeben wird.",
  },
  {
    title: "5. Übergabe",
    text: "Zum Schluss bekommen Sie die vereinbarten Dateien, Zugänge oder die fertige veröffentlichte Webseite.",
  },
];

export default function AblaufPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ablauf"
        title="Von der Idee"
        accent=" zur fertigen Webseite."
        text="Der Ablauf bleibt einfach. Sie müssen keine technischen Begriffe kennen. Wichtig ist nur, was Ihre Webseite am Ende für Ihre Kunden leisten soll."
      />

      <section className="content-section">
        <div className="page-shell timeline">
          {steps.map((step) => (
            <article key={step.title}>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="explain light">
        <div className="page-shell explain-grid">
          <div>
            <p className="eyebrow dark">
              <span />
              Einfach gesagt
            </p>
            <h2>Sie liefern die Idee. Die Webseite entsteht daraus.</h2>
          </div>
          <div className="plain-text">
            <p>
              Sie müssen nicht wissen, welche Technik dahintersteckt. Es reicht,
              wenn Sie erklären, was Ihr Unternehmen macht und was Kunden wissen
              sollen.
            </p>
            <p>
              Daraus entsteht eine Webseite, die professionell aussieht und
              trotzdem einfach verständlich bleibt.
            </p>
          </div>
        </div>
      </section>

      <CtaPanel />
      <section className="closing compact">
        <div className="page-shell">
          <Footer />
        </div>
      </section>
    </main>
  );
}
