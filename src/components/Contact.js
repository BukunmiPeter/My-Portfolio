import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Layout />
      <section className="contact">
        <div className="contact-text">
          <p className="contact-text-two">Get In Touch</p>
          <p className="contact-text-three">
            I'm a click away to join your awesome team. Excellent delivery is my
            goal.
          </p>
        </div>
        <div className="contact-boxes">
          <div className="con-list-box">
            <div className="address1">
              <div className="svg-address-div">
                <FontAwesomeIcon className="svg-address" icon={faLocationDot} />
              </div>
              <div>
                <span>Abuja Nigeria</span>
              </div>
            </div>

            <div className="address1">
              <div className="svg-email-div">
                <FontAwesomeIcon className="svg-email" icon={faEnvelope} />
              </div>
              <div>
                <span className="email-text">
                  oluwabukunmiadeyemo99@gmail.com
                </span>
              </div>
            </div>

            <div className="address1">
              <div className="svg-phn-div">
                <FontAwesomeIcon className="svg-phn" icon={faPhone} />
              </div>
              <div>
                <span className="phn-text">+234-81-3292-7626</span>
              </div>
            </div>
          </div>
          <div className="contact-input-field">
            <input type="text" placeholder="Full Name" className="input-text" />
            <div className="input-email-phnno">
              {" "}
              <input type="text" placeholder="Email" className="input-text2" />
              <input
                type="text"
                placeholder="Phone Number"
                className="input-text2"
              />
            </div>

            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Enter your message"
              className="input-text3"
            ></textarea>

            <button className="submit">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
