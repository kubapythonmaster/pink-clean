import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from 'react-compare-slider'
import './BeforeAfter.css'

const comparisons = [
  {
    id: 'fotel',
    title: 'Fotel bouclé',
    note: 'Od szarego, zabrudzonego materiału do świeżego, różowego odcienia.',
    before: '/images/fotel-przed.webp',
    after: '/images/fotel-po.webp',
  },
  {
    id: 'materac',
    title: 'Materac',
    note: 'Plamy znikają, tkanina wraca do równego, jasnego koloru.',
    before: '/images/materac-przed.webp',
    after: '/images/materac-po.webp',
  },
]

export function BeforeAfter() {
  return (
    <section className="section section--soft effects" id="efekty">
      <div className="container">
        <p className="eyebrow">Przed / Po</p>
        <div className="effects__head">
          <h2 className="section-title">Efekt widać od razu</h2>
          <p className="section-lead">
            Przesuń suwak. To prawdziwe realizacje Pink Clean — bez retuszu
            „na katalog”.
          </p>
        </div>

        <div className="effects__grid">
          {comparisons.map((item) => (
            <article key={item.id} className="effects__item">
              <div className="effects__slider">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={item.before}
                      alt={`${item.title} — przed czyszczeniem`}
                      loading="lazy"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={item.after}
                      alt={`${item.title} — po czyszczeniu`}
                      loading="lazy"
                    />
                  }
                  defaultPosition={55}
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        backdropFilter: 'none',
                        background: '#e11d74',
                        border: '3px solid #fff',
                        color: '#fff',
                        boxShadow: '0 8px 20px rgba(225, 29, 116, 0.35)',
                      }}
                      linesStyle={{ opacity: 0.85 }}
                    />
                  }
                  style={{ width: '100%', height: '100%' }}
                />
                <span className="effects__tag effects__tag--before">Przed</span>
                <span className="effects__tag effects__tag--after">Po</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>

        <figure className="effects__promo">
          <img
            src="/images/krzesla.webp"
            alt="Krzesła przed i po czyszczeniu tapicerki — Pink Clean"
            width={1000}
            height={750}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
