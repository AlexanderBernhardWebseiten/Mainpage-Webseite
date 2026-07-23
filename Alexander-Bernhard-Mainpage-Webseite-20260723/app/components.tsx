import Link from "next/link";

export const services = [
  {
    number: "01",
    title: "Neue Webseite",
    text: "Eine komplett neue Webseite für Ihr Unternehmen. Sie bekommen eine klare Struktur, passende Texte und ein modernes Design.",
    tags: ["Startseite", "Unterseiten", "Mobil optimiert"],
    href: "/webseite-erstellen",
  },
  {
    number: "02",
    title: "Website-Relaunch",
    text: "Ihre alte Webseite wird neu aufgebaut. Sie wirkt danach moderner, verständlicher und besser auf dem Handy.",
    tags: ["Redesign", "Bessere Texte", "Sauberer Aufbau"],
    href: "/relaunch",
  },
  {
    number: "03",
    title: "Landingpage",
    text: "Eine einzelne Seite für ein bestimmtes Angebot. Ideal, wenn Besucher schnell verstehen und anfragen sollen.",
    tags: ["Angebot", "Aktion", "Kontakt"],
    href: "/landingpage",
  },
  {
    number: "04",
    title: "Pflege & Erweiterung",
    text: "Texte ändern, neue Bereiche ergänzen oder die Webseite weiter verbessern, wenn Ihr Unternehmen wächst.",
    tags: ["Updates", "Neue Inhalte", "Erweiterungen"],
    href: "/pflege",
  },
];

export const simpleQuestions = [
  "Was bieten Sie an?",
  "Für wen ist Ihr Angebot gedacht?",
  "Wie sollen Besucher Kontakt aufnehmen?",
  "Gibt es schon Logo, Bilder oder Texte?",
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Alexander Bernhard Startseite">
        <span className="brand-mark" aria-hidden="true" />
        <span className="brand-word">
          Alexander Bernhard
          <small>Webseitenerstellung & Betreuung</small>
        </span>
      </Link>
      <nav aria-label="Hauptnavigation">
        <Link href="/leistungen">Leistungen</Link>
        <Link href="/ablauf">Ablauf</Link>
        <Link href="/preise">Preise</Link>
        <Link href="/fragen">Fragen</Link>
        <Link href="/ueber-mich">Über mich</Link>
        <Link className="nav-cta" href="/kontakt">
          Anfrage starten
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <>
      <SimpleFooterLinks />
      <footer>
        <Link className="brand" href="/" aria-label="Zur Startseite">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-word">
            Alexander Bernhard
            <small>Webseitenerstellung & Betreuung</small>
          </span>
        </Link>
        <p>Webseitenerstellung aus Bottrop · Modern, mobil und verständlich</p>
        <span className="footer-actions">
          <Link href="/fragen">Fragen</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/kontakt">Kontakt aufnehmen ↑</Link>
        </span>
      </footer>
    </>
  );
}

export function SimpleFooterLinks() {
  return (
    <div className="footer-links" aria-label="Weitere Seiten">
      <Link href="/webseite-erstellen">Neue Webseite</Link>
      <Link href="/relaunch">Relaunch</Link>
      <Link href="/landingpage">Landingpage</Link>
      <Link href="/pflege">Pflege</Link>
      <Link href="/preise">Preise</Link>
      <Link href="/fragen">Fragen</Link>
      <Link href="/impressum">Impressum</Link>
      <Link href="/datenschutz">Datenschutz</Link>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  text,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
}) {
  return (
    <section className="sub-hero">
      <div className="page-shell">
        <SiteHeader />
        <div className="sub-hero-copy">
          <p className="eyebrow">
            <span />
            {eyebrow}
          </p>
          <h1>
            {title}
            <em>{accent}</em>
          </h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

export function CtaPanel() {
  return (
    <section className="mini-cta">
      <div className="page-shell">
        <div className="contact-panel">
          <div>
            <p className="contact-label">PROJEKTANFRAGE</p>
            <h2>Sie brauchen eine Webseite für Ihr Unternehmen?</h2>
          </div>
          <div className="contact-copy">
            <p>
              Schreiben Sie kurz per E-Mail, was Ihr Unternehmen macht und
              welche Webseite Sie brauchen. Danach kann der passende Umfang
              einfach besprochen werden.
            </p>
            <a className="contact-placeholder" href="mailto:alexanderbernhard.webseiten@gmail.com">
              alexanderbernhard.webseiten@gmail.com
              <i aria-hidden="true">→</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlainSteps({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="plain-steps">
      {items.map((item, index) => (
        <article key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
