import React from "react";
import "./App.css";

// import {} from '../src/images/images';
import {
  Header,
  HeroSection,
  Testimonials,
  Courses,
  AppSection,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #6f7dfb 0%, #26308c 100%)",
        }}
      >
        <Header />
        <HeroSection />
      </div>
      <Testimonials />
      <Courses />
      <AppSection />
      <Footer />
    </>
  );
};

export default App;
