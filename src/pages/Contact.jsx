
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/contact-redesign.css'

const EMAIL = 'ronitghai@hotmail.com'

const contactLinks = [
  {
    id: 'linkedin',
    number: '01',
    label: 'LINKEDIN',
    title: 'Connect professionally',
    description:
      'Explore my professional background, experience, and career journey.',
    display: 'linkedin.com/in/ronitghai',
    url: 'https://www.linkedin.com/in/ronitghai/',
    icon: 'in',
  },
  {
    id: 'github',
    number: '02',
    label: 'GITHUB',
    title: 'Explore my code',
    description:
      'Browse repositories, engineering projects, and technical experiments.',
    display: 'github.com/ronitghai',
    url: 'https://github.com/ronitghai',
    icon: 'GH',
  },
]

const interests = [
  {
    number: '01',
    title: 'Full-Stack Engineering',
    description:
      'Building thoughtful, reliable applications from frontend experiences to backend systems.',
  },
  {
    number: '02',
    title: 'AI & Intelligent Systems',
    description:
      'Creating useful AI-powered tools, agents, and workflows that solve real problems.',
  },
  {
    number: '03',
    title: 'Cloud & Infrastructure',
    description:
      'Designing scalable services, APIs, and cloud-native application architectures.',
  },
  {
    number: '04',
    title: 'Embedded & IoT',
    description:
      'Connecting software with physical hardware, sensors, and intelligent devices.',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <main className="ct-page">
      <div className="ct-background-grid" aria-hidden="true" />
      <div className="ct-background-glow" aria-hidden="true" />

      <div className="ct-container">
        {/* HERO */}
        <section className="ct-hero">
          <div className="ct-eyebrow">
            <span className="ct-eyebrow-line" />
            LET'S CONNECT
          </div>

          <h1>
            Let's Build
            <br />
            <span>Something Great.</span>
          </h1>

          <p className="ct-hero-description">
            Whether you're looking for a software engineer,
            have an interesting technical challenge, or want
            to collaborate on an idea, I'd love to hear from you.
          </p>

          <div className="ct-hero-actions">
            <a
              href={`mailto:${EMAIL}`}
              className="ct-button ct-button-primary"
            >
              <span className="ct-button-icon">✉</span>
              Send Me an Email
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ronitghai/"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-button ct-button-secondary"
            >
              Connect on LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="ct-contact-section">
          <div className="ct-section-heading">
            <p className="ct-section-eyebrow">
              01 / GET IN TOUCH
            </p>

            <h2>
              Start a <span>Conversation.</span>
            </h2>

            <p>
              The easiest way to reach me is by email.
              You can also connect with me through my
              professional profiles below.
            </p>
          </div>

          <div className="ct-contact-layout">
            {/* FEATURED EMAIL CARD */}
            <div className="ct-email-card">
              <div className="ct-email-card-top">
                <span className="ct-card-label">
                  DIRECT CONTACT
                </span>

                <span className="ct-email-status">
                  <span className="ct-status-dot" />
                  OPEN TO OPPORTUNITIES
                </span>
              </div>

              <div className="ct-email-card-content">
                <div className="ct-email-icon" aria-hidden="true">
                  ✉
                </div>

                <p className="ct-email-overline">
                  HAVE SOMETHING IN MIND?
                </p>

                <h3>Drop me a line.</h3>

                <p className="ct-email-description">
                  I'm always interested in discussing software
                  engineering roles, technical collaborations,
                  and projects with meaningful impact.
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="ct-email-address"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="ct-email-card-footer">
                <a
                  href={`mailto:${EMAIL}`}
                  className="ct-email-send"
                >
                  Write an Email
                  <span aria-hidden="true">↗</span>
                </a>

                <button
                  type="button"
                  className="ct-copy-button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? '✓ Copied!' : '⧉ Copy Email'}
                </button>
              </div>
            </div>

            {/* SOCIAL CARDS */}
            <div className="ct-social-column">
              {contactLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-social-card"
                >
                  <div className="ct-social-top">
                    <span className="ct-social-label">
                      {item.number} / {item.label}
                    </span>

                    <span
                      className="ct-social-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="ct-social-main">
                    <div className="ct-social-icon">
                      {item.icon}
                    </div>

                    <div className="ct-social-text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>

                  <span className="ct-social-url">
                    {item.display}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ENGINEERING INTERESTS */}
        <section className="ct-interests-section">
          <div className="ct-section-heading">
            <p className="ct-section-eyebrow">
              02 / AREAS OF INTEREST
            </p>

            <h2>
              What Excites <span>Me.</span>
            </h2>

            <p>
              I'm especially interested in opportunities
              where thoughtful engineering meets real-world
              impact.
            </p>
          </div>

          <div className="ct-interests-grid">
            {interests.map((item) => (
              <div className="ct-interest-card" key={item.number}>
                <span className="ct-interest-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span
                  className="ct-interest-decoration"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="ct-bottom-cta">
          <div className="ct-bottom-decoration" aria-hidden="true">
            {'</>'}
          </div>

          <div className="ct-bottom-content">
            <p className="ct-section-eyebrow">
              03 / EXPLORE MORE
            </p>

            <h2>
              Curious about
              <br />
              <span>what I've built?</span>
            </h2>

            <p>
              Take a closer look at the projects, technologies,
              and engineering challenges I've worked on.
            </p>

            <div className="ct-bottom-actions">
              <Link
                to="/projects"
                className="ct-button ct-button-primary"
              >
                View My Projects
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                to="/experience"
                className="ct-button ct-button-secondary"
              >
                My Experience
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
