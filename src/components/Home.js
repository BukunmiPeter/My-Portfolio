import React from "react";
import "./home.css";
import Layout from "./Layout";

function Home() {
  return (
    <>
      <Layout />
      <section id="Home">
        <article>
          <h5 className="">Hi, my name is</h5>
          <h1 className="name">Adeyemo Oluwabukunmi Peter</h1>
          <br />
          <h5 className="text3">MERN Full-Stack Web Developer</h5>A professional
          web developer on both the frontend and backend.
        </article>
        <br />

        <button className="hire-me">Hire Me</button>
      </section>
    </>
  );
}

export default Home;
