import React from 'react'
import "./Projects.css"
import ProjectCard from './components/projectCard/ProjectCard'

function Projects() {
    return (
        <div className="projectContent">
            <div className="projectText" style={{ textAlign: "center" }}>Projects</div>

            <div className="projects">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects
