import { asset } from '../lib/asset'
import './Footer.css'

const PHONE = '885023660'
const FB = 'https://www.facebook.com/profile.php?id=61574885378800'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            src={asset('images/logo.webp')}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
          />
          <div>
            <strong>Pink Clean</strong>
            <p>Firma sprzątająca</p>
          </div>
        </div>

        <div className="footer__links">
          <a href={`tel:+48${PHONE}`}>885 023 660</a>
          <a href={FB} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="#uslugi">Usługi</a>
          <a href="#efekty">Przed / Po</a>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Pink Clean. Bydgoszcz, Toruń, Nowa Wieś
            Wielka.
          </p>
          <p className="footer__credit">
            Stworzona przez{' '}
            <a
              href="https://nocturagency.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Noctura
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
