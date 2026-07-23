import { CtaPanel, Footer, PageHero, PlainSteps } from "../components";

const items = [
  { title: "Alte Inhalte prüfen", text: "Was ist noch richtig? Was kann weg? Was fehlt, damit Kunden Sie besser verstehen?" },
  { title: "Neue Struktur erstellen", text: "Aus einer unübersichtlichen Seite wird ein sauberer Aufbau mit klaren Unterseiten." },
  { title: "Modern und mobil machen", text: "Die neue Webseite soll auf Handy, Tablet und Computer ordentlich aussehen." },
];

export default function RelaunchPage() {
  return (
    <main>
      <PageHero
        eyebrow="Website-Relaunch"
        title="Ihre alte Webseite"
        accent=" wird wieder verständlich."
        text="Ein Relaunch ist sinnvoll, wenn die aktuelle Webseite veraltet aussieht, schwer zu bedienen ist oder Ihr Angebot nicht mehr gut erklärt."
      />
      <section className="content-section">
        <div className="page-shell explain-grid">
          <div>
            <p className="eyebrow dark"><span />Einfach gesagt</p>
            <h2>Ein Relaunch ist wie Renovieren.</h2>
          </div>
          <div className="plain-text">
            <p>Die Adresse und die Grundidee können bleiben. Aber Aufbau, Texte und Aussehen werden verbessert.</p>
            <p>Danach wirkt Ihr Unternehmen moderner und Besucher finden schneller den Weg zur Anfrage.</p>
          </div>
        </div>
      </section>
      <section className="content-section soft">
        <div className="page-shell"><PlainSteps items={items} /></div>
      </section>
      <CtaPanel />
      <section className="closing compact"><div className="page-shell"><Footer /></div></section>
    </main>
  );
}
