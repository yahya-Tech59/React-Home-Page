import React from "react";
import "./Footer.css";
import { facebookicon, instagramicon } from "../../images/images";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="links-container">
          <div className="links">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="aboutUs">About Us</a>
              </li>

              <li>
                <a href="contactUs">Contact Us</a>
              </li>

              <li>
                <a href="privacyPolicy">Privacy Policy</a>
              </li>

              <li>
                <a href="terms & conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div class="links">
            <h3>Course</h3>

            <ul>
              <li>
                <a href="log in">Log In</a>
              </li>

              <li>
                <a href="download">Download</a>
              </li>

              <li>
                <a href="all courses">All Courses</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>

            <ul>
              <li>contact@gmail.com</li>
            </ul>

            <div className="social">
              <a href="#">
                <img src={facebookicon} alt="" />
              </a>

              <a href="#">
                <img src={instagramicon} alt="" />
              </a>
            </div>

            <form action="form">
              <input type="text" placeholder="Email Address" />
              <button className="submit-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <p className="copyright">
          This website is developed by GTCoding © 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
