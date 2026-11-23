
import React from 'react'
import { Link } from 'react-router-dom'
import ProjectVisual from '../components/ProjectVisual'
import '../styles/project-case-study.css'

const technologies = [
  'Python',
  'React',
  'FastAPI',
  'SQLite',
  'OpenAI API',
]

const features = [
  {
    number: '01',
    title: 'Transaction Analysis',
    description:
      'Processes financial transaction data and organizes it into insights that help users understand their spending behavior.',
    icon: '◈',
  },
  {
    number: '02',
    title: 'Spending Pattern Detection',
    description:
      'Identifies recurring expenses and spending trends to make financial activity easier to understand.',
    icon: '⌁',
  },
  {
    number: '03',
    title: 'Financial Forecasting',
    description:
      'Analyzes historical spending information to generate projections that support financial planning.',
    icon: '↗',
  },
  {
    number: '04',
    title: 'AI-Powered Action Plans',
    description:
      'Uses AI-generated insights to provide personalized recommendations and actionable financial guidance.',
    icon: '✳',
  },
]

const architecture = [
  {
    title: 'Frontend',
    subtitle: 'React',
    description:
      'User interface for exploring financial analytics and insights.',
  },
  {
    title: 'Backend',
    subtitle: 'Python + FastAPI',
    description:
      'Application logic, transaction processing, and API endpoints.',
  },
  {
    title: 'Database',
    subtitle: 'SQLite',
    description:
      'Structured storage for financial and transaction information.',
  },
  {
    title: 'AI Integration',
    subtitle: 'OpenAI API',
    description:
      'AI-powered financial insights and personalized recommendations.',
  },
]

export default function SmartFinancialCoach() {
  return (
    <main className="cs-page">
      <div className="cs-grid-background" aria-hidden="true" />

      <div className="cs-container">
        {/* BACK NAVIGATION */}
        <Link to="/projects" className="cs-back-link">
          ← Back to Projects
        </Link>

        {/* HERO */}
        <section className="cs-hero">
          <p className="cs-eyebrow">
            PROJECT 01 / AI & FULL STACK
          </p>

          <h1>
            Smart Financial
            <br />
            <span>Coach.</span>
          </h1>

          <p className="cs-hero-description">
            An AI-powered financial analytics platform that
            processes transaction data, identifies spending
            patterns, forecasts financial trends, and generates
            personalized action plans.
          </p>

          <div className="cs-tags">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="cs-hero-metrics">
            <div>
              <strong>1,000+</strong>
              <span>TRANSACTIONS PROCESSED</span>
            </div>

            <div>
              <strong>05</strong>
              <span>CORE TECHNOLOGIES</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>POWERED INSIGHTS</span>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PREVIEW */}
        <section className="cs-preview-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              01 / APPLICATION PREVIEW
            </p>

            <h2>
              Inside the <span>Platform.</span>
            </h2>

            <p>
              An interactive concept visualization of the
              financial analytics interface.
            </p>
          </div>

          <div className="cs-preview-window">
            <div className="cs-preview-topbar">
              <div className="cs-window-dots">
                <span />
                <span />
                <span />
              </div>

              <span>smart-financial-coach / analytics</span>
              <span>◈</span>
            </div>

            <div className="cs-preview-content">
              <ProjectVisual type="finance" />

              <div className="cs-preview-details">
                <div>
                  <span>ANALYTICS</span>
                  <strong>Transaction Intelligence</strong>
                </div>

                <div>
                  <span>FORECASTING</span>
                  <strong>Financial Trend Analysis</strong>
                </div>

                <div>
                  <span>AI INTEGRATION</span>
                  <strong>Personalized Recommendations</strong>
                </div>
              </div>
            </div>
          </div>

          <p className="cs-preview-caption">
            Illustrative interface preview. The chart uses
            sample data rather than actual user transactions.
          </p>
        </section>

        {/* OVERVIEW */}
        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              02 / PROJECT OVERVIEW
            </p>

            <h2>
              The <span>Problem.</span>
            </h2>
          </div>

          <div className="cs-two-column">
            <p>
              Financial transaction histories can be difficult
              to interpret when spending information is spread
              across individual records. Users need an easier
              way to recognize patterns and understand how
              current financial habits may affect future goals.
            </p>

            <p>
              Smart Financial Coach addresses this challenge
              by combining transaction analysis, financial
              forecasting, and AI-generated recommendations
              in a single application.
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
              Engineered for <span>Insight.</span>
            </h2>
          </div>

          <div className="cs-feature-grid">
            {features.map((feature) => (
              <article
                className="cs-feature-card"
                key={feature.number}
              >
                <div className="cs-feature-top">
                  <span>{feature.number}</span>
                  <span className="cs-feature-icon">
                    {feature.icon}
                  </span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              04 / SYSTEM DESIGN
            </p>

            <h2>
              System <span>Architecture.</span>
            </h2>

            <p>
              A high-level view of the technologies used
              to build the platform.
            </p>
          </div>

          <div className="cs-architecture">
            <div className="cs-architecture-primary">
              <div className="cs-architecture-node">
                <span>01 / PRESENTATION LAYER</span>
                <strong>React Frontend</strong>
                <p>Financial dashboard and user interaction</p>
              </div>

              <div className="cs-architecture-arrow">↓</div>

              <div className="cs-architecture-node">
                <span>02 / APPLICATION LAYER</span>
                <strong>FastAPI Backend</strong>
                <p>Transaction processing and analytics</p>
              </div>

              <div className="cs-architecture-arrow">↓</div>
            </div>

            <div className="cs-architecture-branches">
              <div className="cs-architecture-node">
                <span>03 / DATA LAYER</span>
                <strong>SQLite Database</strong>
                <p>Structured financial information</p>
              </div>

              <div className="cs-architecture-node">
                <span>04 / INTELLIGENCE LAYER</span>
                <strong>OpenAI API</strong>
                <p>AI-generated financial insights</p>
              </div>
            </div>
          </div>

          <p className="cs-architecture-note">
            Conceptual component diagram based on the
            project's technology stack. Exact API and
            database interactions can be documented
            once implementation details are confirmed.
          </p>
        </section>

        {/* TECH STACK */}
        <section className="cs-section">
          <div className="cs-section-heading">
            <p className="cs-eyebrow">
              05 / TECHNOLOGY STACK
            </p>

            <h2>
              Built With <span>Purpose.</span>
            </h2>
          </div>

          <div className="cs-stack-grid">
            {architecture.map((item) => (
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
            06 / PROJECT OUTCOME
          </p>

          <h2>
            From Data to <span>Decisions.</span>
          </h2>

          <p>
            Smart Financial Coach brings transaction processing,
            financial analytics, forecasting, and AI-powered
            guidance together in one application. The project
            demonstrates the integration of frontend development,
            backend APIs, data storage, and generative AI.
          </p>

          <div className="cs-outcome-stat">
            <strong>1,000+</strong>
            <span>TRANSACTIONS PROCESSED</span>
          </div>
        </section>

        {/* NAVIGATION */}
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
