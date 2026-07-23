import { CtaPanel, Footer, PageHero, PlainSteps, simpleQuestions } from "../components";

const items = [
  {
    title: "Eine Startseite, die sofort erklärt, worum es geht",
    text: "Besucher sehen direkt, was Sie anbieten, für wen es gedacht ist und warum sie bei Ihnen richtig sind.",
  },
  {
    title: "Unterseiten für wichtige Themen",
    text: "Leistungen, Ablauf, Kontakt und weitere Inhalte bekommen eigene Seiten. Das wirkt aufgeräumt und seriös.",
  },
  {
    title: "Texte ohne unnötige Fachwörter",
    text: "Die Webseite spricht normale Menschen an. Sie soll Vertrauen schaffen, nicht beeindrucken um jeden Preis.",
  },
];

export default function WebseiteErstellenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Neue Webseite"
        title="Eine Webseite,"
        accent=" die Ihr Angebot einfach erklärt."
        text="Geeignet für Unternehmen, Selbstständige und Dienstleister, die noch keine gute Webseite haben oder endlich professionell auftreten möchten."
      />
      <section className="content-section">
        <div className="page-shell split-content">
          <article className="large-card">
            <h2>Was bekommen Sie?</h2>
            <p>
              Sie bekommen eine richtige Webseite mit mehreren Seiten. Jede
              Seite hat eine klare Aufgabe. So finden Besucher schneller, was
              sie suchen.
            </p>
            <p>
              Wichtig ist nicht, dass die Webseite kompliziert wirkt. Wichtig
              ist, dass sie Vertrauen aufbaut und zu einer Anfrage führt.
            </p>
          </article>
          <aside className="side-card">
            <h3>Für den Start hilfreich</h3>
            <ul>
              {simpleQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <section className="content-section soft">
        <div className="page-shell">
          <PlainSteps items={items} />
        </div>
      </section>
      <CtaPanel />
      <section className="closing compact">
        <div className="page-shell"><Footer /></div>
      </section>
    </main>
  );
}
