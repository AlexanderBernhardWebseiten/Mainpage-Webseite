import { Footer, PageHero } from "../components";

export default function KontaktPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        title="Eine neue Webseite"
        accent=" beginnt mit einer kurzen Nachricht."
        text="Schreiben Sie kurz, was Ihr Unternehmen macht und welche Art von Webseite Sie brauchen. Danach kann der Umfang einfach und ehrlich eingeschätzt werden."
      />

      <section className="content-section">
        <div className="page-shell contact-layout">
          <article className="large-card">
            <h2>Was sollte in der Anfrage stehen?</h2>
            <p>
              Es muss nicht perfekt formuliert sein. Ein paar einfache
              Informationen reichen für den Start.
            </p>
            <ul className="simple-list">
              <li>Wie heißt Ihr Unternehmen?</li>
              <li>Was bieten Sie an?</li>
              <li>Brauchen Sie eine neue Webseite oder einen Relaunch?</li>
              <li>Gibt es schon Texte, Bilder oder ein Logo?</li>
              <li>Bis wann soll die Webseite fertig sein?</li>
            </ul>
          </article>

          <aside className="contact-box">
            <p className="contact-label">KONTAKTDATEN</p>
            <h2>Direkt Kontakt aufnehmen</h2>
            <p>
              Für den Anfang reicht eine kurze Nachricht per E-Mail. Es gibt
              bewusst kein Kontaktformular und keine Telefonnummer auf der
              Webseite. So bleiben Kontaktaufnahme und Datenschutz einfach.
            </p>
            <a className="email-link" href="mailto:alexanderbernhard.webseiten@gmail.com">
              alexanderbernhard.webseiten@gmail.com
            </a>
          </aside>
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
