import { useEffect, useState } from 'react'
import './Header.css'

const PHONE = '885023660'

const NAV = [
  { href: '#uslugi', id: 'uslugi', label: 'Usługi' },
  { href: '#efekty', id: 'efekty', label: 'Przed / Po' },
  { href: '#dlaczego', id: 'dlaczego', label: 'Dlaczego my' },
  { href: '#obszar', id: 'obszar', label: 'Obszar' },
  { href: '#kontakt', id: 'kontakt', label: 'Kontakt' },
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const ids = NAV.map((item) => item.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={close}>
          <img
            src="/images/logo.webp"
            alt="Pink Clean"
            width={44}
            height={44}
            decoding="async"
          />
          <span>
            <strong>Pink Clean</strong>
            <small>Firma sprzątająca</small>
          </span>
        </a>

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Główne">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={active === item.id ? 'is-active' : undefined}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header__cta" href={`tel:+48${PHONE}`}>
          Zadzwoń
        </a>

        <button
          type="button"
          className={`header__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
