const Activity = (props) => {
  return (
    <div className="activity" data-aos="fade-up">
      <img
        src={props.img}
        alt={props.activity}
        className="activity_pictures"
      />
      <div className="descriptors">
        <p className="">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Activity;
