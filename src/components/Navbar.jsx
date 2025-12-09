import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <div className="nav-logo">RG</div>
          <div className="nav-title">
            <span className="nav-name">Ronit Ghai</span>
            <span className="nav-role">Software · AI · Cloud · Embedded</span>
          </div>
        </div>
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              'nav-link ' + (isActive ? 'nav-link-active' : '')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              'nav-link ' + (isActive ? 'nav-link-active' : '')
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              'nav-link ' + (isActive ? 'nav-link-active' : '')
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/certifications"
            className={({ isActive }) =>
              'nav-link ' + (isActive ? 'nav-link-active' : '')
            }
          >
            Certifications
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              'nav-link ' + (isActive ? 'nav-link-active' : '')
            }
          >
            Contact
          </NavLink>
          <a
            href="https://github.com/ronitghai"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            <span>GitHub</span>
            <span className="arrow">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
