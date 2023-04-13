import ProjectCard from "../components/ProjectCard";
import screenshot1 from "../Assets/Images/Screenshots/screenshot1.png";
import passwordgen from "../Assets/Images/Screenshots/passwordgen.png";
import express from "../Assets/Images/Screenshots/express.png";
import node from "../Assets/Images/Screenshots/node.png";
import apiproject from "../Assets/Images/Screenshots/apiproject.png";
import mysql from "../Assets/Images/Screenshots/mysql.png";

const sectionStyle= {display:"flex", flexWrap: "wrap", maxWidth: "80vw", margin: "0 auto", justifyContent: "space-around", color: "white"};

function Projects() {
  const myprojects = [
    {
      id: 1,
      title: "Weather Dashboard",
      image: screenshot1,
      desc: "",
      website: "https://christian1512-fe.github.io/DevCM-WA-3API/",
      github: "https://github.com/christian1512-FE/DevCM-WA-3API",
    },
    {
      id: 2,
      title: "Password Generator",
      image: passwordgen,
      desc: "",
      website: "https://christian1512-fe.github.io/DevCM-Secure-PWD/",
      github: "https://github.com/christian1512-FE/DevCM-Secure-PWD",
    },
    {
      id: 3,
      title: "Express Server",
      image: express,
      desc: "",
      website: "https://devcm-ex-23.herokuapp.com/",
      github: "https://github.com/christian1512-FE/DevCM-Ex-23",
    },
    {
      id: 4,
      title: "Node.js command-line application",
      image: node,
      desc: "",
      website: "https://drive.google.com/file/d/1DFtcp-Wrshoswo7lk0Kd8IHLxXUkEMCD/view",
      github: "https://github.com/christian1512-FE/DevCM-C10-23",
    },
    {
      id: 5,
      title: "API Project",
      image: apiproject,
      desc: "",
      website: "https://fabien1313.github.io/mugs-n-puns/",
      github: "https://github.com/fabien1313/mugs-n-puns",
    },
    {
      id: 6,
      title: "MySQL Database",
      image: mysql,
      desc: "",
      website: "https://drive.google.com/file/d/1cVBoFqdFjZC9VfbiV6PEVR5HNvlm0S-g/view",
      github: "https://github.com/christian1512-FE/DevCM-ET-SQL-23",
    },
  ]
  return (
    <section style={sectionStyle}>
      {
        myprojects.map(project => {
          return <ProjectCard key={project.id} title={project.title} image={project.image} website={project.website} github={project.github}/>
        })
      }
    </section>
  );
}

export default Projects;