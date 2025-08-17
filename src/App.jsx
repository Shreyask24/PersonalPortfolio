import React from "react";

import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Tech,
  TechInsights,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <TechInsights />
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}

        <div className="relative z-0 ">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
