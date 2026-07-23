import Link from "next/link";
import { Footer, PageHero } from "../components";

export default function UeberMichPage() {
  return (
    <main>
      <PageHero
        eyebrow="Über Alexander Bernhard"
        title="Webseiten mit klarem Blick"
        accent=" für echte Kunden."
        text="Alexander Bernhard erstellt moderne Webseiten, die nicht kompliziert wirken. Ziel ist ein professioneller Online-Auftritt, den Besucher sofort verstehen."
      />

      <section className="content-section">
        <div className="page-shell about-grid">
          <article className="large-card">
            <h2>Wofür die Arbeit steht</h2>
            <p>
              Viele Webseiten sehen zwar modern aus, erklären aber nicht klar,
              was ein Unternehmen anbietet. Genau dort setzt Alexander
              Bernhard an: Die Webseite soll gut aussehen, aber vor allem
              einfach verständlich sein.
            </p>
            <p>
              Kunden sollen nicht lange suchen müssen. Sie sollen direkt sehen,
              worum es geht, Vertrauen bekommen und Kontakt aufnehmen können.
            </p>
          </article>
          <aside className="side-card">
            <h3>Schwerpunkte</h3>
            <ul>
              <li>Webseiten für kleine Unternehmen</li>
              <li>Klare Texte ohne Fachsprache</li>
              <li>Modernes und mobiles Design</li>
              <li>Saubere Struktur mit Unterseiten</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mini-cta">
        <div className="page-shell">
          <div className="contact-panel">
            <div>
              <p className="contact-label">NÄCHSTER SCHRITT</p>
              <h2>Aus einer Idee kann eine richtige Webseite werden.</h2>
            </div>
            <div className="contact-copy">
              <p>
                Wenn Sie eine Webseite brauchen, reicht für den Anfang eine
                kurze Beschreibung Ihres Unternehmens.
              </p>
              <Link className="contact-placeholder" href="/kontakt">
                Anfrage starten
                <i aria-hidden="true">→</i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="closing compact">
        <div className="page-shell">
          <Footer />
        </div>
      </section>
    </main>
  );
}
