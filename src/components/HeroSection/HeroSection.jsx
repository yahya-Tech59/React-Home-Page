import React from "react";
import "./HeroSection.css";
import { heroimage, staricon } from "../../images/images";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left">
        <h1>
          Learn the art of <br />
          Game Dev
        </h1>

        <p>
          This is a comprehensive course on Game Development. You will learn
          everything from generating an idea to publishing your games to
          different platforms.
        </p>

        <a href="#" className="btn light enrol-icon">
          Enrol Now
        </a>
      </div>

      <div className="right">
        <img src={heroimage} alt="" />
      </div>

      <div className="achievement-cards">
        <div className="achievement-card students-enrolled">
          <div className="content">
            <div>
              <h3>32K</h3>
            </div>
            <p>Students Enrolled</p>
          </div>

          <div className="bg"></div>
        </div>

        <div className="achievement-card overall-rating">
          <div className="content">
            <div>
              {/* <img src={staricon} alt="" /> */}
              <h3>4.7</h3>
            </div>
            <p>Overall Rating</p>
          </div>

          <div className="bg"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
