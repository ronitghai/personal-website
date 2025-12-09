import React from 'react'
import SectionHeader from '../components/SectionHeader'
import CertificationCard from '../components/CertificationCard'
import { certifications } from '../data/certifications'

const Certifications = () => {
  return (
    <div className="page-container">
      <SectionHeader
        eyebrow="Certifications"
        title="Cloud & AI credentials"
        subtitle="A focused subset of certifications that support my work in cloud architecture and AI systems."
      />
      <div className="cert-grid">
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.title}
            provider={cert.provider}
            title={cert.title}
            year={cert.year}
            tags={cert.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Certifications
