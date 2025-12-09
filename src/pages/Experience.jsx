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

      <section style={{ marginBottom: '3rem' }}>
        <h2 className="card-title" style={{ marginBottom: '1rem' }}>
          Professional Experience
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-role">Mobile App Developer Intern</div>
            <div className="timeline-company">Excelerate · Boston, MA</div>
            <div className="timeline-dates">2025</div>
            <ul className="timeline-bullets">
              <li>
                Built a cross-platform app in Flutter/Dart for Android and iOS to streamline user
                onboarding.
              </li>
              <li>
                Implemented core modules with optimized navigation and faster load times while
                aligning with brand UI standards.
              </li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-role">AI Data Analyst Intern</div>
            <div className="timeline-company">Excelerate</div>
            <div className="timeline-dates">2025</div>
            <ul className="timeline-bullets">
              <li>
                Cleaned and prepared datasets, engineered features, and ran experiments with
                models like logistic regression, decision trees, and random forests.
              </li>
              <li>
                Built visualizations and reports that helped surface drivers of engagement and
                churn for stakeholders.
              </li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-role">Data Analyst Associate Intern</div>
            <div className="timeline-company">Excelerate</div>
            <div className="timeline-dates">2025</div>
            <ul className="timeline-bullets">
              <li>Used PostgreSQL to analyze engagement data and reduce manual data prep.</li>
              <li>
                Built dashboards in Looker Studio and Excel to track sign-ups, completions, and
                drop-offs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="card-title" style={{ marginBottom: '1rem' }}>
          Education
        </h2>
        <div className="grid">
          <div className="card">
            <div className="card-title">Post Graduate Certificate, Full Stack Software Development</div>
            <p className="card-subtitle">University of Texas at Austin</p>
            <p className="card-body muted">Focus on modern web development and scalable systems.</p>
          </div>
          <div className="card">
            <div className="card-title">B.S. in Computer Engineering</div>
            <p className="card-subtitle">University of Massachusetts Amherst</p>
            <p className="card-body muted">
              Chancellor Scholarship recipient and Dean&apos;s List with a focus on both software and
              hardware systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
