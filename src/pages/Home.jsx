import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

const Home = () => {
  // Smooth scroll helper for HashRouter
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const featured = projects.slice(0, 2)

  return (
    <div className="page-container">
      {/* ================= HERO ================= */}
      <div className="hero-grid">
        <section>
          <p className="hero-role">SOFTWARE · CLOUD · AI</p>

          <h1 className="hero-name">
            Hi, I&apos;m <span className="hero-gradient">Ronit Ghai</span>.
          </h1>

          <p className="hero-summary">
            I&apos;m a Computer Engineering graduate who builds end-to-end systems that blend
            clean backend logic, cloud infrastructure, and intuitive interfaces.
            I enjoy working across the stack—from microcontrollers and PCB design to
            React frontends and production-ready APIs in the cloud.
          </p>

          <div className="hero-tags">
            <span className="hero-tag">Full-Stack & Cloud</span>
            <span className="hero-tag">AI & Generative AI</span>
            <span className="hero-tag">Embedded Systems</span>
            <span className="hero-tag">Security & Reliability</span>
          </div>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollToSection('featured-projects')}
            >
              <span>View featured projects</span>
              <span>↓</span>
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollToSection('skills')}
            >
              <span>Explore skills</span>
            </button>
          </div>
        </section>

        {/* Right-side hero card */}
        <aside className="hero-card">
          <div className="hero-metric-row">
            <div>
              <div className="hero-metric-label">Focus</div>
              <div className="hero-metric-value">Cloud · AI · Systems</div>
            </div>
            <div>
              <div className="hero-metric-label">Background</div>
              <div className="hero-metric-value">Computer Engineering</div>
            </div>
          </div>

          <p className="hero-metric-label">
            I like building things that have to be fast, secure, and reliable—
            whether it&apos;s a smart suitcase, a file integrity verifier, or an AI assistant.
          </p>

          <div className="hero-pill-row">
            <span className="pill pill-strong">React · FastAPI · Azure · AWS</span>
            <span className="pill">Python · TypeScript · SQL</span>
            <span className="pill">ESP32 · SwiftUI · FPGA</span>
          </div>
        </aside>
      </div>

      {/* ================= FEATURED PROJECTS ================= */}
      <section id="featured-projects" style={{ marginTop: '3.5rem' }}>
        <SectionHeader
          eyebrow="Featured work"
          title="Selected projects"
          subtitle="A few systems that represent how I think about building software: practical, resilient, and grounded in real-world constraints."
        />

        <div className="grid grid-2">
          {featured.map((p) => (
            <div key={p.name} className="card">
              <div className="card-header-row">
                <div>
                  <h2 className="card-title">{p.name}</h2>
                  {p.highlight && <p className="card-subtitle">{p.highlight}</p>}
                </div>
              </div>

              <p className="card-body">{p.description}</p>

              <div className="card-tags">
                {p.tech.slice(0, 5).map((t) => (
                  <span key={t} className="card-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" style={{ marginTop: '3.5rem' }}>
        <SectionHeader
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="Comfortable moving between frontend, backend, data, and embedded work."
        />

        <div className="grid grid-3">
          {/* Languages */}
          <div className="card">
            <h2 className="card-title">Languages</h2>
            <p className="card-body">
              Python, JavaScript, TypeScript, C, C++, Swift, SQL, HTML/CSS.
            </p>
          </div>

          {/* Frameworks */}
          <div className="card">
            <h2 className="card-title">Frameworks & Tools</h2>
            <p className="card-body">
              React, Vue, Next.js, Node.js, Express, FastAPI, Flask, Django, Tailwind,
              Docker, Git, Postman.
            </p>
          </div>

          {/* Cloud & AI */}
          <div className="card">
            <h2 className="card-title">Cloud & AI</h2>
            <p className="card-body">
              AWS, Azure, GCP, Terraform, REST APIs, LLMs, LangChain, TensorFlow,
              PyTorch, scikit-learn, PostgreSQL, MongoDB.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
