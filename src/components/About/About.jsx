import React from "react";
import "./About.css";
import profileImg from "../../assets/ceo.webp";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profileImg} width={170} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, animi qui quod et commodi cum vero consectetur, Est.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              magnam. Eligendi voluptatum magnam totam. Nihil omnis nisi totam
              dolore blanditiis!
            </p>
          </div>
        </div>
      </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>NEXT JS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>30+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
    </div>
  );
};

export default About;
