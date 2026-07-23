import Link from "next/link";
import { Footer, PageHero } from "../components";

const packages = [
  { name: "Landingpage", price: "399–699 €", best: "für ein klares einzelnes Angebot", text: "Eine moderne Seite mit Angebot, Vorteilen, Ablauf und Kontaktmöglichkeit. Gut für Aktionen, neue Leistungen oder den ersten Start." },
  { name: "Kleine Webseite", price: "699–1.199 €", best: "für Selbstständige und kleine Betriebe", text: "Startseite, Kontakt und wenige klare Unterseiten. Sinnvoll, wenn Sie professionell sichtbar sein möchten, ohne zu groß zu starten." },
  { name: "Mehrseitige Webseite", price: "1.199–2.499 €", best: "für einen vollständigen Unternehmensauftritt", text: "Startseite, Leistungsseiten, Ablauf, Über-mich/Über-uns, Fragen, Kontakt und rechtliche Pflichtseiten. Für die meisten Unternehmen passend." },
  { name: "Relaunch", price: "799–1.899 €", best: "wenn schon eine alte Seite da ist", text: "Bestehende Inhalte werden sortiert, verbessert und in einen modernen, mobil optimierten Aufbau gebracht." },
  { name: "Pflege & Änderungen", price: "ab 49 €", best: "wenn später etwas angepasst werden soll", text: "Texte, Bilder oder kleine Bereiche ändern. Für regelmäßige Betreuung kann ein monatlicher Preis vereinbart werden." },
];

export default function PreisePage() {
  return (
    <main>
      <PageHero
        eyebrow="Preise & Umfang"
        title="Erst klären,"
        accent=" dann fair einschätzen."
        text="Hier stehen faire Orientierungspreise. Der genaue Preis hängt davon ab, wie viele Seiten, Texte und Inhalte gebraucht werden."
      />
      <section className="content-section">
        <div className="page-shell price-grid">
          {packages.map((item) => (
            <article className="price-card" key={item.name}>
              <p>{item.best}</p>
              <h2>{item.name}</h2>
              <strong>{item.price}</strong>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="mini-cta">
        <div className="page-shell">
          <div className="contact-panel">
            <div>
              <p className="contact-label">EINFACHE EINSCHÄTZUNG</p>
              <h2>Schreiben Sie kurz, was Sie brauchen.</h2>
            </div>
            <div className="contact-copy">
              <p>Danach lässt sich sagen, ob eine kleine Seite reicht oder ob eine mehrseitige Webseite sinnvoller ist.</p>
              <Link className="contact-placeholder" href="/kontakt">Anfrage starten <i aria-hidden="true">→</i></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section slim">
        <div className="page-shell legal-layout">
          <article className="legal-card">
            <h2>Hinweis zu den Preisen</h2>
            <p>
              Alle Preise sind Orientierungspreise. Der genaue Festpreis richtet
              sich nach Umfang, Anzahl der Unterseiten, vorhandenen Inhalten,
              gewünschten Funktionen und Änderungsaufwand.
            </p>
            <p>
              Kleinunternehmer gemäß § 19 UStG: Es wird keine Umsatzsteuer
              ausgewiesen.
            </p>
          </article>
        </div>
      </section>
      <section className="closing compact"><div className="page-shell"><Footer /></div></section>
    </main>
  );
}
