import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import MainContent from './mainContent/MainContent'
import AboutContent from './aboutContent/AboutContent'
import Projects from './projectContent/Projects'

function Home() {
    return (
        <>
            <Navbar />
            <MainContent />
            <AboutContent />
            <Projects />
        </>
    )
}

export default Home
