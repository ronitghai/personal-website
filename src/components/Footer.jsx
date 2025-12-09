import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Ronit Ghai</span>
        <div className="footer-links">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/ronitghai"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer-link"
            href="https://github.com/ronitghai"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="footer-link">Built with React + Vite</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
