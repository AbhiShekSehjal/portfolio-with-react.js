import React from 'react'
import "./MainContent.css"
import SocialLinks from '../../../components/socialLinks/SocialLinks';
import CvButton from '../../../components/buttons/CvButton';
import HireButton from '../../../components/buttons/HireButton';
import MyBadge from '../../../components/badges/MyBadge';

function MainContent() {

    return (
        <div className="mainContent">
            <div className="leftMainContent">

                <MyBadge name="Abhishek Sehjal" />

                <h1>I'm <span className='spanText2'>Web Developer</span></h1>
                <p>Frontend Developer With A Passion For Creating Visually Stunning And User-Friendly Websites.</p>

                <div className='Cvbtn'>
                    <CvButton />
                </div>

                <HireButton />

                <SocialLinks />

            </div>

            <div className="rightMainContent">
                <div className="heroImage"></div>
                {/* <div className="heroImage" style={{ backgroundImage: `url(${img1})` }}></div> */}
            </div>
        </div>
    )
}

export default MainContent
