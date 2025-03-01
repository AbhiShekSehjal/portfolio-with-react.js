import React from 'react'
import "./skills.css"
import MyBadge from '../../../../../components/badges/MyBadge'

function Skills() {
    return (
        <div className='skills'>
            <div className="skillBox">
                <h4>Frontend</h4>

                <ul className='list' >
                    <li><MyBadge name="HTML" /></li>
                    <li><MyBadge name="CSS" /></li>
                    <li><MyBadge name="JavaScript" /></li>
                    <li><MyBadge name="Bootstrap" /></li>
                    <li><MyBadge name="Tailwind CSS" /></li>
                    <li><MyBadge name="jQuary" /></li>
                    <li><MyBadge name="React.js" /></li>
                    <li><MyBadge name="Angular" /></li>
                </ul>

                <h4>Backend</h4>

                <ul className='list' style={{
                    position: "absolute",
                    left: "168px"
                }} >
                    <li><MyBadge name="Node.js" /></li>
                    <li><MyBadge name="Express.js" /></li>
                </ul>

                <h4>Database</h4>

                <ul className='list' style={{
                    position: "absolute",
                    left: "290px"
                }} >
                    <li><MyBadge name="MongoDB" /></li>
                    <li><MyBadge name="SQL" /></li>
                </ul>
                <h4>Designing</h4>

                <ul className='list' style={{
                    position: "absolute",
                    left: "395px"
                }}>
                    <li><MyBadge name="Adobe Photoshop" /></li>
                    <li><MyBadge name="Adobe XD" /></li>
                    <li><MyBadge name="Figma" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
