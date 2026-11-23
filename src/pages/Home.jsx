
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home-redesign.css'
import ProjectVisual from '../components/ProjectVisual'

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

const specialties = [
  'Full-Stack Applications',
  'AI Agents & Intelligent Systems',
  'Cloud-Native Solutions',
  'Embedded & IoT Systems',
]

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
  { src: logoCPP, alt: 'C++' },
  { src: logoKicad, alt: 'KiCad' },
  { src: logoSQL, alt: 'SQL' },
  { src: logoTS, alt: 'TypeScript' },
  { src: logoPostman, alt: 'Postman' },
  { src: logoFlutter, alt: 'Flutter' },
]

const featuredProjects = [
  {
    number: '01',
    category: 'AI / FULL STACK',
    title: 'Smart Financial Coach',
    slug: 'smart-financial-coach',
    description:
      'An AI-powered financial analytics platform that processes transaction data, identifies spending patterns, forecasts financial trends, and generates personalized action plans.',
    technologies: ['Python', 'React', 'FastAPI', 'SQLite', 'OpenAI API'],
    visual: 'finance',
    detail: '1,000+ transactions processed',
  },
  {
    number: '02',
    category: 'CLOUD / SECURITY',
    title: 'File Integrity Verification System',
    slug: 'file-integrity-verification',
    description:
      'A cloud-based security application using SHA-256 fingerprints to detect file tampering, supported by REST APIs, Azure Functions, and Azure Blob Storage.',
    technologies: ['Python', 'FastAPI', 'Azure Functions', 'Docker', 'SHA-256'],
    visual: 'security',
    detail: 'Cloud-based verification',
  },
  {
    number: '03',
    category: 'EMBEDDED / MOBILE',
    title: 'Voyager Pro',
    slug: 'voyager-pro',
    description:
      'An intelligent suitcase system combining ESP32 hardware, custom PCBs, GPS tracking, real-time weight monitoring, and a SwiftUI companion application.',
    technologies: ['SwiftUI', 'C++', 'ESP32', 'BLE', 'GPS', 'KiCad'],
    visual: 'voyager',
    detail: 'Hardware + software integration',
  },
]

const expertise = [
  {
    icon: '</>',
    title: 'Full-Stack Engineering',
    description:
      'Building complete applications from responsive user interfaces and REST APIs to databases and deployment.',
    tools: 'React · FastAPI · Node.js · PostgreSQL',
  },
  {
    icon: '✳',
    title: 'AI & Intelligent Systems',
    description:
      'Integrating LLMs, AI agents, machine learning, and data-driven intelligence into practical applications.',
    tools: 'OpenAI · Copilot Studio · Python · Scikit-learn',
  },
  {
    icon: '☁',
    title: 'Cloud & DevOps',
    description:
      'Developing cloud-connected applications and deploying reliable services using modern engineering tools.',
    tools: 'Azure · AWS · Docker · CI/CD',
  },
  {
    icon: '⌁',
    title: 'Embedded Systems',
    description:
      'Connecting software with real-world hardware, sensors, wireless communication, and custom electronics.',
    tools: 'C++ · ESP32 · BLE · KiCad',
  },
]

const terminalCommands = {
  help: [
    'Available commands:',
    'about     - Learn about Ronit',
    'stack     - View technical expertise',
    'projects  - Explore featured work',
    'contact   - Find contact information',
    'clear     - Clear terminal',
  ],
  about: [
    'Software Engineer focused on full-stack,',
    'AI-powered, cloud, and embedded systems.',
    'Experience: Zensar / Microsoft LaunchPad',
  ],
  stack: [
    'Languages: Python, JavaScript, SQL, C++, Java, Swift',
    'Frontend: React, HTML/CSS, Tailwind',
    'Backend: FastAPI, Node.js, Express',
    'Cloud: Azure, AWS, Docker',
    'AI: LLMs, AI Agents, Scikit-learn',
  ],
  projects: [
    '01  Smart Financial Coach',
    '02  File Integrity Verification System',
    '03  Voyager Pro',
    '04  A.L.T.R.O.N. AI Assistant',
    '05  AES Fault Injection',
    'Explore the Projects page for case studies.',
  ],
  contact: [
    'Email: ronitghai@hotmail.com',
    'GitHub: github.com/ronitghai',
    'LinkedIn: linkedin.com/in/ronitghai',
  ],
}

