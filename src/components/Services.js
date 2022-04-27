import React from "react";
import Layout from "./Layout.js";
import "./services.css";

import nodejs from "./images/nodejs.png";
import reactjs from "./images/reactjs.png";

function Services() {
  return (
    <>
      <Layout />
      <section id="services">
        <div className="services-front-text">
          <h1 className="text-one">My Services</h1>
          <h4 className="text-two">
            My Full Stack Web Development services include:
          </h4>
        </div>
        <div className="fullstack">
          <div className="frontend">
            <div className="frontend-title-logo">
              <img src={reactjs} alt="" className="logoreact" />
              <h4 className="frontend-title">Frontend</h4>
            </div>
            <article className="frontend-article">
              <p>
                - Developing and maintaining user-facing features using
                React.js.
              </p>
              <p>
                - Building resuable components and front-end libraries for
                future use.
              </p>

              <p>- Translating designs and wireframes into high quality code</p>

              <p>
                - Optimizing applications for maximum perfomance across a vast
                of web-capable devices and browsers.
              </p>
            </article>
          </div>
          <div className="backend">
            <div className="backend-title-logo">
              <img src={nodejs} alt="" className="logonode" />{" "}
              <h4 className="backend-title">Backend</h4>
            </div>
            <article className="backend-article">
              <p>
                - Integrating user-facing elements developed by frontend
                developers with server side logic.
              </p>
              <p>- Building resuable code and libraries for future use</p>
              <p>- Optimizing applications for maximum speed and scalability</p>
              <p>- Implementing of security and data protection</p>
              <p>- Designing and implementing data storage solutions</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
