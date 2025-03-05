const WorkExperience = (props) => {
  // title, company, blurb
  return (
    <div className="experience">
      <div>
        <span className="title_and_company">
          {props.title},<span className="spacer"> </span> <i>{props.company}</i>
        </span>
        <div className="blurb">{props.blurb}</div>
      </div>
    </div>
  );
};

export default WorkExperience;
