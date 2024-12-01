import React, { useState } from "react";
import "./Team.css";
import teamMembers from "../data/teamMembers";
import Info from "./Info";

function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [infoBoxOpen, setInfoBoxOpen] = useState(false);

  const handleProfileClick = (direction) => {
    if (direction === "left") {
      setActiveIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
    } else if (direction === "right") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }
  };

  const handleInfoClick = () => {
    if (infoBoxOpen) {
      setInfoBoxOpen(false);
    } else {
      setInfoBoxOpen(true);
    }
  };

  const closeInfo = () => {
    setInfoBoxOpen(false);
  };

  const getPositionClass = (index) => {
    if (index === activeIndex) return "center";
    if (index === (activeIndex - 1 + teamMembers.length) % teamMembers.length) return "left";
    if (index === (activeIndex + 1) % teamMembers.length) return "right";
    return "hidden";
  };

  return (
    <div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`team-member ${getPositionClass(index)}`}
            onClick={() =>
              getPositionClass(index) === "left"
                ? handleProfileClick("left")
                : getPositionClass(index) === "right"
                ? handleProfileClick("right")
                : handleInfoClick()
            }
          >
            <img src={member.imgSrc} alt={member.name} />
            <h3>{member.name}</h3>
            {getPositionClass(index) === "center" && <p>{member.title}</p>}
          </div>
        ))}
      </div>
      {infoBoxOpen && (
        <Info activeMember={teamMembers[activeIndex]} closeInfo={closeInfo} />
      )}
    </div>
  );
}

export default Team;
