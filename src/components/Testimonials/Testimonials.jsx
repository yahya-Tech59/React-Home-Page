import React from "react";
import "./Testimonials";
import "./Testimonials.css";
import { womanimages, manimage } from "../../images/images";

const Testimonials = () => {
  return (
    <div className="test">
      <section className="testimonials-section">
        <div className="left">
          <div className="testimonial-card">
            <div className="content">
              This is a great course. It helped me a lot. Thank you :)
            </div>

            <div className="info">
              <h4>Jane Cooper</h4>
              <p className="company">Developer, Sony</p>
            </div>

            <img src={womanimages} alt="" />
          </div>

          <div className="testimonial-card">
            <div className="content">Amazing Work! Well done!</div>

            <div className="info">
              <h4>Jacob Jones</h4>
              <p className="company">Designer, Facebook</p>
            </div>

            <img src={manimage} alt="" />
          </div>
        </div>

        <div className="right">
          <h2>What our students say?</h2>

          <div className="features">
            <p>
              All students get access to all the videos and also the source code
              of the projects.
            </p>

            <p>
              You will also have access to a private Discord channel where you
              can discuss your doubts.
            </p>
          </div>

          <a href="btn" className="btn light desktop-btn">
            Learn More
          </a>
        </div>

        {/* <a href="#" className="btn light mobile-btn">
          Learn More
        </a> */}
      </section>
    </div>
  );
};

export default Testimonials;
