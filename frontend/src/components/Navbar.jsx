import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV, COMPANY } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <img src="/logo-mark.svg" alt="" className="brand-mark" width="38" height="38" />
          <span className="brand-text">
            {COMPANY.name}
            <small>{COMPANY.tagline}</small>
          </span>
        </Link>

        <button
          className="nav-burger"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={close}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/kontakty" className="btn btn-primary nav-cta" onClick={close}>
            Получить расчёт
          </Link>
        </nav>
      </div>
    </header>
  )
}
