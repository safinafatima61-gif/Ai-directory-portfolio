import React from "react";
import SkillBadge from "../SkillBadge/SkillBadge";
import "./TeamMember.css";

const TeamMember = ({
  name,
  role,
  age,
  isAdmin,
  skills,
  address,
  onFollow,
}) => {
  return (
    <div className="team-member-info">
      <div className="member-header">
        <h4 className="member-name">{name}</h4>

        {isAdmin && (
          <span className="admin-badge">Admin</span>
        )}
      </div>

      <p className="member-role">
        <strong>Role:</strong> {role}
      </p>

      <p className="member-meta">
        <strong>Age:</strong> {age}
      </p>

      <p className="member-meta">
        <strong>Location:</strong> {address.city}, {address.country}
      </p>

      <div className="skills-section">
        <p className="skills-heading">Skills:</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>

      <button className="follow-button" onClick={onFollow}>
        Follow
      </button>
    </div>
  );
};

export default TeamMember;