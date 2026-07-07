import "./SkillBadge.css";

function SkillBadge({ skill }) {
  return (
    <span className="skill-badge">
      {skill}
    </span>
  );
}

export default SkillBadge;