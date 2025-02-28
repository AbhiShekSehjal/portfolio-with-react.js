import React from 'react'
import "./Navbar.css"
import PlagiarismIcon from '@mui/icons-material/Plagiarism';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo"><a href="#logo">Abhi <span>.</span></a></div>

                <div className="pageLinks">
                    <ul>
                        <li><a href="#pageLinks">Home</a></li>
                        <li><a href="#pageLinks">About</a></li>
                        <li><a href="#pageLinks">Project</a></li>
                        <li><a href="#pageLinks">Contact</a></li>
                    </ul>
                </div>

                <div className="CvButton">
                    <button><a href="#CvButton">Download CV <PlagiarismIcon fontSize="small" /></a></button>
                </div>
            </div>
        </>
    )
}

export default Navbar
