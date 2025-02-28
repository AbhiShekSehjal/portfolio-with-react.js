import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./SocialLinks.css"

function SocialLinks() {
    return (
        <div className="socialLinks">
            <ul>
                <li><a href=""><InstagramIcon fontSize='small' /></a></li>
                <li><a href=""><FacebookIcon fontSize='small' /></a></li>
                <li><a href=""><GitHubIcon fontSize='small' /></a></li>
                <li><a href=""><LinkedInIcon fontSize='small' /></a></li>
            </ul>
        </div>
    )
}

export default SocialLinks
