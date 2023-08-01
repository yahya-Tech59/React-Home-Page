import React from "react";
import "./Courses.css";
import { gamedesign, unitygamedesign, clockIcon } from "../../images/images";

const courses = () => {
  return (
    <section>
      <div className="courses-section">
        <h2 className="light">Our Courses</h2>

        <div className="course-cards">
          <div className="course-card">
            <img className="games" src={gamedesign} />

            <div className="info">
              <h3>Game Design Essentials</h3>
              <div className="duration">
                <img src={clockIcon} alt="" />8 Hrs
              </div>
            </div>
          </div>

          <div className="course-card">
            <img className="games" src={unitygamedesign} />

            <div className="info">
              <h3>Unity Game Engine </h3>
              <div className="duration">
                <img src={clockIcon} alt="" />
                15 Hrs
              </div>
            </div>
          </div>
        </div>

        <a href="btn" className="btn light">
          All Courses
        </a>
      </div>
    </section>
  );
};

export default courses;
