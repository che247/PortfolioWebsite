import useDocTitle from "../hooks/useDocTitle";
import "./home.component.css";
import "./work_experiences.component.css";
import "./education_sections.component.css";
import "./skill_cards.component.css";
import WorkExperience from "./work_experiences.component";
import EducationExperience from "./education_sections.component";
import Skills from "./skill_cards.component";

const Home = () => {
  useDocTitle("Che's Website - Home");
  const professional_experiences = [
    {
      title: "Software Engineer Intern",
      company: "Seagate",
      Blurb: `Developed high-level Python scripts to ensure the quality and reliability of enterprise-level hard drives, implementing rigorous testing procedures to verify drive integrity. \n\n Built modular and maintainable internal web applications to streamline workflows and enhance productivity for engineering teams.`,
    },
    {
      title: "IT Student Tech",
      company: "FRCC (Westminster, CO)",
      Blurb:
        "Oversee the installation and maintenance of computer network systems. Ensured frictionless operation between user and software conflict",
    },
  ];

  const educational_sections = [
    {
      logo: "/images/cu_logo.png",
      school: "University of Colorado Boulder",
      degree: "Bachelor of Science, Computer Science",
      dates: "Jan 2023-May 2025",
      gpa: "3.82",
      url: "https://www.colorado.edu",
      blurb: "",
    },
    {
      logo: "/images/frcc_logo.jpg",
      school: "Front Range Community College (Westminster Campus)",
      degree: "Associate of Science (Applied Science - Transfer Degree)",
      dates: "Aug 2021-Jan 2023",
      gpa: "3.87",
      url: "https://www.frontrange.edu",
      blurb: "",
    },
  ];

  const frontend_skills = [
    {
      logo: "/images/skill_logos/icons8-html.svg",
      skill: "html",
    },
    {
      logo: "/images/skill_logos/icons8-css.svg",
      skill: "css",
    },
    {
      logo: "/images/skill_logos/icons8-react-native.svg",
      skill: "react/js",
    },
  ];
  const backend_skills = [
    {
      logo: "/images/skill_logos/icons8-django.svg",
      skill: "django",
    },
    {
      logo: "/images/skill_logos/icons8-postgres.svg",
      skill: "SQL/PostgreSQL",
    },
    {
      logo: "/images/skill_logos/icons8-express-js.svg",
      skill: "express",
    },
  ];

  const datascience_skills = [
    {
      logo: "/images/skill_logos/icons8-python.svg",
      skill: "python",
    },
    {
      logo: "/images/skill_logos/icons8-pandas.svg",
      skill: "pandas",
    },
    {
      logo: "/images/skill_logos/scikit-learn.svg",
      skill: "sklearn",
    },
  ];

  return (
    <main className="main">
      {/*<!-- BIG NAME -->*/}
      <div
        className="title"
        data-aos="fade"
        data-aos-anchor="center-bottom"
        data-aos-duration="1000"
        id="title"
      >
        <div className="name">Che Meng Her</div>
        <div className="job_title">Software Engineer</div>
      </div>

      {/*<!--Current -->*/}
      <div
        className="current_prev_sections"
        data-aos="slide-up"
        data-aos-anchor="center-bottom"
        data-aos-duration="1000"
      >
        <span className="current_prev_titles">Current</span>
        <ul>
          <li>
            <span className="current_prev_positions">
              Software Engineer (Intern) at Seagate
            </span>
          </li>
          <li>
            <span className="current_prev_positions">
              Senior at Univeristy of Colorado Boulder 🦬 Spring 2025
            </span>
          </li>
        </ul>
      </div>
      <div
        className="current_prev_sections"
        data-aos="slide-up"
        data-aos-anchor="center-bottom"
        data-aos-duration="1000"
      >
        <span className="current_prev_titles">Prev</span>
        <ul>
          <li>
            <span className="current_prev_positions">
              Student IT Technician
            </span>
          </li>
        </ul>
      </div>

      <div className="horizontal_gap"></div>

      <div
        className="professional_experiences"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <span className="section_title">Professional Experiences</span>
        <div className="">
          {professional_experiences.map((experience, index) => (
            <WorkExperience
              key={index}
              title={experience.title}
              company={experience.company}
              blurb={experience.Blurb}
            />
          ))}
        </div>
      </div>

      <div className="horizontal_gap"></div>

      <div
        className="education_section"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <span className="section_title">Education</span>
        {educational_sections.map((school, index) => (
          <EducationExperience
            index={index}
            logo={school.logo}
            school={school.school}
            degree={school.degree}
            dates={school.dates}
            gpa={school.gpa}
            url={school.url}
          />
        ))}
      </div>

      <div className="horizontal_gap"></div>

      <div
        className="skill_section"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <span className="section_title">Skills</span>
        <div className="skills_grid_container">
          <span className="skill_title">Frontend</span>
          {frontend_skills.map((skill, index) => (
            <Skills index={index} skill={skill.skill} logo={skill.logo} />
          ))}
          <span className="skill_title">Backend</span>
          {backend_skills.map((skill, index) => (
            <Skills index={index} skill={skill.skill} logo={skill.logo} />
          ))}
          <span className="skill_title">Data Science</span>
          {datascience_skills.map((skill, index) => (
            <Skills index={index} skill={skill.skill} logo={skill.logo} />
          ))}
        </div>
      </div>

      <div className="horizontal_gap"></div>

      <div
        className="resume_section"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <span id="resume_title" className="section_title">
          Check Out The Resume
        </span>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/16O3oYEay3OcLt_5Vr3qQQUOu-Atx8eAP/view?usp=share_link"
        >
          <img src="/images/icons8-file.svg" alt="Che's Resume" />
        </a>
      </div>

      <div className="horizontal_gap"></div>

      <div
        className="connect_section"
        data-aos="slide-up"
        data-aos-duration="1000"
      >
        <span id="connecting_section" className="section_title">
          Let's Connect!
        </span>
        <div className="social_links_container">
          <a
            target="_blank"
            id="linked_in"
            href="https://www.linkedin.com/in/chemeng-her/"
          >
            <img src="/images/icons8-linkedin.svg" alt="" />
          </a>
          <a target="_blank" id="github" href="https://github.com/che247">
            <img src="/images/icons8-github.svg" alt="" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
