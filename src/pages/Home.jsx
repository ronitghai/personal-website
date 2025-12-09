import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

import logoPython from '../assets/logos/python.png'
import logoJS from '../assets/logos/JS.png'
import logoReact from '../assets/logos/react.png'
import logoFastAPI from '../assets/logos/FastAPI.png'
import logoDocker from '../assets/logos/docker.png'
import logoAWS from '../assets/logos/aws.png'
import logoAzure from '../assets/logos/azure.png'
import logoPostgres from '../assets/logos/postgres.png'
import logoSwift from '../assets/logos/swift.png'
import logoArduino from '../assets/logos/arduino.png'
import logoGit from '../assets/logos/git.png'
import logoJava from '../assets/logos/Java.svg'
import logoGCP from '../assets/logos/GCP.png'
import logoKicad from '../assets/logos/kicad.png'
import logoTS from '../assets/logos/TS.png'
import logoPostman from '../assets/logos/postman.svg'
import logoC from '../assets/logos/C.png'
import logoCPP from '../assets/logos/CPP.jpg'
import logoFlutter from '../assets/logos/Flutter.png'
import logoSQL from '../assets/logos/sql.jpeg'

const Home = () => {
  // Smooth scroll helper for HashRouter
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const featured = projects.slice(0, 2)

    // Logos to animate in the strip (use only the ones you imported)
  const techLogos = [
    { src: logoPython, alt: 'Python' },
    { src: logoJS, alt: 'JavaScript' },
    { src: logoReact, alt: 'React' },
    { src: logoFastAPI, alt: 'FastAPI' },
    { src: logoDocker, alt: 'Docker' },
    { src: logoAWS, alt: 'AWS' },
    { src: logoAzure, alt: 'Azure' },
    { src: logoPostgres, alt: 'PostgreSQL' },
    { src: logoJava, alt: 'Java' },
    { src: logoSwift, alt: 'Swift' },
    { src: logoArduino, alt: 'Arduino' },
    { src: logoGCP, alt: 'GCP' },
    { src: logoGit, alt: 'Git' },
    { src: logoC, alt: 'C' },
    { src: logoCPP, alt: 'CPP' },
    { src: logoKicad, alt: 'KiCAD' },
    { src: logoSQL, alt: 'SQL' },
    { src: logoTS, alt: 'TypeScript' },
    { src: logoPostman, alt: 'Postman' },
    { src: logoFlutter, alt: 'Flutter' },
  ]

  return (
    <div className="page-container">
      {/* ================= HERO ================= */}
      <div className="hero-grid">
        <section>
          <p className="hero-role">SOFTWARE · CLOUD · AI · EMBEDDED </p>

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
            <span className="pill">Python · Gen AI · SQL</span>
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
          {featured.map((project) => (
            <ProjectCard
               key={project.name}
               name={project.name}
               description={project.description}
               tech={project.tech}
               highlight={project.highlight}
               icon={project.icon}  
            />
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
              Python, Java, JavaScript, TypeScript, C, C++, Swift, SQL, HTML/CSS.
            </p>
          </div>

          {/* Frameworks */}
          <div className="card">
            <h2 className="card-title">Frameworks & Tools</h2>
            <p className="card-body">
              React, Node.js, Express, FastAPI, Flask, Django, Tailwind,
              Docker, Git, Postman.
            </p>
          </div>

          {/* Cloud & AI */}
          <div className="card">
            <h2 className="card-title">Cloud & AI</h2>
            <p className="card-body">
              AWS, Azure, GCP, REST APIs, LLMs, LangChain, TensorFlow,
              PyTorch, Pandas, PostgreSQL, MongoDB.
            </p>
          </div>
        </div>
      </section>
            {/* ================= TECH LOGO STRIP ================= */}
      <section className="tech-strip-wrapper">
        <div className="tech-strip-label">
          Tools & Platforms 
        </div>
        <div className="tech-strip">
          <div className="tech-strip-track">
            {[...techLogos, ...techLogos].map((item, index) => (
              <div key={`${item.alt}-${index}`} className="tech-strip-item">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="tech-strip-icon"
                  title={item.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
