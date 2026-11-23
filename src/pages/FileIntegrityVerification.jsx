
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectVisual from '../components/ProjectVisual'
import '../styles/project-case-study.css'
import '../styles/file-integrity-case-study.css'

const technologies = [
  'Python',
  'FastAPI',
  'Azure Functions',
  'Azure Blob Storage',
  'HTML/CSS/JS',
  'Docker',
  'Postman',
  'Swagger UI',
]

const capabilities = [
  {
    number: '01',
    title: 'Website File Upload',
    description:
      'Users submit files directly through the web interface, which sends them to the backend for processing.',
    icon: '↑',
  },
  {
    number: '02',
    title: 'SHA-256 Hashing',
    description:
      'The backend computes a SHA-256 digest to represent the contents of an uploaded file.',
    icon: '#',
  },
  {
    number: '03',
    title: 'Integrity Verification',
    description:
      'The system compares the computed digest against a previously stored reference hash to identify changes.',
    icon: '✓',
  },
  {
    number: '04',
    title: 'Cloud Integration',
    description:
      'Azure Functions provides backend execution, while Azure Blob Storage supports file and hash persistence.',
    icon: '☁',
  },
]

export default function FileIntegrityVerification() {
  const [demoStatus, setDemoStatus] = useState('verified')

  const isVerified = demoStatus === 'verified'

  return (
    <main className="cs-page fi-page">
      <div className="cs-grid-background" aria-hidden="true" />

      <div className="cs-container">
        <Link to="/projects" className="cs-back-link">
          ← Back to Projects
        </Link>

        {/* HERO */}
        <section className="cs-hero">
          <p className="cs-eyebrow">
            PROJECT 02 / CLOUD & SECURITY
          </p>

          <h1>
            File Integrity
            <br />
            <span>Verification.</span>
          </h1>

          <p className="cs-hero-description">
            A cloud-based security application that detects
            modified or tampered files using SHA-256 hashing,
            a web-based upload interface, and serverless
            backend infrastructure on Microsoft Azure.
          </p>

          <div className="cs-tags">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="cs-hero-metrics">
            <div>
              <strong>SHA-256</strong>
              <span>HASHING ALGORITHM</span>
            </div>

            <div>
              <strong>Azure</strong>
              <span>CLOUD INFRASTRUCTURE</span>
            </div>

            <div>
              <strong>REST</strong>
              <span>API INTERFACE</span>
            </div>
          </div>
        </section>

        {/* INTERACTIVE DEMO */}
        <section className="cs-preview-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              01 / INTERACTIVE SECURITY DEMO
            </p>

            <h2>
              Trust, but <span>Verify.</span>
            </h2>

            <p>
              Explore how a file's integrity status changes
              when its contents no longer match the stored hash.
            </p>
          </div>

          <div className="fi-demo-container">
            <div className="fi-demo-header">
              <span>VERIFY.SYS / INTEGRITY MONITOR</span>
              <span className="fi-demo-live">● DEMO MODE</span>
            </div>

            <div className="fi-demo-content">
              <div className="fi-demo-visual">
                <ProjectVisual type="security" />
              </div>

              <div className="fi-demo-controls">
                <p className="fi-demo-label">
                  VERIFICATION SIMULATION
                </p>

                <h3>
                  {isVerified
                    ? 'Integrity Confirmed'
                    : 'Integrity Mismatch'}
                </h3>

                <p>
                  {isVerified
                    ? 'The simulated current file hash matches the stored reference.'
                    : 'The simulated file contents have changed, resulting in a different hash.'}
                </p>

                <div
                  className={
                    isVerified
                      ? 'fi-status fi-status-success'
                      : 'fi-status fi-status-error'
                  }
                  role="status"
                >
                  <span>{isVerified ? '✓' : '!'}</span>
                  {isVerified
                    ? 'HASH MATCH / VERIFIED'
                    : 'HASH MISMATCH / MODIFIED'}
                </div>

                <div className="fi-demo-buttons">
                  <button
                    type="button"
                    onClick={() => setDemoStatus('modified')}
                    className="fi-button fi-button-primary"
                  >
                    Simulate Tampering
                  </button>

                  <button
                    type="button"
                    onClick={() => setDemoStatus('verified')}
                    className="fi-button fi-button-secondary"
                  >
                    Reset Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="cs-preview-caption">
            This is an illustrative simulation. It does not
            upload files, calculate actual SHA-256 hashes,
            or connect to the original Azure backend.
          </p>
        </section>

        {/* PROBLEM */}
        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              02 / PROJECT OVERVIEW
            </p>

            <h2>
              Detecting <span>Change.</span>
            </h2>
          </div>

          <div className="cs-two-column">
            <p>
              Digital files can be changed accidentally or
              deliberately. Without a reliable reference,
              identifying whether a file has been modified
              can be difficult.
            </p>

            <p>
              This project provides a web-based workflow
              for uploading files and checking their integrity
              using SHA-256 hashes. The backend supports
              hash comparison and cloud-based persistence.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              03 / CORE CAPABILITIES
            </p>

            <h2>
              Built for <span>Verification.</span>
            </h2>
          </div>

          <div className="cs-feature-grid">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="cs-feature-card"
              >
                <div className="cs-feature-top">
                  <span>{capability.number}</span>
                  <span className="cs-feature-icon">
                    {capability.icon}
                  </span>
                </div>

                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              04 / SYSTEM ARCHITECTURE
            </p>

            <h2>
              Cloud-Native <span>Design.</span>
            </h2>

            <p>
              The application connects a browser-based
              interface to a cloud backend for file
              processing and verification.
            </p>
          </div>

          <div className="fi-architecture">
            <div className="fi-architecture-node">
              <span>01 / USER INTERFACE</span>
              <strong>Azure Static Web Apps</strong>
              <p>HTML, CSS, JavaScript · File upload UI</p>
            </div>

            <div className="fi-architecture-arrow">
              ↓ <small>HTTPS / API REQUEST</small>
            </div>

            <div className="fi-architecture-node">
              <span>02 / BACKEND SERVICES</span>
              <strong>Azure Functions + Python</strong>
              <p>File processing · SHA-256 · Verification API</p>
            </div>

            <div className="fi-architecture-arrow">
              ↓ <small>FILE / HASH STORAGE</small>
            </div>

            <div className="fi-architecture-node">
              <span>03 / PERSISTENCE</span>
              <strong>Azure Blob Storage</strong>
              <p>Stored files and reference hash information</p>
            </div>
          </div>

          <p className="cs-architecture-note">
            High-level architecture based on the
            implementation details provided. Specific
            request formats and storage structures
            are not shown.
          </p>
        </section>

        {/* TECHNICAL WORKFLOW */}
        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              05 / VERIFICATION WORKFLOW
            </p>

            <h2>
              How It <span>Works.</span>
            </h2>
          </div>

          <div className="fi-workflow">
            {[
              {
                step: '01',
                title: 'Upload',
                text: 'A user selects a file through the website and submits it to the backend.',
              },
              {
                step: '02',
                title: 'Hash',
                text: 'The backend calculates a SHA-256 digest from the uploaded file contents.',
              },
              {
                step: '03',
                title: 'Store or Compare',
                text: 'The application uses stored reference information to support integrity verification.',
              },
              {
                step: '04',
                title: 'Return Result',
                text: 'The backend returns a verification response that the website can display to the user.',
              },
            ].map((item) => (
              <div className="fi-workflow-step" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              06 / TECHNOLOGY STACK
            </p>

            <h2>
              The Tools <span>Behind It.</span>
            </h2>
          </div>

          <div className="cs-stack-grid">
            {[
              {
                title: 'FRONTEND',
                subtitle: 'HTML / CSS / JS',
                description: 'Browser-based file upload and verification interface.',
              },
              {
                title: 'BACKEND',
                subtitle: 'Python / FastAPI',
                description: 'File processing, hashing, and verification APIs.',
              },
              {
                title: 'CLOUD',
                subtitle: 'Microsoft Azure',
                description: 'Azure Functions, Static Web Apps, and Blob Storage.',
              },
              {
                title: 'TESTING',
                subtitle: 'Postman / Swagger',
                description: 'API testing and endpoint documentation.',
              },
            ].map((item) => (
              <div className="cs-stack-card" key={item.title}>
                <span>{item.title}</span>
                <h3>{item.subtitle}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOME */}
        <section className="cs-outcome">
          <p className="cs-eyebrow">
            07 / PROJECT OUTCOME
          </p>

          <h2>
            Confidence Through <span>Verification.</span>
          </h2>

          <p>
            The project combines a browser-based upload
            experience, cryptographic hashing, API-based
            verification, and Azure cloud services into
            a file integrity checking application.
          </p>

          <div className="fi-outcome-tags">
            <span>SHA-256 HASHING</span>
            <span>SERVERLESS BACKEND</span>
            <span>CLOUD STORAGE</span>
          </div>
        </section>

        <div className="cs-bottom-navigation">
          <Link to="/projects">
            ← All Projects
          </Link>

          <Link to="/contact">
            Let's Connect ↗
          </Link>
        </div>
      </div>
    </main>
  )
}
