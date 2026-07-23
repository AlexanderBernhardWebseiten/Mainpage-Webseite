import { CtaPanel, Footer, PageHero } from "../components";

const faqs = [
  { q: "Muss ich schon fertige Texte haben?", a: "Nein. Stichpunkte reichen für den Anfang. Daraus können klare Texte entstehen." },
  { q: "Brauche ich Fotos?", a: "Eigene Fotos sind gut, aber nicht immer zwingend. Das hängt vom Angebot ab." },
  { q: "Ist die Webseite auch fürs Handy geeignet?", a: "Ja. Die Seite wird so aufgebaut, dass sie auf dem Handy verständlich und gut bedienbar ist." },
  { q: "Kann die Webseite später erweitert werden?", a: "Ja. Neue Leistungen, Texte oder Seiten können später ergänzt werden." },
  { q: "Warum mehrere Seiten statt One-Pager?", a: "Mehrere Seiten helfen, Themen sauber zu trennen. Kunden finden schneller genau das, was sie interessiert." },
];

export default function FragenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Häufige Fragen"
        title="Kurz erklärt,"
        accent=" ohne Fachchinesisch."
        text="Hier stehen Antworten auf Fragen, die vor einer neuen Webseite häufig auftauchen."
      />
      <section className="content-section">
        <div className="page-shell faq-list">
          {faqs.map((item) => (
            <article key={item.q}>
              <h2>{item.q}</h2>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaPanel />
      <section className="closing compact"><div className="page-shell"><Footer /></div></section>
    </main>
  );
}
