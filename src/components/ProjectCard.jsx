import React from 'react'

const ProjectCard = ({ name, role, description, tech, highlight, icon, video }) => {
  return (
    <article className="card">
      {/* ========== HEADER ========== */}
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

      {/* ========== DESCRIPTION ========== */}
      <p className="card-body">{description}</p>

      {/* ========== YOUTUBE THUMBNAIL ========== */}
      {video && (
        <div
          className="video-thumb"
          onClick={() =>
            window.open(`https://www.youtube.com/watch?v=${video}`, '_blank')
          }
          style={{
            cursor: 'pointer',
            marginTop: '1rem',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 0 20px rgba(0,0,0,0.35)',
            transition: 'transform 0.25s ease, boxShadow 0.25s ease',
          }}
        >
          <img
            src={`https://img.youtube.com/vi/${video}/hqdefault.jpg`}
            alt={`${name} demo video`}
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      )}

      {/* ========== TECH TAGS ========== */}
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
