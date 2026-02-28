import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'active' : ''}`

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">PA</Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          id="site-navigation"
          className={`site-nav ${isMobileMenuOpen ? 'open' : ''}`}
          aria-label="Primary"
        >
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={linkClass}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
