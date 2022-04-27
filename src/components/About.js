import React from "react";
import "./about.css";
import Layout from "./Layout";
import mypic from "./images/mypic.png";

function About() {
  return (
    <>
      <Layout />
      <section id="About">
        <div className="about-boxes">
          <div className="about-part-one">
            <img className="mypic" src={mypic} alt="image" />
          </div>
          <div className="about-part-two">
            <h1 className="about-text-two">About Me</h1>
            <article className="aboutme-article">
              Logical and results-driven full stack web developer with hands on
              experience in design, development, analysis, testing and
              deployment of projects. Skilled in the use of React.js, Node.js
              and Python. Dedicated to building and optimizing user-focused
              websites and applications. Adept at handling projects with the
              highest degree of professionalism, meeting deadlines and creating
              platforms to propel competitive advantage and revenue growth.
            </article>
            <div className="btn-div">
              <button className="downloadcv">Download CV</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
