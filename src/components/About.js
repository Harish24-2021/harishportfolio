import React from "react";
import "../presentations/About.css"; // Import the CSS file

function About() {
  return (
<section class="about-me" id="about">
  <h1>About Me</h1>
  <p>
    I’m a passionate Full Stack Developer with over 2.6 years of experience crafting high-performance web applications.
    I specialize in building seamless, scalable, and efficient solutions using technologies such as 
    <span class="highlight"> React.js, Redux, Laravel,Spring boot, Java,MySQL,and JavaScript</span>.
  </p>
  <p>
    I thrive on solving complex challenges, whether designing intuitive front-end interfaces or architecting robust back-end systems. 
    I take pride in writing clean, maintainable code that ensures every project meets the highest standards of quality and performance.
  </p>
  <p>
    Collaboration and continuous learning are at the core of my professional values. Working in dynamic environments has honed my ability 
    to quickly adapt to new technologies and contribute meaningfully to diverse teams.
  </p>
  <a href="#contact" class="connect-button">Let’s Connect</a>
</section>

  );
}

export default About;
