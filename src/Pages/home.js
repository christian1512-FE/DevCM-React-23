import React from 'react';
// import '../styles/Home.css';
// import screenshot2 from "../Assets/Images/Screenshots/screenshot2.png";
// import screenshot1 from "../Assets/Images/Screenshots/screenshot1.png";
// import screenshot2 from "../Assets/Images/Screenshots/screenshot2.png";
import screenshot3 from "../Assets/Images/Screenshots/screenshot3.png";


function Home() {
    return (

        <section className='aboutme'>
            <section className='image'>
                <div>
                    <img src={screenshot3} className="App-logo" alt="logo" />
                </div>

            </section>

            <p>Hi, my name is Christian Mendez, and I am a Full Stack Web Development student at UT Austin.
                Throughout this boot camp, I am gaining knowledge in applying computer science principles to JavaScript,
                browser-based technologies, API design, deployment and delivery, and server-side development.
                As an enthusiastic, dependable, and self-motivated individual, I have achieved success in working for several respected companies.
                I am a quick learner and eager to expand my knowledge and skills in all areas</p>

        </section>

    )
}
export default Home;