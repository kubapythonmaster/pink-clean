import './Hero.css'

const PHONE = '885023660'
const FB = 'https://www.facebook.com/profile.php?id=61574885378800'

export function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <img
            src="/images/hero-fotel.webp"
            alt=""
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero__veil" aria-hidden="true" />

        <div className="hero__content">
          <p className="hero__eyebrow">Bydgoszcz · Toruń · Nowa Wieś Wielka</p>

          <h1 id="hero-title">
            <span className="hero__line hero__line--light">Czysta tapicerka.</span>
            <span className="hero__line hero__line--accent">Widoczny</span>
            <span className="hero__line hero__line--accent">efekt.</span>
          </h1>

          <p className="hero__lead">
            Pranie mebli i sprzątanie parownicą. Na zdjęciach widać przed i po —
            nie opisujemy się jak wszyscy.
          </p>

          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href={`tel:+48${PHONE}`}>
              Zadzwoń: 885 023 660
            </a>
            <a
              className="hero__btn hero__btn--ghost"
              href={FB}
              target="_blank"
              rel="noopener noreferrer"
            >
              Napisz na Facebooku
            </a>
          </div>
        </div>
      </section>

      <div className="hero-scroll">
        <a href="#uslugi" aria-label="Przejdź niżej do usług">
          <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true">
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </>
  )
}
