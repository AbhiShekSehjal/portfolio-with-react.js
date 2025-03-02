import React from 'react'
import "./intro.css"
import CvButton from '../../../../../components/buttons/CvButton'

function Intro() {
    return (
        <div className='intro'>
            <div className="introBox">
                <h2>My Introduction</h2>
                <p className='introPera'>Hii ,I am web Developer in india and i am able to make a responsive and user-friendly web sites. My aim to gain experiance in every fields of life. If you have a time ,look at my projects. 'Less talk Do more', my positive approach to do work well.</p>
                <CvButton />
            </div>
        </div>
    )
}

export default Intro