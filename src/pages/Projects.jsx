import React from 'react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <div className="page-container">
      <SectionHeader
        eyebrow="Projects"
        title="End-to-end systems I've built"
        subtitle="From smart hardware to cloud-native web apps and AI assistants."
      />
      <div className="grid grid-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            tech={project.tech}
            highlight={project.highlight}
            icon={project.icon}
            video={project.video}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
