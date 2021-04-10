import React from "react";
import logo from '../assets/logo_full_color.svg'

const Header = () => {
  return (
    <>
      <header className="container">
        <div><img src={logo} width="120" alt=""/></div>
        <div>
          <ul>
            <li>Inicio</li>
            <li>Beneficios</li>
            <li><a className="linkButton" href=""><span>Login</span></a></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
