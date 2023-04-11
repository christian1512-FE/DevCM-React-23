import ProjectCard from "../components/ProjectCard";
import screenshot1 from "../Assets/Images/Screenshots/screenshot1.png";
// import screenshot2 from "../Assets/Images/Screenshots/screenshot2.png";
import passwordgen from "../Assets/Images/Screenshots/passwordgen.png";


const sectionStyle= {display:"flex", flexWrap: "wrap", border: "1px solid red", maxWidth: "80vw", margin: "0 auto", justifyContent: "space-around"};

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
      website: "",
      github: "",
    },
    {
      id: 3,
      title: "project1",
      // image: GitHublogo,
      desc: "",
      website: "",
      github: "",
    },
    {
      id: 4,
      title: "project1",
      image: "",
      desc: "",
      website: "",
      github: "",
    },
    {
      id: 5,
      title: "project1",
      image: "",
      desc: "",
      website: "",
      github: "",
    },
    {
      id: 6,
      title: "project1",
      image: "",
      desc: "",
      website: "",
      github: "",
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