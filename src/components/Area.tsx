import './Area.css'

const PHONE = '885023660'

const places = [
  {
    name: 'Bydgoszcz',
    note: 'Miasto i najbliższe dzielnice',
  },
  {
    name: 'Toruń',
    note: 'Dojeżdżamy pod wskazany adres',
  },
  {
    name: 'Nowa Wieś Wielka',
    note: 'Baza — szybki dojazd lokalnie',
  },
  {
    name: 'Okolice',
    note: 'Potwierdzimy dojazd telefonicznie',
  },
]

export function Area() {
  return (
    <section className="section area" id="obszar">
      <div className="container area__grid">
        <div className="area__copy">
          <p className="eyebrow">Obszar działania</p>
          <h2 className="section-title">Przyjeżdżamy do Ciebie</h2>
          <p className="section-lead">
            Obsługujemy domy i mieszkania w regionie. Napisz lub zadzwoń —
            potwierdzimy dojazd pod Twój adres.
          </p>
          <a className="btn btn--primary area__cta" href={`tel:+48${PHONE}`}>
            Sprawdź dojazd: 885 023 660
          </a>
        </div>

        <ul className="area__places">
          {places.map((place, i) => (
            <li key={place.name}>
              <span className="area__num">0{i + 1}</span>
              <div>
                <strong>{place.name}</strong>
                <p>{place.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
