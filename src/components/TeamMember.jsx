import React from "react";
import "./TeamMember.css";

function TeamMember({ id, name, title, imgSrc, details, isActive, onClick }) {
  return (
    <div className={`team-member ${isActive ? "active" : ""}`} onClick={onClick}>
      <img src={imgSrc} alt={name} className="team-member-photo" />
      <div className="team-member-info">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
      {isActive && (
        <div className="team-member-details">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}

export default TeamMember;
