import './Contact.css'

const PHONE = '885023660'
const PHONE_LABEL = '885 023 660'
const FB = 'https://www.facebook.com/profile.php?id=61574885378800'

export function Contact() {
  return (
    <section className="section contact" id="kontakt">
      <div className="container contact__panel">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2 className="section-title">Umów wycenę</h2>
          <p className="section-lead">
            Najszybciej zadzwoń. Możesz też napisać na Facebooku i dołączyć
            zdjęcia mebli lub pomieszczenia.
          </p>
        </div>

        <div className="contact__actions">
          <a className="btn btn--primary contact__phone" href={`tel:+48${PHONE}`}>
            {PHONE_LABEL}
          </a>
          <a
            className="btn btn--ghost"
            href={FB}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Pink Clean
          </a>
          <p className="contact__meta">
            Bydgoszcz · Toruń · Nowa Wieś Wielka i okolice
          </p>
        </div>
      </div>
    </section>
  )
}
