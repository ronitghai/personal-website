import React from 'react'

const ProjectCard = ({ name, role, description, tech, highlight }) => {
  return (
    <article className="card">
      <div className="card-header-row">
        <div>
          <h2 className="card-title">{name}</h2>
          {role && <p className="card-subtitle">{role}</p>}
        </div>
        {highlight && <span className="card-chip">{highlight}</span>}
      </div>
      <p className="card-body">{description}</p>
      {tech && tech.length > 0 && (
        <div className="card-tags">
          {tech.map((t) => (
            <span key={t} className="card-tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
