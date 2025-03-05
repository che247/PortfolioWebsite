const EducationExperience = (props) => {
  return (
    <div className="education">
      <div className="top-level_education_info">
        <a target="_blank" className="school_logo" href={props.url}>
          <img src={props.logo} alt={`${props.school} - Website`} />
        </a>
        <div className="education_info">
          <span id="school_name">{props.school}</span>
          <span id="degree">
            {props.degree} - {props.gpa} gpa
          </span>
          <span id="dates_attended">{props.dates}</span>
          {/*<span id="gpa">{props.gpa}</span>*/}
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
