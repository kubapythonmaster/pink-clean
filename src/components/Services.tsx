import './Services.css'

const services = [
  {
    title: 'Pranie tapicerki',
    text: 'Sofy, fotele, krzesła i materace. Usuwamy plamy i przywracamy kolor tkaniny — widać to na zdjęciach przed i po.',
  },
  {
    title: 'Sprzątanie parownicą',
    text: 'Domowa świeżość bez zbędnej chemii. Para radzi sobie ze ścianami, fugami i miejscami, których nie da się „przetrzeć”.',
  },
  {
    title: 'Mycie ścian i okien',
    text: 'Odświeżamy ściany, ramy i szyby tak, by wnętrze znów wyglądało na zadbane — nie tylko „przeszłe mopem”.',
  },
  {
    title: 'Żyrandole i detale',
    text: 'Doczyszczamy elementy, które zwykle zostają na później: oświetlenie, zakamarki i powierzchnie wymagające precyzji.',
  },
]

export function Services() {
  return (
    <section className="section services" id="uslugi">
      <div className="container">
        <p className="eyebrow">Usługi</p>
        <div className="services__head">
          <h2 className="section-title">Co robimy u Ciebie w domu</h2>
          <p className="section-lead">
            Skupiamy się na efektach, które widać gołym okiem: tapicerka, para,
            ściany i detale.
          </p>
        </div>

        <ol className="services__list">
          {services.map((item, i) => (
            <li key={item.title} className="services__item">
              <span className="services__num">0{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
