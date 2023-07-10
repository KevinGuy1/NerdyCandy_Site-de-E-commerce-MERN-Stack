import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";

const Navbar = () => {

  return (
    <>
      <div className='header'>
        <div className='header__container'>
          <NavLink exact to="/">
            <img src={Logo} alt="Logo NerdyCandyz" />
          </NavLink>
          <nav>
            <div>
              <NavLink exact to="/">
                <li>Accueil</li>
              </NavLink>
              <NavLink exact to="/Boutique">
                <li>Boutique</li>
              </NavLink>
              <NavLink exact to="/Contact">
                <li>Contact</li>
              </NavLink>
              <NavLink exact to="/FAQ">
                <li>F.A.Q</li>
              </NavLink>
            </div>
            <div>
              <NavLink exact to="/Profil">
                <li>Profil</li>
              </NavLink>
              <NavLink exact to="/Panier">
                <li>Panier</li>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
