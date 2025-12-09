import React from 'react'

const ProjectCard = ({ name, role, description, tech, highlight, icon }) => {
  return (
    <article className="card">
      <div className="card-header-row">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          {icon && (
            <img
              src={icon}
              alt={name}
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          )}
          <div>
            <h2 className="card-title">{name}</h2>
            {highlight && <p className="card-subtitle">{highlight}</p>}
          </div>
        </div>
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
