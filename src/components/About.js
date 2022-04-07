import React from "react";
import "./about.css";
import Layout from "./Layout";

function About() {
  return (
    <>
      <Layout />
      <section id="About">
        <div className="about-boxes">
          <div className="about-part-one">Image</div>
          <div className="about-part-two">
            <h1 className="about-text-two">About Me</h1>
            <article className="aboutme-article">
              I’m Adeyemo Oluwabukunmi Peter, a professional and talented Full
              Stack Developer adept in both frontend and backend skills. I am
              passionate about leveraging my diverse backgrounds to decipher
              challenging problems and create delightful experiences. I honed my
              skills at web development, Being a diligent, hardworking and
              result oriented lady, I always work towards achieving best result
              on each project I lay my hands on.
            </article>
            <button className="downloadcv">Download CV</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
