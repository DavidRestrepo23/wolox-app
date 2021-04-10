import React from "react";
import headerImage from "../assets/Img Hero/Ic_ilustra_Hero.png";

const SectionOne = () => {
  return (
    <>
      <section className="section1">
        <div className="content">
          <div className="row align-items-center">
            <div className="grid-6">
              <p>
                Bienvenido a tu <br /> <strong>Entrevista Técnica</strong> en
                <br /> <span>Wolox</span>
              </p>
            </div>
            <div className="grid-6 center">
              <img src={headerImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
