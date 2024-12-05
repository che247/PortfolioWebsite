import { document } from "postcss";
import useDocTitle from "../hooks/useDocTitle";
import profile_pic from "/images/no_chain_profile.JPEG";
import volleyball from "/images/volleyball.JPEG";
import biking from "/images/biking_fun.JPEG";
import car from "/images/car.JPEG";

const AboutMe = () => {
  useDocTitle("About Me - Che's Website");

  return (
    <div>
      <div
        className="mb-8 flex flex-col items-center gap-6 p-4 lg:flex-row"
        data-aos="fade"
      >
        <img
          src={profile_pic}
          alt="Che"
          className="mx-auto w-full lg:mx-0 lg:w-1/3"
        />
        <div className="text-xs">
          <span className="text-center text-3xl lg:text-left">
            Hi, I'm Che!
          </span>
          <p className="text-xl">
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
      <div className="mb-4">
        <div
          className="grid auto-rows-max grid-cols-3 gap-4"
          data-aos="slide-up"
          data-aos-anchor="center-bottom"
        >
          <div className="col-start-1 row-start-1 flex items-center justify-center text-xl">
            <p>
              Outside of school, I love playing various sports including my
              favorite, volleyball. I love to explore the outdoors with
              friends/family and love cruising on a bike. I also love building
              things physically! When I get the chance, I like to work on my car
              as well.
            </p>
          </div>

          <div className="col-start-2 row-start-1 flex flex-col items-center">
            <img
              src={volleyball}
              alt="volleyball"
              className="h-42 w-42 mb-1 object-cover"
            />
            <img src={car} alt="car" className="h-42 w-42 object-cover" />
          </div>

          <img
            src={biking}
            alt="biking"
            className="h-42 w-42 col-start-3 row-start-1 mx-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
