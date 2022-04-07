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
            My Full Stack Web Develpment services include:
          </h4>
        </div>
        <div className="fullstack">
          <div className="frontend">
            <div className="frontend-title-logo">
              <img src={reactjs} alt="" className="logoreact" />
              <h4 className="frontend-title">Frontend</h4>
            </div>
            <article className="frontend-article">
              fdhbdvdibif egkndfdf fgndjndf dfjndfjkndfn fjfgifjf fjfnfnifk
              fkfnkmfmf fkfmkmfkmf fkmkmfkfmmf fkmfkmffk dfkjndnfojd dkfndknfkno
              dfndldndk ytnfghfh dfhfndtgdh dffncdhdfhfd dfhyugh dfhfutjf
              dryhgjnh dffhyrhd rutj hdfjnhd fjrjtnhfrfg eryhhrdeht rgfsdrgrhrf
              dfgetgerhgerh rdherdfehhfnd shrdhfrfdsfs.
            </article>
          </div>
          <div className="backend">
            <div className="backend-title-logo">
              <img src={nodejs} alt="" className="logonode" />{" "}
              <h4 className="backend-title">Backend</h4>
            </div>
            <article className="backend-article">
              fdhbdvdibif egkndfdf fgndjndf dfjndfjkndfn fjfgifjf fjfnfnifk
              fkfnkmfmf fkfmkmfkmf fkmkmfkfmmf fkmfkmffk dfkjndnfojd dkfndknfkno
              dfndldndk ytnfghfh dfhfndtgdh dffncdhdfhfd dfhyugh dfhfutjf
              dryhgjnh dffhyrhd rutj hdfjnhd fjrjtnhfrfg eryhhrdeht rgfsdrgrhrf
              dfgetgerhgerh rdherdfehhfnd shrdhfrfdsfs.
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
