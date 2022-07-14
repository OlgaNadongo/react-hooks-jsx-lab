import React from "react";
import { image } from "../data/data";

function About() {
  return(
    <div id="about">
      <h2>About Me</h2>
      <p>A professional developer with a passion for developing websites for SMEs </p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
