const Skills = (props) => {
  return (
    <div id={`${props.skill}_card`} className="skill_card">
      <img className="skill_logo" src={props.logo} alt={props.skill} />
      <span className="skill_name">{props.skill}</span>
      <div className="skill_caption">{props.skill_captions}</div>
    </div>
  );
};

export default Skills;
