import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <nav>
          <div className="logo">GD.</div>

          <ul>
            <li>
              <a href="about">About</a>
            </li>

            <li>
              <a href="service">Services</a>
            </li>

            <li>
              <a href="our work">Our Work</a>
            </li>

            <li>
              <a href="btn" className="btn dark">
                Enrol Now
              </a>
            </li>
          </ul>
        </nav>
        {/* <HeroSection /> */}
      </div>
    </header>
  );
};

export default Header;
