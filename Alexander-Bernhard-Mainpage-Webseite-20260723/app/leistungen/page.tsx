import Link from "next/link";
import { CtaPanel, Footer, PageHero, services } from "../components";

export default function LeistungenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Leistungen"
        title="Webseiten für Unternehmen,"
        accent=" verständlich aufgebaut."
        text="Hier sehen Sie, welche Arten von Webseiten Alexander Bernhard erstellt. Alles ist so erklärt, dass man kein Vorwissen braucht."
      />

      <section className="content-section">
        <div className="page-shell service-detail-list">
          {services.map((service) => (
            <article className="detail-card" key={service.number}>
              <span>{service.number}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <ul>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link className="text-link" href={service.href}>
                  Eigene Seite öffnen →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="explain light">
        <div className="page-shell explain-grid">
          <div>
            <p className="eyebrow dark">
              <span />
              Wichtig
            </p>
            <h2>Eine gute Webseite beantwortet einfache Fragen.</h2>
          </div>
          <div className="plain-text">
            <p>Was bietet das Unternehmen an?</p>
            <p>Warum sollte ich dort anfragen?</p>
            <p>Wie nehme ich schnell Kontakt auf?</p>
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