function DeveloperTerminal() {
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to RonitOS v1.0' },
    { type: 'output', text: 'Type "help" to explore.' },
  ])

  function executeCommand(value) {
    const input = value.trim().toLowerCase()
    if (!input) return

    if (input === 'clear') {
      setHistory([])
    } else {
      const response = terminalCommands[input] || [
        `Command not found: ${input}`,
        'Type "help" for available commands.',
      ]

      setHistory((previous) => [
        ...previous,
        { type: 'command', text: input },
        ...response.map((text) => ({ type: 'output', text })),
      ])
    }

    setCommand('')
  }

  function runCommand(event) {
    event.preventDefault()
    executeCommand(command)
  }

  return (
    <div className="rh-terminal" aria-label="Interactive developer terminal">
      <div className="rh-terminal-bar">
        <div className="rh-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span>ronit@portfolio: ~</span>
        <span className="rh-terminal-bar-icon">⌘</span>
      </div>

      <div className="rh-terminal-content">
        <div className="rh-terminal-art">
          <span>RONIT</span>
          <span className="rh-terminal-art-accent">.DEV</span>
        </div>

        <div className="rh-terminal-meta">
          <span>SYSTEM STATUS: ONLINE</span>
          <span>ENGINEER PROFILE / 2026</span>
        </div>

        <div className="rh-terminal-history" role="log" aria-live="polite">
          {history.map((entry, index) => (
            <div
              key={index}
              className={
                entry.type === 'command'
                  ? 'rh-terminal-command'
                  : 'rh-terminal-output'
              }
            >
              {entry.type === 'command' && (
                <span className="rh-terminal-prompt">➜ ~ </span>
              )}
              {entry.text}
            </div>
          ))}
        </div>

        <div className="rh-terminal-shortcuts">
          {['help', 'about', 'stack', 'projects', 'contact'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => executeCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>

        <form className="rh-terminal-input" onSubmit={runCommand}>
          <label htmlFor="rh-command-input">➜ ~</label>
          <input
            id="rh-command-input"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder="Type a command..."
            autoComplete="off"
            spellCheck={false}
          />
          <button type="submit" aria-label="Run command">
            ↵
          </button>
        </form>
      </div>
    </div>
  )
}

function TechMarquee() {
  return (
    <section className="rh-tech-section" aria-label="Technologies and platforms">
      <div className="rh-tech-heading">
        <span className="rh-tech-heading-line" />
        <span>TECHNOLOGIES & PLATFORMS</span>
        <span className="rh-tech-heading-line" />
      </div>

      <div className="rh-tech-marquee">
        <div className="rh-tech-track">
          {[0, 1].map((copy) => (
            <div
              className="rh-tech-group"
              key={copy}
              aria-hidden={copy === 1}
            >
              {techLogos.map((item) => (
                <div
                  className="rh-tech-item"
                  key={`${copy}-${item.alt}`}
                  title={item.alt}
                >
                  <img
                    src={item.src}
                    alt={copy === 0 ? item.alt : ''}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setSpecialtyIndex(
        (previous) => (previous + 1) % specialties.length
      )
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  const resumeUrl = `${import.meta.env.BASE_URL}Ronit_Ghai_Resume.pdf`

  return (
    <main className="rh-home" id="main-content">
      <div className="rh-grid-background" aria-hidden="true" />
      <div className="rh-glow rh-glow-one" aria-hidden="true" />
      <div className="rh-glow rh-glow-two" aria-hidden="true" />

      {/* HERO */}
      <section className="rh-hero">
        <div className="rh-hero-copy">
          <div className="rh-status-pill">
            <span className="rh-status-dot" aria-hidden="true" />
            SOFTWARE ENGINEER · AI / CLOUD / FULL STACK
          </div>

          <p className="rh-hero-overline">HELLO WORLD, I'M</p>

          <h1>
            Ronit
            <br />
            <span>Ghai.</span>
          </h1>

          <div className="rh-specialty">
            I build{' '}
            <span
              key={specialtyIndex}
              className="rh-specialty-changing"
            >
              {specialties[specialtyIndex]}
            </span>
          </div>

          <p className="rh-hero-description">
            I build software that connects intelligent applications,
            cloud services, and real-world hardware. From AI-powered
            platforms to embedded systems, my work focuses on turning
            complex problems into practical, end-to-end solutions.
          </p>

          <div className="rh-hero-actions">
            <Link
              className="rh-button rh-button-primary"
              to="/projects"
            >
              Explore My Work <span>↗</span>
            </Link>

            <a
              className="rh-button rh-button-secondary"
              href={resumeUrl}
              download
              aria-label="Download resume as PDF"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="rh-hero-socials">
            <a
              href="https://github.com/ronitghai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ronitghai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:ronitghai@hotmail.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="rh-hero-visual">
          <div className="rh-orbit rh-orbit-one" aria-hidden="true" />
          <div className="rh-orbit rh-orbit-two" aria-hidden="true" />

          <DeveloperTerminal />

          <div className="rh-floating-label">
            <span className="rh-floating-dot" aria-hidden="true" />
            SYSTEMS ENGINEERED WITH PURPOSE
          </div>
        </div>
      </section>

      {/* EXPERTISE STRIP */}
      <div className="rh-info-strip">
        <span>FULL STACK DEVELOPMENT</span>
        <span>✳</span>
        <span>ARTIFICIAL INTELLIGENCE</span>
        <span>✳</span>
        <span>CLOUD ENGINEERING</span>
        <span>✳</span>
        <span>EMBEDDED SYSTEMS</span>
      </div>

      {/* FEATURED PROJECTS */}
      <section className="rh-section" id="featured-projects">
        <div className="rh-section-heading">
          <div>
            <p className="rh-eyebrow">01 / SELECTED WORK</p>
            <h2>
              Featured <span>Projects.</span>
            </h2>
            <p className="rh-section-description">
              A selection of applications and systems I've engineered,
              spanning intelligent software, cloud security, and IoT.
            </p>
          </div>

          <Link className="rh-text-link" to="/projects">
            All Projects ↗
          </Link>
        </div>

        <div className="rh-project-grid">
          {featuredProjects.map((project) => (
            <article
              className="rh-project-card"
              key={project.slug}
            >
              <div className="rh-project-top">
                <span>
                  {project.number} / {project.category}
                </span>
              </div>

              <ProjectVisual type={project.visual} />

              <div className="rh-project-content">
                <p className="rh-project-detail">
                  {project.detail}
                </p>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="rh-project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <Link
                  className="rh-project-action"
                  to={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} case study`}
                >
                  View Case Study <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ENGINEERING EXPERTISE */}
      <section className="rh-section" id="expertise">
        <div className="rh-section-heading">
          <div>
            <p className="rh-eyebrow">02 / ENGINEERING TOOLKIT</p>
            <h2>
              What I <span>Work With.</span>
            </h2>
            <p className="rh-section-description">
              Technologies and disciplines I use to design,
              develop, and deliver complete systems.
            </p>
          </div>
        </div>

        <div className="rh-expertise-grid">
          {expertise.map((item, index) => (
            <article
              className="rh-expertise-card"
              key={item.title}
            >
              <div className="rh-expertise-card-top">
                <span className="rh-expertise-icon">
                  {item.icon}
                </span>
                <span className="rh-expertise-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="rh-expertise-tools">
                {item.tools}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY LOGOS */}
      <TechMarquee />

      {/* EXPERIENCE */}
      <section
        className="rh-section"
        id="experience-preview"
      >
        <div className="rh-section-heading">
          <div>
            <p className="rh-eyebrow">03 / PROFESSIONAL JOURNEY</p>
            <h2>
              Building in <span>the Real World.</span>
            </h2>
            <p className="rh-section-description">
              Applying engineering principles to real products,
              intelligent applications, and data-driven solutions.
            </p>
          </div>

          <Link className="rh-text-link" to="/experience">
            Full Experience ↗
          </Link>
        </div>

        <div className="rh-experience-list">
          <article className="rh-experience-item">
            <div className="rh-experience-date">
              <span
                className="rh-current-indicator"
                aria-hidden="true"
              />
              JUN 2026 — PRESENT
            </div>

            <div>
              <h3>Software Engineer</h3>
              <p className="rh-experience-company">
                Zensar · Microsoft LaunchPad
              </p>
              <p className="rh-experience-summary">
                Working with Microsoft Power Apps, Dataverse,
                and Copilot Studio to develop intelligent
                applications, including an AI-powered
                certification training experience with
                personalized assessments and analytics.
              </p>
            </div>

            <span className="rh-experience-arrow">↗</span>
          </article>

          <article className="rh-experience-item">
            <div className="rh-experience-date">
              JUL 2025 — NOV 2025
            </div>

            <div>
              <h3>
                Software Engineering & Data Analytics Intern
              </h3>
              <p className="rh-experience-company">
                Excelerate
              </p>
              <p className="rh-experience-summary">
                Built a Flutter mobile application, Python and
                PostgreSQL analytics workflows, predictive churn
                models, and interactive reporting dashboards.
              </p>
            </div>

            <span className="rh-experience-arrow">↗</span>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="rh-contact-banner">
        <p className="rh-eyebrow">04 / LET'S CONNECT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's build something.</span>
        </h2>

        <p>
          Interested in software engineering, intelligent
          applications, or collaborating on meaningful technology?
        </p>

        <div className="rh-contact-actions">
          <a
            className="rh-button rh-button-primary"
            href="mailto:ronitghai@hotmail.com"
          >
            Get in Touch ↗
          </a>

          <Link
            className="rh-button rh-button-secondary"
            to="/contact"
          >
            Contact Page
          </Link>
        </div>
      </section>
    </main>
  )
}
