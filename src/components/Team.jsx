import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
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
    setInfoBoxOpen(!infoBoxOpen);
  };

  const closeInfo = () => {
    setInfoBoxOpen(false);
  };

  const getPositionClass = (index) => {
    if (index === activeIndex) return "center";
    return "hidden"; // Only show the central profile on mobile
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleProfileClick("right"),
    onSwipedRight: () => handleProfileClick("left"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div>
      {/* Instructional Text */}
      <div className="team-instructions">
        <p>Swipe left or right to explore more employees. Tap to see more details!</p>
      </div>

      <div {...swipeHandlers} className="team-container">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`team-member ${getPositionClass(index)}`}
            onClick={() =>
              getPositionClass(index) === "center" ? handleInfoClick() : null
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
