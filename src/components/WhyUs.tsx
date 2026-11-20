import './WhyUs.css'

const points = [
  {
    title: 'Bez zbędnej chemii',
    text: 'Stawiamy na parę i środki dobrane do tkaniny — świeżość bez ostrego zapachu „po sprzątaniu”.',
  },
  {
    title: 'Widać różnicę',
    text: 'Pokazujemy przed i po. Nie opisujemy „premium standardu” — pokazujemy fotel, materac, krzesła.',
  },
  {
    title: 'Lokalnie i konkretnie',
    text: 'Bydgoszcz, Toruń, Nowa Wieś Wielka i okolice. Wycena po krótkiej rozmowie lub zdjęciach.',
  },
]

export function WhyUs() {
  return (
    <section className="section why" id="dlaczego">
      <div className="container why__grid">
        <div className="why__copy">
          <p className="eyebrow">Dlaczego Pink Clean</p>
          <h2 className="section-title">Dom ma pachnieć czystością, nie chemią</h2>
          <p className="section-lead">
            Pracujemy tak, jak obiecuje nasze hasło: czysto, świeżo, bez chemii.
            Specjalizacja to tapicerka i dokładne sprzątanie parą.
          </p>

          <ul className="why__list">
            {points.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="why__visual">
          <img
            src="/images/steam.webp"
            alt="Sprzątanie domu parownicą — mycie ścian, okien i detali"
            width={1000}
            height={1000}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
