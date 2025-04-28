import "./projects.component.css";
const projects = [
  {
    project_name: "Portfolio Website",
    url: "/images/projects/portfolio.png",
    project_url: "https://cheher.dev",
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
  {
    project_name: "Agentic Data Science",
    url: "/images/projects/Capstone Poster.png",
    project_url: "https://drive.google.com/file/d/1lXJZYSiinF5P2NFL7ZyzG6ktZm97VWD3/view?usp=sharing",
    project_description: [
      "A full-stack application that automates AI agents to solve data science tasks.",
      "Built with LangGraph, featuring a custom Strategy Agent for ochestration and custom tools for the most critial data science work.",
      "Includes automated pipelines using multiple agents in each for data cleaning, EDA, and visualization."
    ],
  },
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {projects.map((project, index) => (
        <div className="project_card" key={index}>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <a href={project.project_url} target="_blank" rel="noopener noreferrer">
              <img src={project.url} alt={project.project_name} />
            </a>
          </div>
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
