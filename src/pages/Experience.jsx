import React from 'react'
import SectionHeader from '../components/SectionHeader'

const Experience = () => {
  return (
    <div className="page-container">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've been applying these skills"
        subtitle="Internships and roles where I’ve shipped real features, dashboards, and models."
      />

      {/* ================= PROFESSIONAL EXPERIENCE ================= */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="card-title" style={{ marginBottom: '1rem' }}>
          Professional Experience
        </h2>

        <div className="grid">
          {/* Mobile App Developer Intern */}
          <div className="card">
            <div className="exp-header">
              <div className="exp-left">
                <div className="card-title">Mobile Application Developer Intern</div>
                <div className="card-subtitle">Excelerate</div>
              </div>
              <div className="exp-year">Oct. 2025 - Nov. 2025</div>
            </div>

            <ul className="exp-bullets">
              <li>
                Built and refined app flows in Flutter to streamline user onboarding and navigation
                across Android and iOS.
              </li>
              <li>
                Improved perceived performance and responsiveness by tuning page transitions,
                reducing friction in key user journeys.
              </li>
            </ul>
          </div>

          {/* AI Data Analyst Intern */}
          <div className="card">
            <div className="exp-header">
              <div className="exp-left">
                <div className="card-title">AI Data Analyst Intern</div>
                <div className="card-subtitle">Excelerate</div>
              </div>
              <div className="exp-year">Sept. 2025. - Oct. 2025</div>
            </div>

            <ul className="exp-bullets">
              <li>
                Cleaned, transformed, and explored marketing and engagement datasets to surface
                patterns in learner behavior.
              </li>
              <li>
                Prototyped models to predict outcomes like completion and retention, then presented
                insights using clear visualizations.
              </li>
            </ul>
          </div>

          {/* Data Analyst Associate Intern */}
          <div className="card">
            <div className="exp-header">
              <div className="exp-left">
                <div className="card-title">Data Analyst Associate Intern</div>
                <div className="card-subtitle">Excelerate</div>
              </div>
              <div className="exp-year">July 2025 - Sept. 2025</div>
            </div>

            <ul className="exp-bullets">
              <li>
                Wrote PostgreSQL queries to answer product questions, reducing manual reporting and
                ad-hoc spreadsheet work.
              </li>
              <li>
                Built dashboards to track funnel metrics (sign-ups, completions, drop-off points)
                and support data-informed decisions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section>
        <h2 className="card-title" style={{ marginBottom: '1rem' }}>
          Education
        </h2>

        <div className="grid">
          {/* UT Austin */}
          <div className="card">
            <div className="edu-header">
              <div className="edu-left">
                <div className="card-title">
                  Post Graduate Certificate — Full Stack Software Development
                </div>
                <div className="card-subtitle">University of Texas at Austin</div>
              </div>
              <div className="edu-year">2025 – 2026</div>
            </div>

            <p className="card-body muted">
              Focus on modern web development, cloud infrastructure, and scalable full-stack systems.
            </p>
          </div>

          {/* UMass Amherst */}
          <div className="card">
            <div className="edu-header">
              <div className="edu-left">
                <div className="card-title">B.S. in Computer Engineering</div>
                <div className="card-subtitle">University of Massachusetts - Amherst</div>
              </div>
              <div className="edu-year">2021 – 2025</div>
            </div>

            <p className="card-body muted">
              Chancellor Scholarship recipient and Dean&apos;s List with coursework spanning embedded
              systems, software engineering, cloud computing, and AI.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
