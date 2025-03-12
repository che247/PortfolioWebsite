import "./projects.component.css";
const projects = [
  {
    project_name: "Portfolio Website",
    url: "/images/projects/portfolio.png",
    project_description: [
      "Completely Built from the Ground Up",
      "Built with React",
      "Deployed and Hosted on Vercel",
      <>
        Icons provided by{" "}
        <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
          Icons8
        </a>{" "}
        and{" "}
        <a
          href="https://www.flaticon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flaticon
        </a>
      </>,
    ],
  },
  // {
  //   project_name: "Auto Data Science",
  //   url: "/images/projects/portfolio.png",
  //   project_description: [
  //     "Completely Built from the Ground Up",
  //     "Built with React",
  //     "Deployed and Hosted on Vercel",
  //   ],
  // },
  // {
  //   project_name: "Portfolio Website",
  //   url: "/images/projects/portfolio.png",
  //   project_description: [
  //     "Completely Built from the Ground Up",
  //     "Built with React",
  //     "Deployed and Hosted on Vercel",
  //     <>
  //       Icons provided by{" "}
  //       <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
  //         Icons8
  //       </a>{" "}
  //       and{" "}
  //       <a
  //         href="https://www.flaticon.com"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Flaticon
  //       </a>
  //     </>,
  //   ],
  // },
];

const Projects = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
      {projects.map((project, index) => (
        <div className="project_card" key={index}>
          <img src={project.url} alt={project.project_name} />
          <div className="project_description">
            <h1 className="project_name">{project.project_name}</h1>
            <ul>
              {project.project_description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
