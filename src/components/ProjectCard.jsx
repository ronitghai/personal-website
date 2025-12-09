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
                width: '36px',
                height: '36px',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          )}
          <div>
            <h2 className="card-title">{name}</h2>
            {role && <p className="card-subtitle">{role}</p>}
          </div>
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
