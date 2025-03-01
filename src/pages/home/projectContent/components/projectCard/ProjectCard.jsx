import React from 'react'
import "./projectCard.css"
import SourceIcon from '@mui/icons-material/Source';

function ProjectCard() {
    return (
        <div className="projectCard">
            <SourceIcon style={{ color: "#00c9ff" }} fontSize='large' />
            <h2>JS projects</h2>
        </div>
    )
}

export default ProjectCard
