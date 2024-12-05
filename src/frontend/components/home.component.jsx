const Home = () => {
  return (
    <main>
      {/*<!-- BIG NAME -->*/}
      <div className="flex-row">
        <div
          className="mb-20 flex flex-col justify-start"
          data-aos="fade"
          data-aos-anchor="center-bottom"
          data-aos-duration="2000"
          id="title"
        >
          <div className="text-accent text-9xl text-gray-500">Che Meng Her</div>
          <div className="text-6xl">Software Engineer</div>
        </div>

        {/*<!--Current -->*/}
        <div
          className="grid h-20 text-xl font-bold"
          data-aos="slide-up"
          data-aos-anchor="center-bottom"
          data-aos-duration="1000"
        >
          <ul className="list-inside list-disc">
            Current
            <li>
              <span className="font-normal">
                Software Engineer (Intern) at Seagate
              </span>
            </li>
            <li>
              <span className="font-normal">
                Student at Univeristy of Colorado Boulder 🦬 Spring 2025
              </span>
            </li>
          </ul>
        </div>
        <div
          className="mt-2 grid h-20 text-xl font-bold"
          data-aos="slide-up"
          data-aos-anchor="center-bottom"
          data-aos-duration="1000"
        >
          <ul className="list-inside list-disc">
            Prev
            <li>
              <span className="font-normal">Student IT Technician</span>
            </li>
          </ul>
        </div>

        {/*<!--PROFESSIONAL EXPERIENCES-- >*/}

        <div className="h-10"></div>

        <div
          className="grid h-20 text-xl font-bold"
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
