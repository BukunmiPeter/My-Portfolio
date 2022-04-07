import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "./Layout";

function Contact() {
  return (
    <>
      <Layout />
      <section className="contact">
        <div className="contact-text">
          <h1 className="contact-text-two">Get In Touch</h1>
          <h4 className="contact-text-three">
            I'm a click away to join your awesome team. Excellent delivery is my
            goal.
          </h4>
        </div>
        <div className="contact-boxes">
          <div className="con-list-box">
            <ul className="contact-list">
              <li className="con-list">
                <div className="svg-address-div">
                  <FontAwesomeIcon
                    className="svg-address"
                    icon={faLocationDot}
                  />
                </div>
                <span>Abuja Nigeria</span>
              </li>
              <li className="con-list">
                <div className="svg-email-div">
                  <FontAwesomeIcon className="svg-email" icon={faEnvelope} />
                </div>
                <span className="email-text">
                  oluwabukunmiadeyemo99@gmail.com
                </span>
              </li>
              <li className="con-list">
                <div className="svg-phn-div">
                  <FontAwesomeIcon className="svg-phn" icon={faPhone} />
                </div>
                <span className="phn-text">+234-81-3292-7626</span>
              </li>
            </ul>
          </div>
          <div className="contact-input-field">
            <input type="text" placeholder="Full Name" className="input-text" />
            <div className="input-email-phnno">
              {" "}
              <input type="text" placeholder="Email" className="input-text" />
              <input
                type="text"
                placeholder="Phone Number"
                className="input-text"
              />
            </div>

            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Enter your message"
              className="input-text"
            ></textarea>

            <button className="submit">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
