import React from 'react'
import "./Projects.css"
import ProjectCard from './components/projectCard/ProjectCard'

function Projects(name) {
    return (
        <div className="projectContent">
            <div className="projectText" style={{ textAlign: "center" }}>Projects</div>

            <div className="projects">
                <ProjectCard name="Js projects" />
                <ProjectCard name="Html projects" />
                <ProjectCard name="React projects" />
                <ProjectCard name="Angular projects" />
                <ProjectCard name="Photoshop projects" />
                <ProjectCard name="XD projects" />
            </div>
        </div>
    )
}

export default Projects
