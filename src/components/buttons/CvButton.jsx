import React from 'react'
import "./CvButton.css"
import PlagiarismIcon from '@mui/icons-material/Plagiarism';

function CvButton() {

    const CvButtonLink = false;

    function CvButtonClick() {
        { CvButtonLink == false && alert("Very soon CV will upload!"); }
    }

    return (
        <>
            <div className="CvButton">
                <button onClick={CvButtonClick}><a href="#CvButton ">Download CV </a><PlagiarismIcon fontSize="small" style={{ marginLeft: "8px" }} /></button>
            </div>
        </>
    )
}

export default CvButton
