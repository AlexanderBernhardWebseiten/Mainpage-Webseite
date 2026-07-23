import Link from "next/link";
import { CtaPanel, Footer, SiteHeader, services } from "./components";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="page-shell">
          <SiteHeader />

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span />
                Webseitenerstellung aus Bottrop
              </p>
              <h1>
                Webseiten, die Kunden
                <em> sofort verstehen.</em>
              </h1>
              <p className="hero-text">
                Alexander Bernhard erstellt und betreut professionelle Webseiten
                für Selbstständige, kleine Unternehmen und lokale Dienstleister.
                Einfach erklärt: Sie bekommen eine moderne Seite, auf der Kunden
                schnell sehen, was Sie anbieten und wie sie Sie erreichen.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/kontakt">
                  Projekt besprechen
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link className="button button-secondary" href="/leistungen">
                  Leistungen ansehen
                </Link>
              </div>
              <div className="trust-line" aria-label="Vorteile">
                <span>Klare Texte</span>
                <span>Mobil optimiert</span>
                <span>Professioneller Eindruck</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Projektablauf">
              <div className="visual-glow" />
              <div className="system-card">
                <div className="system-topbar">
                  <span className="system-title">
                    <i /> Webseiten-Projekt
                  </span>
                  <span className="live-badge">Struktur</span>
                </div>
                <div className="system-body">
                  <p className="system-label">SO WIRD AUS EINER IDEE EINE WEBSEITE</p>
                  <h2>Erst verstehen. Dann aufbauen. Danach sauber übergeben.</h2>
                  <div className="system-steps">
                    <div>
                      <span>01</span>
                      <p>
                        <strong>Inhalte</strong>
                        Was soll auf die Webseite?
                      </p>
                      <i className="step-done">✓</i>
                    </div>
                    <div>
                      <span>02</span>
                      <p>
                        <strong>Aufbau</strong>
                        Seiten, Texte und Design erstellen
                      </p>
                      <i className="step-active" />
                    </div>
                    <div>
                      <span>03</span>
                      <p>
                        <strong>Start</strong>
                        Webseite prüfen und veröffentlichen
                      </p>
                      <i />
                    </div>
                  </div>
                </div>
                <div className="system-footer">
                  <span>Startseite</span>
                  <span>Unterseiten</span>
                  <span>Kontakt</span>
                </div>
              </div>
              <div className="signal-card">
                <span className="signal-icon">⌁</span>
                <span>
                  <strong>Keine Fachsprache</strong>
                  Verständlich für jeden Besucher
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow dark">
              <span />
              Überblick
            </p>
            <h2>Eine richtige Webseite, nicht nur eine einzelne Seite.</h2>
            <p>
              Ihre Webseite kann mehrere Bereiche haben: Startseite,
              Leistungen, Informationen zum Ablauf und eine Kontaktseite. So
              wirkt Ihr Unternehmen seriös und Kunden finden sich leicht zurecht.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link className="service-card" href={service.href} key={service.number}>
                <div className="service-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section white-tight">
        <div className="page-shell sitemap-grid">
          <div>
            <p className="eyebrow dark">
              <span />
              Seiten der Webseite
            </p>
            <h2>Jedes Thema bekommt seinen eigenen Platz.</h2>
          </div>
          <div className="sitemap-list">
            <Link href="/webseite-erstellen">Neue Webseite</Link>
            <Link href="/relaunch">Website-Relaunch</Link>
            <Link href="/landingpage">Landingpage</Link>
            <Link href="/pflege">Pflege & Erweiterung</Link>
            <Link href="/preise">Preise & Umfang</Link>
            <Link href="/fragen">Häufige Fragen</Link>
          </div>
        </div>
      </section>

      <section className="explain">
        <div className="page-shell explain-grid">
          <div>
            <p className="eyebrow dark">
              <span />
              Verständlich erklärt
            </p>
            <h2>Was heißt „Webseite erstellen“ eigentlich?</h2>
          </div>
          <div className="plain-text">
            <p>
              Eine Webseite ist wie ein digitales Schaufenster. Menschen suchen
              nach Ihrem Unternehmen, schauen sich Ihr Angebot an und entscheiden
              dann, ob sie Kontakt aufnehmen.
            </p>
            <p>
              Deshalb muss eine gute Webseite nicht kompliziert sein. Sie muss
              klar sagen, wer Sie sind, was Sie anbieten und warum man Ihnen
              vertrauen kann.
            </p>
            <Link className="text-link" href="/ablauf">
              Ablauf einfach erklärt →
            </Link>
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
