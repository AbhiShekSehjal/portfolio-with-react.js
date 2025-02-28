import React from 'react'
import "./MainContent.css"
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import SocialLinks from '../../../components/socialLinks/socialLinks';

function MainContent() {
    return (
        <div className="mainContent">
            <div className="leftMainContent">
                <span className='spanTextName'>Abhishek Sehjal</span>
                <h1>I'm <span className='spanText2'>Web Developer</span></h1>
                <p>Frontend Developer With A Passion For Creating Visually Stunning And User-Friendly Websites.</p>

                <div className="CvButton CvButton2">
                    <button><a href="#CvButton">Download CV <PlagiarismIcon fontSize="small" /></a></button>
                </div>
                <div className="hireButton">
                    <button><a href="#hireButton">Hire me</a></button>
                </div>

                <SocialLinks />

            </div>

            <div className="rightMainContent">
                <img className="heroImage"></img>
            </div>
        </div>
    )
}

export default MainContent
