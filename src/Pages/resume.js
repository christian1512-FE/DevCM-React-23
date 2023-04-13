import React from 'react';

function Resume() {
    return (
        <section className='resume'>
        
            <section className='resumecard'>
                <h4>Front-End</h4>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>React</li>
            </section>

            <section className='resumecard'>
                <h4>Back-End</h4>
                <li>APIs</li>
                <li>NodeJS</li>
                <li>REST</li>
            </section>

            <section className='resumecard'>
                <h4>Database</h4>
                <li>MySql</li>
                <li>NoSQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
            </section>

            <section>
            <a href={require("../Assets/Resume/ResumeChristianMendez_2022.pdf")} download>
                <h4>Download Resume</h4>
            </a>
            </section>
        </section>

    )
}
export default Resume;