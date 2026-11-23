
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/site-shell.css'

const footerNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="site-footer-main">
          <div className="site-footer-about">
            <Link to="/" className="site-footer-brand">
              <span className="site-footer-logo">
                RG<span>.</span>
              </span>
              <span>Ronit Ghai</span>
            </Link>

            <p>
              Software engineer building thoughtful solutions
              across full-stack development, artificial
              intelligence, cloud infrastructure, and embedded
              systems.
            </p>

            <a
              href="mailto:ronitghai@hotmail.com"
              className="site-footer-email"
            >
              Let's build something together
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="site-footer-column">
            <h3>EXPLORE</h3>

            <nav aria-label="Footer navigation">
              {footerNavigation.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer-column">
            <h3>CONNECT</h3>

            <div className="site-footer-social">
              <a
                href="https://github.com/ronitghai"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ronitghai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>

              <a href="mailto:ronitghai@hotmail.com">
                Email <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>
            © {new Date().getFullYear()} Ronit Ghai.
            All rights reserved.
          </span>

          <span className="site-footer-signature">
            DESIGNED & BUILT WITH PURPOSE
            <span className="site-footer-signature-dot" />
          </span>

          <a href="#top" className="site-back-to-top" onClick={(event) => {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
