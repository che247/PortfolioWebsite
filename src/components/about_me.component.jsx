import "./about_me.component.css";
import Activity from "./activity.component";
import useDocTitle from "../hooks/useDocTitle";

const AboutMe = () => {
  useDocTitle("Che's Website - About Me")
  const activities = [
    {
      img: "/images/volleyball.JPEG",
      activity: "volleyball",
      description: "I love playing volleyball",
    },
    {
      img: "/images/biking_fun.JPEG",
      activity: "biking",
      description: "I love riding in the summer",
    },
    {
      img: "/images/car.JPEG",
      activity: "cars",
      description: "I love wrenching on my car",
    },
  ];
  return (
    <>
      <div className="intro" data-aos="fade" data-aos-duration="1500">
        <img
          src="/images/no_chain_profile.JPEG"
          alt="Che"
          className="profile_picture"
        />
        <div className="descriptors">
          <span className="">Hi, I'm Che!</span>
          <p className="">
            I am currently a senior studying Computer Science at CU Boulder.
            Over the past few years, I have been dialing in my software
            engineering skills both through coursework and a rewarding
            internship at Seagate. During my time there, I practiced
            professional software engineering principles while contributing to
            an agile team. My technical expertise includes programming languages
            such as Python and Java, as well as experience in full-stack
            development using frameworks like Django and React, along with
            technologies such as Node.js. I have a deep passion for
            data—uncovering trends, drawing meaningful inferences, and
            leveraging insights to solve problems. Additionally, I love building
            practical, user-focused applications that others (and I) can enjoy
            and benefit from.
          </p>
        </div>
      </div>
      <div className="descriptors" data-aos="fade" data-aos-duration="1500">
        <p>
          Outside of school, I love playing various sports including my
          favorite, volleyball. I love to explore the outdoors with
          friends/family and love cruising on a bike. I also love building
          things physically! When I get the chance, I like to work on my car as
          well.
        </p>
      </div>
      <div className="activities" data-aos="fade-up" data-aos-duration="1000">
        {activities.map((activity, index) => (
          <Activity
            key={index}
            img={activity.img}
            activity={activity.activity}
            description={activity.description}
          />
        ))}
      </div>
    </>
  );
};
// /28/ /biking_fun.JPEG
// /29/ /car.JPEG
// /30/ /no_chain_profile.JPEG
// /31/ /volleyball.JPEG

export default AboutMe;
