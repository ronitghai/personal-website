import React from 'react'

const CertificationCard = ({ provider, title, year, tags }) => {
  return (
    <article className="card">
      <div className="cert-provider">{provider}</div>
      <div className="cert-title">{title}</div>
      <div className="cert-year">{year}</div>
      {tags && tags.length > 0 && (
        <div className="cert-pill-row">
          {tags.map((tag) => (
            <span key={tag} className="cert-pill">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default CertificationCard
