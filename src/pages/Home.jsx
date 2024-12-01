import React from "react";
import HomeTitle from "../components/HomeTitle";
import HomeText from "../components/HomeText";
import "../components/Home.css";

function Home() {
  return (
    <div className="home-container">
      <HomeTitle />
      <HomeText />
    </div>
  );
}

export default Home;
