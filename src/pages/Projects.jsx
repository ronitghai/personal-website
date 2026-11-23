
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectVisual from '../components/ProjectVisual'
import '../styles/projects-redesign.css'

// Match existing project names to their visual/category.
// No changes to projects.js are required.
function getProjectInfo(project) {
  const name = project.name.toLowerCase()

  if (name.includes('financial')) {
    return {
      category: 'AI & SOFTWARE',
      filter: 'AI & Software',
      visual: 'finance',
      number: '01',
      label: 'AI-POWERED ANALYTICS',
    }
  }

  if (name.includes('integrity')) {
    return {
      category: 'CLOUD & SECURITY',
      filter: 'Cloud & Security',
      visual: 'security',
      number: '02',
      label: 'CLOUD-NATIVE SECURITY',
    }
  }

  if (name.includes('voyager')) {
    return {
      category: 'EMBEDDED & IOT',
      filter: 'Embedded & IoT',
      visual: 'voyager',
      number: '03',
      label: 'CONNECTED HARDWARE',
    }
  }

  if (name.includes('altron') || name.includes('a.l.t.r.o.n')) {
    return {
      category: 'AI & SOFTWARE',
      filter: 'AI & Software',
      visual: 'terminal',
      number: '04',
      label: 'INTELLIGENT ASSISTANT',
    }
  }

  if (name.includes('fault') || name.includes('aes')) {
    return {
      category: 'EMBEDDED & IOT',
      filter: 'Embedded & IoT',
      visual: 'circuit',
      number: '05',
      label: 'HARDWARE SECURITY',
    }
  }

  return {
    category: 'SOFTWARE ENGINEERING',
    filter: 'AI & Software',
    visual: 'code',
    number: '06',
    label: 'ENGINEERING PROJECT',
  }
}

const filters = [
  'All Projects',
  'AI & Software',
  'Cloud & Security',
  'Embedded & IoT',
]

function TechnicalVisual({ type, name }) {
  if (['finance', 'security', 'voyager'].includes(type)) {
    return <ProjectVisual type={type} />
  }

  return (
    <div className="pr-technical-visual">
      <div className="pr-technical-top">
        <span>
          {type === 'terminal'
            ? 'AI.ASSISTANT'
            : type === 'circuit'
            ? 'HARDWARE.SEC'
            : 'SYSTEM.DEV'}
        </span>
        <span className="pr-online">● SYSTEM READY</span>
      </div>

      {type === 'terminal' ? (
        <div className="pr-code-display">
          <p><span>$</span> initialize assistant</p>
          <p><span>✓</span> NLP engine loaded</p>
          <p><span>✓</span> Database connected</p>
          <p><span>✓</span> Voice interface ready</p>
          <p className="pr-code-cursor">
            <span>➜</span> awaiting input_
          </p>
        </div>
      ) : type === 'circuit' ? (
        <div className="pr-circuit-display">
          <div className="pr-circuit-lines" />
          <div className="pr-chip">
            <span>AES</span>
            <small>ATMEGA328P</small>
          </div>
          <span className="pr-circuit-label pr-circuit-label-left">
            FAULT INJECTION
          </span>
          <span className="pr-circuit-label pr-circuit-label-right">
            ENCRYPTION
          </span>
        </div>
      ) : (
        <div className="pr-code-display">
          <p><span>➜</span> {name}</p>
          <p><span>✓</span> Project initialized</p>
          <p><span>✓</span> Engineering workflow</p>
          <p><span>➜</span> Build complete_</p>
        </div>
      )}
    </div>
  )
}

