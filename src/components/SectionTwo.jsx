import React from "react";
import twLogo from "../assets/tw-logo.png";
import ic_hour from "../assets/Ic_Hour.svg";
import ic_laptop from "../assets/Ic_laptop.svg";
import ic_workshops from "../assets/Ic_Workshops.svg";
import ic_drinksnacks from "../assets/Ic_DrinkSnacks.svg";
import ic_homeoffice from "../assets/Ic_HomeOffice.svg";
import ic_brain from "../assets/Ic_brain.svg";

const SectionTwo = () => {
  return (
    <>
      <section className="section2">
        <div className="content-fluid">
          <div className="row align-items-center">
            <div className="grid-6 bg-woloxers">
              <h2 className="center">
                <span className="txt-followers">350 + </span>
                <span className="txt-woloxers">Woloxers</span>
              </h2>
              <div className="center">
                <div>
                  <div className="tw-info">
                    <div>
                      <img src={twLogo} width="30" alt="" />
                    </div>
                    <div>
                      <a href="#" className="tw-wolox">
                        @Wolox
                      </a>
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <a href="#" className="linkButton txt-white">
                    Siguenos
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-6 center">
              <p className="txt-works">
                Trabajamos para <br /> <span className="txt1">convertir</span>{" "}
                <span className="txt2">ideas</span> en <br />
                productos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="content">
          <div className="row">
            <div className="grid-12 center">
              <h2> Entre los beneficios que ofrecemos se encuentran ;)</h2>
            </div>
            <div className="grid-2 item-box center">
              <div>
                <img src={ic_hour} alt="" />
              </div>
              <div>
                <p>Flexibilidad Horario</p>
              </div>
            </div>
            <div className="grid-2 item-box center">
              <div>
                <img src={ic_homeoffice} alt="" />
              </div>
              <div>
                <p>Home Office</p>
              </div>
            </div>
            <div className="grid-2 item-box center">
              <div>
                <img src={ic_workshops} alt="" />
              </div>
              <div>
                <p>Capacitaciones y workshops</p>
              </div>
            </div>
            <div className="grid-2 item-box center">
              <div>
                <img src={ic_drinksnacks} alt="" />
              </div>
              <div>
                <p>Snacks, frutas y bebidas gratis</p>
              </div>
            </div>
            <div className="grid-2 item-box center">
              {" "}
              <div>
                <img src={ic_laptop} alt="" />
              </div>
              <div>
                <p>Semana Remota</p>
              </div>
            </div>
            <div className="grid-2 item-box center">
              {" "}
              <div>
                <img src={ic_brain} alt="" />
              </div>
              <div>
                <p>Trabajar en últimas tecnologías</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
