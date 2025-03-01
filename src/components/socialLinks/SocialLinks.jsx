import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./SocialLinks.css"

function SocialLinks() {

    const links = {
        InstaLink: "https://www.instagram.com/abhi_sehjal09/",
        FbLink: false,
        GitLink: "https://github.com/AbhiShekSehjal",
        LinkedInLink: "https://www.linkedin.com/in/abhi-shek-4a78a5353/",
    }

        return (
            <div className="socialLinks">
                <ul>
                    <li><a href={links.InstaLink}><InstagramIcon fontSize='small' /></a></li>
                    <li><a href={links.FbLink}><FacebookIcon fontSize='small' /></a></li>
                    <li><a href={links.GitLink}><GitHubIcon fontSize='small' /></a></li>
                    <li><a href={links.LinkedInLink}><LinkedInIcon fontSize='small' /></a></li>
                </ul>
            </div>
        )
}

export default SocialLinks
