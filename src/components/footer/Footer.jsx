import React from 'react'
import "./Footer.css"
import SocialLinks from '../socialLinks/SocialLinks';


function Footer() {
    return (
        <div className="footer">
            <div className="MyName" >Abhisehk Sehjal</div>

            <div className="pageLinksOfFooter">
                <ul>
                    <li><a href="#pageLinks">Home</a></li>
                    <li><a href="#pageLinks">About</a></li>
                    <li><a href="#pageLinks">Project</a></li>
                    <li><a href="#pageLinks">Contact</a></li>
                </ul>
            </div>

            <SocialLinks />


            <p className='footerLastLine'>Created by © <a href="#" style={{ color: "blue" }}>Abhishek Sehjal</a></p>
        </div>
    )
}

export default Footer
