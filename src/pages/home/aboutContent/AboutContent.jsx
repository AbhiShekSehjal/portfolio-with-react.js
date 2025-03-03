import React from 'react'
import "./AboutContent.css"
import Intro from './components/intro/intro'
import Skills from './components/skills/Skills'

function AboutContent() {
    return (
        <div className="aboutContent">
            <div className='AboutText'>About Content</div>

            <div className="aboutBoxes">
                <Intro />

                <Skills />
            </div>
        </div>
    )
}

export default AboutContent
