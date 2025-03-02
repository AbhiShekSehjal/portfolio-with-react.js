import React from 'react'
import "./Navbar.css"
import CvButton from '../buttons/CvButton'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

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

                <CvButton className="CvButton" />

                <MenuOpenIcon className='hamburger'/>
            </div>
        </>
    )
}

export default Navbar
