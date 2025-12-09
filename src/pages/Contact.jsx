import React from 'react'
import SectionHeader from '../components/SectionHeader'

const Contact = () => {
  return (
    <div className="page-container">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s get in touch"
        subtitle="I’m open to full-time roles, interesting problems, and collaborations in firmware, cloud, AI, and application work."
      />

      <div className="contact-grid">
        <div>
          <p className="contact-highlight">
            The best way to reach me is via email or LinkedIn. I’m happy to talk about engineering
            challenges, potential roles, or walk through any of the projects on this site.
          </p>
          <div className="contact-links">
            <div>
              <div className="contact-label">Email</div>
              <a href="mailto:ronitghai@hotmail.com">ronitghai@hotmail.com</a>
            </div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/ronitghai"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ronitghai
              </a>
            </div>
            <div>
              <div className="contact-label">GitHub</div>
              <a href="https://github.com/ronitghai" target="_blank" rel="noreferrer">
                github.com/ronitghai
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">What I’m excited about</h2>
          <p className="card-body">
            • Building reliable, production-ready systems end-to-end. <br />
            • Applying AI and generative models to real workflows. <br />
            • Bridging hardware and software when it actually moves the needle. <br />
          </p>
          <p className="card-body muted">
            If your team cares about solid engineering practices, clean abstractions, and useful
            products, we’ll probably get along.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
