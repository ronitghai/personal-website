import React from 'react'

const SectionHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="section-header">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <h1 className="section-title">{title}</h1>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
