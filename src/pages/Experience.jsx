
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/experience-redesign.css'


const experiences = [
  {
    id: 'zensar',
    logo: `${import.meta.env.BASE_URL}logos/zensar.png`,
    role: 'Software Engineer',
    company: 'Zensar Technologies · Microsoft LaunchPad',
    period: 'Jun 2026 — Present',
    category: 'SOFTWARE ENGINEERING',
    current: true,
    summary:
      'Developing intelligent business applications using the Microsoft Power Platform, with a focus on AI-assisted workflows, data integration, and user experiences.',
    highlights: [
      'Developed application experiences using Microsoft Power Apps and Dataverse.',
      'Worked with Microsoft Copilot Studio to build AI-assisted workflows and agent experiences.',
      'Contributed to an AI certification training assistant focused on personalized assessments, learning progress, and analytics.',
      'Collaborated in a team environment to translate business requirements into functional application components.',
    ],
    technologies: [
      'Power Apps',
      'Dataverse',
      'Copilot Studio',
      'Power Automate',
      'React',
      'JavaScript',
    ],
    featured: true,
  },
  {
    id: 'excelerate',
    logo: `${import.meta.env.BASE_URL}logos/excelerate.png`,
    role: 'Software Engineering & Data Analytics Intern',
    company: 'Excelerate',
    period: 'Jul 2025 — Nov 2025',
    category: 'SOFTWARE DEVELOPMENT / DATA ANALYTICS',
    summary:
      'Worked across mobile application development, data engineering, and predictive analytics, building cross-platform user experiences, SQL-based reporting workflows, and data-driven solutions.',
    highlights: [
      'Developed and refined cross-platform mobile application features using Flutter, improving onboarding flows, navigation, and responsiveness.',
      'Built PostgreSQL queries and reporting workflows to analyze user engagement, sign-ups, completion rates, and retention patterns.',
      'Cleaned, transformed, and analyzed marketing and engagement datasets using Python to uncover trends and actionable insights.',
      'Prototyped predictive models to investigate learner completion, retention, and churn.',
      'Created dashboards and data visualizations to communicate performance metrics and support data-informed decisions.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Python',
      'PostgreSQL',
      'SQL',
      'Predictive Modeling',
      'Data Visualization',
    ],
  },
]

const education = [
  {
    degree: 'Post Graduate Certificate',
    logo: `${import.meta.env.BASE_URL}logos/ut-austin.png`,
    field: 'Full Stack Software Development',
    school: 'University of Texas at Austin',
    period: '2025 — 2026',
    description:
      'Focused on modern web development, cloud infrastructure, and scalable full-stack software systems.',
    tags: ['Full-Stack Development', 'Web Applications', 'Cloud'],
  },
  {
    degree: 'Bachelor of Science',
    logo: `${import.meta.env.BASE_URL}logos/umass.png`,
    field: 'Computer Engineering',
    school: 'University of Massachusetts Amherst',
    period: '2021 — 2025',
    description:
      'Studied software engineering, computer systems, embedded development, and related engineering disciplines. Recognized with academic honors including the Dean’s List.',
    tags: [
      'Computer Engineering',
      'Embedded Systems',
      'Software Engineering',
    ],
  },
]

const focusAreas = [
  {
    number: '01',
    title: 'Software Engineering',
    description:
      'Building complete applications, from frontend interfaces to backend services and data models.',
    icon: '</>',
  },
  {
    number: '02',
    title: 'AI & Automation',
    description:
      'Creating intelligent workflows and AI-assisted experiences that solve practical problems.',
    icon: '✳',
  },
  {
    number: '03',
    title: 'Data & Analytics',
    description:
      'Turning structured data into useful insights through SQL, Python, and visual reporting.',
    icon: '◈',
  },
]

