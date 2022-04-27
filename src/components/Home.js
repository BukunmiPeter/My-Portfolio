import React from "react";
import "./home.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Layout />
      <section id="Home">
        <article>
          <p className="read">Hi, my name is</p>
          <p className="name">Adeyemo Oluwabukunmi Peter</p>
          <p className="text3">Full-Stack Web Developer</p>
        </article>

        <Link to="/Contact">
          <button className="hire-me">Hire me</button>
        </Link>
        <button></button>
      </section>
    </>
  );
}

export default Home;

/* <button
          className="hire-me"
          onClick={() =>
            (window.location = "mailto:oluwabukunmiadeyemo99@gmail.com")
          }
        >
          Hire me
        </button> */
