
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/site-shell.css'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Certifications', path: '/certifications' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 12)

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/'

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    )
  }

  return (
    <header className={`site-navbar ${scrolled ? 'site-navbar-scrolled' : ''}`}>
      <div className="site-nav-inner">
        <Link
          to="/"
          className="site-brand"
          aria-label="Ronit Ghai — Home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="site-brand-mark">
            RG<span>.</span>
          </span>

          <span className="site-brand-details">
            <span className="site-brand-name">Ronit Ghai</span>
            <span className="site-brand-subtitle">
              SOFTWARE ENGINEER
            </span>
          </span>
        </Link>

        <nav className="site-desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={`site-nav-link ${
                isCurrent(item.path) ? 'site-nav-link-active' : ''
              }`}
              aria-current={isCurrent(item.path) ? 'page' : undefined}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className={`site-nav-contact ${
              isCurrent('/contact') ? 'site-nav-contact-active' : ''
            }`}
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>

        <button
          type="button"
          className={`site-menu-toggle ${menuOpen ? 'site-menu-toggle-open' : ''}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="site-mobile-navigation"
        className={`site-mobile-nav ${menuOpen ? 'site-mobile-nav-open' : ''}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        <div className="site-mobile-nav-inner">
          {navigation.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`site-mobile-link ${
                isCurrent(item.path) ? 'site-mobile-link-active' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="site-mobile-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              {item.label}

              <span className="site-mobile-arrow" aria-hidden="true">
                ↗
              </span>
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className={`site-mobile-link ${
              isCurrent('/contact') ? 'site-mobile-link-active' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="site-mobile-number">05</span>
            Contact
            <span className="site-mobile-arrow" aria-hidden="true">
              ↗
            </span>
          </NavLink>

          <div className="site-mobile-bottom">
            <a
              href="https://github.com/ronitghai"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ronitghai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
