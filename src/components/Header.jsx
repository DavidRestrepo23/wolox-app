import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_full_color.svg";
import iconPokebola from "../assets/pokebola.png";

const Header = (props) => {
  return (
    <>
      <header className="container">
        <div>
          <img src={logo} width="120" alt="" />
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <a href="#benefits">Beneficios</a>
            </li>
            {props.auth ? (
              <>
                <li>
                  <Link to="/pokemons">
                    {" "}
                    <img src={iconPokebola} width="13" alt="" /> Pokemons
                  </Link>
                </li>
                <li>
                  <a className="linkButton" onClick={props.handleClickLogout}>
                    <span>Cerrar Sesión</span>
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link className="linkButton" to="/login">
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