function ProjectShowcaseCard({ project, index }) {
  const info = {
    ...getProjectInfo(project),
    filter: project.category,
    visual: project.visual,
  }

  return (
    <article className="pr-project-card">
      <div className="pr-card-heading">
        <span>
          {String(index + 1).padStart(2, '0')} / {info.category}
        </span>
        <span className="pr-card-heading-icon">↗</span>
      </div>

      <div className="pr-card-visual">
        <TechnicalVisual
          type={info.visual}
          name={project.name}
        />
      </div>

      <div className="pr-card-content">
        <p className="pr-project-label">{info.label}</p>

        <div className="pr-project-title-row">
          {project.icon && (
            <img
              src={project.icon}
              alt=""
              className="pr-project-icon"
            />
          )}

          <h3>{project.name}</h3>
        </div>

        {project.highlight && (
          <p className="pr-project-highlight">
            {project.highlight}
          </p>
        )}

        <p className="pr-project-description">
          {project.description}
        </p>

        <div className="pr-project-tags">
          {(project.tech || []).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="pr-card-footer">
          {['smart-financial-coach', 'file-integrity-verification', 'voyager-pro', 'altron-ai-assistant', 'aes-fault-injection'].includes(project.slug) ? (
            <Link
              to={`/projects/${project.slug}`}
              className="pr-project-link"
            >
              View Case Study <span>↗</span>
            </Link>
          ) : project.video ? (
            <a
              href={`https://www.youtube.com/watch?v=${project.video}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pr-project-link"
            >
              Watch Demo <span>↗</span>
            </a>
          ) : (
            <span className="pr-project-type">
              {info.category}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const projectList = useMemo(() => {
    return projects.map((project) => ({
      ...project,
      projectInfo: getProjectInfo(project),
    }))
  }, [])

  const filteredProjects = projectList.filter((project) => {
    return (
      activeFilter === 'All Projects' ||
      project.projectInfo.filter === activeFilter
    )
  })

  return (
    <main className="pr-page">
      <div className="pr-background-grid" aria-hidden="true" />
      <div className="pr-background-glow" aria-hidden="true" />

      {/* HERO */}
      <section className="pr-hero">
        <div className="pr-hero-status">
          <span className="pr-status-dot" />
          ENGINEERING PORTFOLIO / 2026
        </div>

        <p className="pr-eyebrow">
          SELECTED WORK / SOFTWARE · AI · CLOUD · HARDWARE
        </p>

        <h1>
          Built to <span>solve.</span>
          <br />
          Designed to <span>scale.</span>
        </h1>

        <p className="pr-hero-description">
          A collection of systems I've designed and developed,
          from intelligent applications and cloud infrastructure
          to connected hardware and embedded security.
        </p>

        <div className="pr-hero-metrics">
          <div>
            <strong>{projects.length.toString().padStart(2, '0')}</strong>
            <span>PROJECTS</span>
          </div>

          <div className="pr-metric-divider" />

          <div>
            <strong>04</strong>
            <span>ENGINEERING DOMAINS</span>
          </div>

          <div className="pr-metric-divider" />

          <div>
            <strong>∞</strong>
            <span>CURIOSITY</span>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="pr-work-section">
        <div className="pr-work-heading">
          <div>
            <p className="pr-eyebrow">01 / PROJECT ARCHIVE</p>
            <h2>
              Explore the <span>Work.</span>
            </h2>
          </div>

          <span className="pr-project-count">
            SHOWING {filteredProjects.length} / {projects.length}
          </span>
        </div>

        <div className="pr-filter-bar" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter
                  ? 'pr-filter-button pr-filter-active'
                  : 'pr-filter-button'
              }
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="pr-project-grid">
          {filteredProjects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="pr-empty-state">
            No projects in this category yet.
          </div>
        )}
      </section>

      {/* ENGINEERING PHILOSOPHY */}
      <section className="pr-philosophy">
        <div>
          <p className="pr-eyebrow">02 / HOW I BUILD</p>
          <h2>
            Beyond the <span>Code.</span>
          </h2>
        </div>

        <div className="pr-philosophy-content">
          <p>
            My approach to engineering goes beyond writing code.
            I focus on understanding the problem, choosing the
            right architecture, and building systems that are
            maintainable, reliable, and useful.
          </p>

          <div className="pr-philosophy-steps">
            <span>01 / DESIGN</span>
            <span>02 / DEVELOP</span>
            <span>03 / TEST</span>
            <span>04 / DEPLOY</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="pr-contact">
        <p className="pr-eyebrow">03 / NEXT COLLABORATION</p>

        <h2>
          Let's build the <span>next thing.</span>
        </h2>

        <p>
          Have a project, engineering challenge, or opportunity
          worth discussing?
        </p>

        <Link to="/contact" className="pr-contact-button">
          Get in Touch <span>↗</span>
        </Link>
      </section>
    </main>
  )
}
