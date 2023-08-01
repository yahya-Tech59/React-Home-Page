import React from "react";
import "./AppSection.css";
import { Appstore, playstoreicon } from "../../images/images";

const AppSection = () => {
  return (
    <div className="wrapper">
      <section className="app-section">
        <h2>Get our App</h2>
        <p>You can use our App for better experience on smartphones</p>

        <div className="app-buttons">
          <div className="app-btn">
            <img src={Appstore} alt="" />
            <span>App Store</span>
          </div>

          <div className="app-btn">
            <img src={playstoreicon} alt="" />
            <span>Google Play</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppSection;
