import useDocTitle from "../hooks/useDocTitle";
import "./home.component.css";

const Home = () => {
  useDocTitle("Che's Website - Home")
  return (
    <main className="main">
      {/*<!-- BIG NAME -->*/}
      <div className="">
        <div
          className="title"
          data-aos="fade"
          data-aos-anchor="center-bottom"
          data-aos-duration="2000"
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
              <span className="current_prev_positions">Student IT Technician</span>
            </li>
          </ul>
        </div>

        {/*<!--PROFESSIONAL EXPERIENCES-- >*/}

        <div className=""></div>

        <div
          className=""
          data-aos="slide-up"
          data-aos-anchor="#title"
          data-aos-duration="2000"
        >
          {/*Put things in here*/}
        </div>
      </div>
      <div>{/*Insert Picture here*/}</div>
    </main>
  );
};

export default Home;
