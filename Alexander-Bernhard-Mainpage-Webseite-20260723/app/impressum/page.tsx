import { Footer, PageHero } from "../components";

export default function ImpressumPage() {
  return (
    <main>
      <PageHero
        eyebrow="Impressum"
        title="Angaben"
        accent=" gemäß gesetzlicher Pflicht."
        text="Hier finden Sie die Anbieterkennzeichnung nach § 5 DDG von Alexander Bernhard."
      />

      <section className="content-section">
        <div className="page-shell legal-layout">
          <article className="legal-card">
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              Alexander Bernhard
              <br />
              Lindhorststr. 158
              <br />
              46242 Bottrop
              <br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:alexanderbernhard.webseiten@gmail.com">
                alexanderbernhard.webseiten@gmail.com
              </a>
            </p>

            <h2>Umsatzsteuer</h2>
            <p>
              Kleinunternehmer gemäß § 19 UStG. Es wird keine Umsatzsteuer
              ausgewiesen.
            </p>

            <h2>Tätigkeit</h2>
            <p>
              Einzelunternehmer für Webseitenerstellung und Betreuung von
              Webseiten.
            </p>

            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Alexander Bernhard
              <br />
              Anschrift wie oben
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Die Inhalte dieser Webseite wurden sorgfältig erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
              jedoch keine Gewähr übernommen werden.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Diese Webseite kann Links zu externen Webseiten enthalten. Auf die
              Inhalte externer Seiten besteht kein Einfluss. Für diese Inhalte
              ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </p>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Es besteht keine Verpflichtung und keine Bereitschaft, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2>Hinweis</h2>
            <p>
              Diese Angaben wurden nach bestem Wissen erstellt. Eine rechtliche
              Prüfung durch eine fachkundige Stelle kann dadurch nicht ersetzt
              werden.
            </p>
          </article>
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
