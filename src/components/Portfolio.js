import React from "react";
import "./portfolio.css";
import Layout from "./Layout";

function Portfolio() {
  return (
    <>
      <Layout />
      <section id="portfolio">
        <div>
          <h1 className="project-text-one">My Projects</h1>
        </div>

        <div className="ecommerce">
          <div>Image</div>
          <div>
            {" "}
            <h5>Live Ecommerce Full Stack Project</h5>
            <span>
              A React.js frontend mini project created with core react concepts
              using us showing CRUD functions
            </span>
            <button>View App</button>
          </div>
        </div>

        <div className="comment-Page">
          <div>image</div>
          <div>
            <h5>Comment-Page:</h5>
            <span>
              A React.js frontend mini project created with core react concepts
              using us showing CRUD functions
            </span>
            <button>View App</button>
          </div>
        </div>

        <div className="">
          <div>image</div>
          <div>
            <h5>Shopping List</h5>
            <span>
              A React.js frontend mini project created with core react concepts
              using us showing CRUD functions
            </span>
            <button>View App</button>
          </div>
        </div>

        <div className="comment-Page">
          <div>image</div>
          <div>
            <h5>Login page</h5>
            <span>
              A React.js frontend mini project created with core react concepts
              using us showing CRUD functions
            </span>
            <button>View App</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
