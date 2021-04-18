import React from "react";
import ic_wolox_footer from "../assets/Ic_Wolox_Footer.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="content">
          <div className="row">
            <div className="grid-12 center">
              <div>
                <h2>
                  Gracias por <span>completar el ejercicio</span>
                </h2>
                <span>Te invitamos a ver más información</span>
              </div>
              <br />
              <br />
              <div>
                <a
                  href="https://www.wolox.com.ar/"
                  target="_blank"
                  className="linkButton fullColor"
                >
                  Conocer más
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="grid-12 center">
              <img src={ic_wolox_footer} width="70" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
