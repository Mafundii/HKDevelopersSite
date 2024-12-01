import React from "react";
import Team from "../components/Team";
import "../components/About.css";

function About() {
  return (
    <div>
      <h1 className="about-title">About HKDevelopers</h1>
      <p className="about-text">
  We believe that great results come from great teams. Our team is composed of
  highly skilled and experienced professionals who are passionate about delivering exceptional
  quality and innovation. Each member brings a unique set of skills and expertise, ensuring that
  we approach every project with precision, efficiency, and creativity.
</p>
<p className="about-text">
  Together, we are dedicated to exceeding client expectations, building lasting relationships, and
  turning visions into reality. Whether it's crafting cutting-edge designs, managing complex
  projects, or ensuring every detail is perfect, our team works collaboratively to bring your ideas
  to life.
</p>
<p className="about-text">
  Get to know the people behind HK Developers and see how our combined efforts make every project a
  success.
</p>

      <Team />
    </div>
  );
}

export default About;

