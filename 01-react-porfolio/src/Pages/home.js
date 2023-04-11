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
            <p>Hello! I'm Christian Mendez currently a Full Stack Web Development student at UT Austin.
                Throughout this boot camp I will gain knowledge of how computer science is applied to JavaScript, browser based technologies,
                API design, deployment and delivery, and server side development. I am enthusiastic,
                dependable, and self-motivated individual with proven success in working for several respected companies. Quick learner,
                eager to further my knowledge and skills in all areas.</p>


            {/* <section className='image'>
                <div>
                    <img src={screenshot3} className="App-logo" alt="logo" />
                </div>
            </section> */}



        </section>

    )
}
export default Home;