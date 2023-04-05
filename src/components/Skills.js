import React from "react";
import Fade from "react-reveal/Fade";
import "../scss/Skills.css";
// import svg_1 from "./webdesign.svg";
const Skills = () => {
  return (
    <div className="Skills">
      <h1>What can I do?</h1>
      <div className="container">
        <div className="skills One">
          <Fade top>
            <img src="/webdev.svg" alt="web development" />
            <div className="text-container">
              <h3>Web Development</h3>
              <p>
                built for an optimal user experience that achieves your business
                goals.
              </p>
            </div>
          </Fade>
        </div>
        <div className="skills Two">
          <Fade bottom>
            <img src="/responsivewebsite.svg" alt="web development" />
            <div className="text-container">
              <h3>Responsive Website</h3>
              <p>
                Creates dynamic changes to the appearance of a website,
                depending on the screen size of the device.
              </p>
            </div>
          </Fade>
        </div>
        <div className="skills Three">
          <Fade top>
            <img src="/webdesign.svg" alt="web development" />
            <div className="text-container">
              <h3>Web Design</h3>
              <p>
                Creates dynamic changes to the appearance of a website,
                depending on the screen size of the device.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <img src="/neighborhood.svg" alt="neighborhood" className="svg_icon" />
    </div>
  );
};

export default Skills;
