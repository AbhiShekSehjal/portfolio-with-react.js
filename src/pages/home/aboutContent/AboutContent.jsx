import React from 'react'
import "./AboutContent.css"
import Intro from './components/intro/intro'
import Skills from './components/skills/Skills'

function AboutContent() {
    return (
        <div className="aboutContent">
            <div className='AboutText' style={{textAlign:"center"}}>AboutContent</div>

            <Intro />

            <Skills />
        </div>
    )
}

export default AboutContent
