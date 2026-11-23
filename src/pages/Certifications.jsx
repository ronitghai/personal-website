
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { certifications } from '../data/certifications'
import '../styles/certifications-redesign.css'

const filters = ['All', 'AI', 'Cloud']

const getInitials = (name = '') =>
  name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

function CertificationLogo({ cert }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="cert-logo-container">
      {cert.image && !failed ? (
        <img
          src={cert.image}
          alt={`${cert.provider} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="cert-logo-fallback">
          {getInitials(cert.provider)}
        </span>
      )}
    </div>
  )
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredCertifications =
    activeFilter === 'All'
      ? certifications
      : certifications.filter(
          (cert) => cert.category === activeFilter
        )

  const providerCount = new Set(
    certifications.map((cert) => cert.provider)
  ).size

  return (
    <main className="cert-page">
      <div className="cert-background-grid" aria-hidden="true" />
      <div className="cert-background-glow" aria-hidden="true" />

      <div className="cert-container">

        {/* HERO */}
        <section className="cert-hero">
          <div className="cert-eyebrow">
            <span className="cert-eyebrow-line" />
            CONTINUOUS LEARNING
          </div>

          <h1>
            Learning Never
            <br />
            <span>Stops.</span>
          </h1>

          <p className="cert-hero-description">
            Building expertise through continuous learning,
            hands-on development, and industry-recognized
            training across artificial intelligence,
            cloud computing, and software engineering.
          </p>

          <div className="cert-hero-meta">
            <div className="cert-stat">
              <strong>{certifications.length}</strong>
              <span>CREDENTIALS</span>
            </div>

            <div className="cert-meta-divider" />

            <div className="cert-stat">
              <strong>{providerCount}</strong>
              <span>ISSUING ORGANIZATIONS</span>
            </div>

            <div className="cert-meta-divider" />

            <div className="cert-stat">
              <strong>
                {new Set(
                  certifications.map((cert) => cert.category)
                ).size}
              </strong>
              <span>SPECIALIZATIONS</span>
            </div>
          </div>
        </section>

        {/* CREDENTIAL GALLERY */}
        <section className="cert-section">
          <div className="cert-section-heading">
            <p className="cert-section-eyebrow">
              01 / CREDENTIAL LIBRARY
            </p>

            <h2>
              Certifications <span>& Credentials.</span>
            </h2>

            <p className="cert-section-description">
              A curated collection of completed professional
              certificates and technical courses.
            </p>
          </div>

          <div
            className="cert-filter-bar"
            role="group"
            aria-label="Filter certifications"
          >
            {filters.map((filter) => {
              const count =
                filter === 'All'
                  ? certifications.length
                  : certifications.filter(
                      (cert) => cert.category === filter
                    ).length

              return (
                <button
                  key={filter}
                  type="button"
                  className={`cert-filter ${
                    activeFilter === filter
                      ? 'cert-filter-active'
                      : ''
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter === 'All'
                    ? 'All Credentials'
                    : filter === 'AI'
                    ? 'Artificial Intelligence'
                    : 'Cloud Computing'}

                  <span>{count}</span>
                </button>
              )
            })}
          </div>

          <div className="cert-gallery">
            {filteredCertifications.map((cert, index) => (
              <article
                className="cert-card-new"
                key={cert.title}
              >
                <div className="cert-card-new-top">
                  <span className="cert-card-new-index">
                    CREDENTIAL /{' '}
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="cert-card-new-category">
                    {cert.category === 'AI'
                      ? 'AI & DEVELOPMENT'
                      : 'CLOUD COMPUTING'}
                  </span>
                </div>

                <CertificationLogo cert={cert} />

                <div className="cert-card-new-content">
                  <p className="cert-card-new-provider">
                    {cert.provider}
                  </p>

                  <h3>{cert.title}</h3>

                  <div className="cert-card-new-tags">
                    {cert.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="cert-card-new-bottom">
                  <div className="cert-card-new-date">
                    <span>ISSUED</span>
                    <strong>{cert.date}</strong>
                  </div>

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-card-new-link"
                      aria-label={`Verify ${cert.title}`}
                    >
                      Verify Credential
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="cert-card-new-completed">
                      <span className="cert-completed-dot" />
                      Completed
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LEARNING PHILOSOPHY */}
        <section className="cert-learning">
          <div
            className="cert-learning-decoration"
            aria-hidden="true"
          >
            {'</>'}
          </div>

          <div className="cert-learning-content">
            <p className="cert-section-eyebrow">
              02 / BEYOND CERTIFICATIONS
            </p>

            <h2>
              Knowledge is valuable.
              <br />
              <span>Applying it matters more.</span>
            </h2>

            <p>
              Certifications strengthen my technical
              foundation, but I believe the most meaningful
              learning happens when theory becomes practice.
              I apply these concepts through software
              applications, AI systems, cloud infrastructure,
              and embedded engineering projects.
            </p>

            <Link to="/projects" className="cert-project-link">
              Explore My Projects
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}