function ExperienceCard({ experience, expanded, onToggle }) {
  const contentId = `exp-details-${experience.id}`

  return (
    <article
      className={`ex-card ${experience.featured ? 'ex-card-featured' : ''}`}
    >
      <div className="ex-card-top">
        <div className="ex-card-top-left">
          <span className="ex-category">
            {experience.category}
          </span>

          {experience.current && (
            <span className="ex-current-badge">
              <span className="ex-current-dot" />
              CURRENT ROLE
            </span>
          )}
        </div>

        <span className="ex-card-period">
          {experience.period}
        </span>
      </div>

      <div className="ex-identity">
        <div className="ex-logo-box">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            loading="lazy"
          />
        </div>

        <div className="ex-identity-text">
          <h3>{experience.role}</h3>
          <p className="ex-company">{experience.company}</p>
        </div>
      </div>

      <p className="ex-card-summary">
        {experience.summary}
      </p>

      <div className="ex-tech-tags">
        {experience.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <button
        type="button"
        className="ex-expand-button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={contentId}
      >
        <span>
          {expanded ? 'Hide Contributions' : 'View Contributions'}
        </span>
        <span
          className={`ex-expand-icon ${expanded ? 'ex-expand-icon-open' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {expanded && (
        <div className="ex-card-details" id={contentId}>
          <div className="ex-details-heading">
            KEY CONTRIBUTIONS
          </div>

          <ul>
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState(['zensar'])

  function toggleExperience(id) {
    setExpandedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    )
  }

  const resumeUrl = `${import.meta.env.BASE_URL}Ronit_Ghai_Resume.pdf`

  return (
    <main className="ex-page">
      <div className="ex-grid-bg" aria-hidden="true" />
      <div className="ex-glow ex-glow-one" aria-hidden="true" />
      <div className="ex-glow ex-glow-two" aria-hidden="true" />

      <div className="ex-container">
        {/* HERO */}
        <section className="ex-hero">
          <div className="ex-hero-content">
            <div className="ex-eyebrow">
              <span className="ex-eyebrow-line" />
              EXPERIENCE & EDUCATION
            </div>

            <h1>
              My Professional
              <br />
              <span>Journey.</span>
            </h1>

            <p>
              From data analytics and mobile development to
              AI-powered business applications, my experience
              reflects a hands-on approach to building
              software and solving engineering problems.
            </p>

            <div className="ex-hero-actions">
              <a
                href={resumeUrl}
                download
                className="ex-button ex-button-primary"
              >
                Download Resume <span>↓</span>
              </a>

              <Link
                to="/projects"
                className="ex-button ex-button-secondary"
              >
                Explore Projects <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="ex-hero-panel">
            <div className="ex-panel-header">
              <span className="ex-panel-status-dot" />
              ENGINEERING PROFILE
              <span className="ex-panel-header-right">
                2026
              </span>
            </div>

            <div className="ex-panel-body">
              <div className="ex-panel-overline">
                CURRENT FOCUS
              </div>

              <h2>
                Building intelligent
                <span> software systems.</span>
              </h2>

              <div className="ex-panel-divider" />

              <div className="ex-panel-row">
                <span>DISCIPLINE</span>
                <strong>Software Engineering</strong>
              </div>

              <div className="ex-panel-row">
                <span>SPECIALTIES</span>
                <strong>AI · Full Stack · Cloud</strong>
              </div>

              <div className="ex-panel-row">
                <span>BACKGROUND</span>
                <strong>Computer Engineering</strong>
              </div>

              <div className="ex-panel-footer">
                <span>DESIGN</span>
                <span>BUILD</span>
                <span>ITERATE</span>
                <span>DELIVER</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="ex-section" id="professional-experience">
          <div className="ex-section-heading">
            <div>
              <p className="ex-section-eyebrow">
                01 / PROFESSIONAL EXPERIENCE
              </p>

              <h2>
                Where I've <span>Built & Learned.</span>
              </h2>

              <p className="ex-section-description">
                A timeline of engineering roles spanning
                software development, AI, mobile applications,
                and data analytics.
              </p>
            </div>

            <span className="ex-section-counter">
              {String(experiences.length).padStart(2, '0')} ROLES
            </span>
          </div>

          <div className="ex-timeline">
            {experiences.map((experience, index) => (
              <div
                className="ex-timeline-item"
                key={experience.id}
              >
                <div className="ex-timeline-marker">
                  <span className="ex-timeline-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`ex-timeline-dot ${
                      experience.current ? 'ex-timeline-dot-current' : ''
                    }`}
                  />
                </div>

                <ExperienceCard
                  experience={experience}
                  expanded={expandedIds.includes(experience.id)}
                  onToggle={() => toggleExperience(experience.id)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* FOCUS AREAS */}
        <section className="ex-section">
          <div className="ex-section-heading">
            <div>
              <p className="ex-section-eyebrow">
                02 / ENGINEERING APPROACH
              </p>

              <h2>
                How I <span>Contribute.</span>
              </h2>

              <p className="ex-section-description">
                The disciplines connecting my work across
                different teams, technologies, and projects.
              </p>
            </div>
          </div>

          <div className="ex-focus-grid">
            {focusAreas.map((area) => (
              <article className="ex-focus-card" key={area.number}>
                <div className="ex-focus-top">
                  <span className="ex-focus-icon">
                    {area.icon}
                  </span>
                  <span className="ex-focus-number">
                    {area.number}
                  </span>
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="ex-section" id="education">
          <div className="ex-section-heading">
            <div>
              <p className="ex-section-eyebrow">
                03 / EDUCATION
              </p>

              <h2>
                The <span>Foundation.</span>
              </h2>

              <p className="ex-section-description">
                Academic training in computer engineering
                and modern software development.
              </p>
            </div>
          </div>

          <div className="ex-education-grid">
            {education.map((item, index) => (
              <article className="ex-education-card" key={item.school}>
                <div className="ex-education-top">
                  <span>
                    EDUCATION / 0{index + 1}
                  </span>
                  <span>{item.period}</span>
                </div>

                <div className="ex-education-identity">
                  <div className="ex-logo-box ex-logo-box-education">
                    <img
                      src={item.logo}
                      alt={`${item.school} logo`}
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <p className="ex-education-degree">
                      {item.degree}
                    </p>

                    <h3>{item.field}</h3>

                    <p className="ex-education-school">
                      {item.school}
                    </p>
                  </div>
                </div>

                <p className="ex-education-description">
                  {item.description}
                </p>

                <div className="ex-tech-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="ex-cta">
          <p className="ex-section-eyebrow">
            04 / WHAT'S NEXT
          </p>

          <h2>
            Let's build something
            <br />
            <span>meaningful.</span>
          </h2>

          <p>
            I'm interested in opportunities to work on
            challenging engineering problems, intelligent
            applications, and impactful software products.
          </p>

          <div className="ex-cta-actions">
            <Link
              to="/contact"
              className="ex-button ex-button-primary"
            >
              Get in Touch <span>↗</span>
            </Link>

            <a
              href="https://github.com/ronitghai"
              target="_blank"
              rel="noopener noreferrer"
              className="ex-button ex-button-secondary"
            >
              View GitHub <span>↗</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
