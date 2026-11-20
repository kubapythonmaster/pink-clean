import { useState } from 'react'
import './Faq.css'

const items = [
  {
    q: 'Ile kosztuje pranie tapicerki?',
    a: 'Cena zależy od rodzaju mebla, tkaniny i stopnia zabrudzenia. Najszybciej wycenimy po zdjęciach lub krótkiej rozmowie pod 885 023 660.',
  },
  {
    q: 'Czy używacie silnej chemii?',
    a: 'Stawiamy na sprzątanie parą i środki dobrane do powierzchni. Hasło „Czysto, świeżo, bez chemii” oznacza świeży efekt bez agresywnego zapachu.',
  },
  {
    q: 'Jak szybko widać efekt?',
    a: 'Przy tapicerce różnica jest widoczna od razu po wyschnięciu — porównaj nasze zdjęcia przed i po.',
  },
  {
    q: 'Czy dojeżdżacie poza Nową Wieś Wielką?',
    a: 'Tak. Obsługujemy Bydgoszcz, Toruń, Nową Wieś Wielką i okolice. Przy dalszych adresach ustalimy dojazd indywidualnie.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <div>
          <p className="eyebrow">Pytania</p>
          <h2 className="section-title">Najczęstsze pytania</h2>
          <p className="section-lead">
            Krótko i konkretnie. Resztę dogadamy telefonicznie.
          </p>
        </div>

        <div className="faq__list">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <div className="faq__a" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
