import React from 'react';

function Resume() {
    return (
        <section className='resume' style={{ border: "2px dotted red" }}>
            {/* <div className='row'>
                <div className='col-8'>
                    <div className='row'> */}

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
                    {/* </div> */}
                    {/* <div className='row'> */}
                    {/* <div className='col-6'> */}
                        <section className='resumecard'>
                            <h4>Back-End</h4>
                            <li>APIs</li>
                            <li>NodeJS</li>
                            <li>REST</li>
                        </section>
                        {/* </div> */}
                        {/* <div className='col-6'> */}
                            <section className='resumecard'>
                                <h4>Database</h4>
                                <li>MySql</li>
                                <li>NoSQL</li>
                                <li>Sequelize</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>GraphQL</li>
                            </section>
                        {/* </div>

                    </div> */}

                {/* </div>

            </div> */}
            <section className='downresume'>
            <a href={require("../Assets/Resume/ResumeChristianMendez_2022.pdf")} download>
                <h4>Download Resume</h4>
            </a>
            </section>
        </section>


        // <section className='resume' style={{margin: "20px"}}>
        //     {/* <a href={require("../Assets/Resume/ResumeChristianMendez_2022.pdf")} download>
        //         <h4>Download Resume</h4>
        //     </a>  */}

        //     <section className='resumecard'>
        //         <h4>Front-End</h4>
        //         <li>HTML</li>
        //         <li>CSS</li>
        //         <li>JavaScript</li>
        //         <li>JQuery</li>
        //         <li>Responsive Design</li>
        //         <li>Bootstrap</li>
        //         <li>React</li>
        //     </section>

        //     <section className='resumecard'>
        //         <h4>Back-End</h4>
        //         <li>APIs</li>
        //         <li>NodeJS</li>
        //         <li>REST</li>
        //     </section>

        //     <section className='resumecard'>
        //         <h4>Database</h4>
        //         <li>MySql</li>
        //         <li>NoSQL</li>
        //         <li>Sequelize</li>
        //         <li>MongoDB</li>
        //         <li>Mongoose</li>
        //         <li>GraphQL</li>
        //     </section>

        //     <a href={require("../Assets/Resume/ResumeChristianMendez_2022.pdf")} download>
        //         <h4>Download Resume</h4>
        //     </a>
        // </section>
    )
}
export default Resume;