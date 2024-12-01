import React from "react";
import "./Info.css";

function Info({ activeMember, closeInfo }) {
  if (!activeMember) return null; 

  return (
    <div className={`info-box fade-in`}>
      <button className="close-button" onClick={closeInfo}>
        ×
      </button>
      <h3>{activeMember.name}</h3>
      <h4>{activeMember.title}</h4>
      <p>{activeMember.description}</p>
    </div>
  );
}

export default Info;
