import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import MainContent from './mainContent/MainContent'
import AboutContent from './aboutContent/AboutContent'
import Projects from './projectContent/Projects'
import ContactMe from './contactMe/ContactMe'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <MainContent />
            <hr></hr>
            <AboutContent />
            <hr></hr>
            <Projects />
            <hr></hr>
            <ContactMe />
            <Footer />
        </>
    )
}

export default Home
