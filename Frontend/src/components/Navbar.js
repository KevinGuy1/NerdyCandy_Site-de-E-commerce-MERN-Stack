import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";

const Navbar = () => {

  return (
    <>
      <nav className='fixed z-10 bg-primary w-full drop-shadow-md shadow-tertiary after:backdrop-blur after:abolute after:h-12 after:w-full after: after:top-0 '>
        <div className='flex w-4/5 justify-between items-end m-auto'>
          <NavLink exact to="/">
            <img className="h-24 object-cover" src={Logo} alt="Logo NerdyCandyz" />
          </NavLink>
          <div className="flex justify-between list-none w-1/3 h-full font-Adamina">
            <NavLink exact to="/">
              <li className="text-2xl pb-2">Accueil</li>
            </NavLink>
            <NavLink exact to="/Boutique">
              <li className="text-2xl">Boutique</li>
            </NavLink>
            <NavLink exact to="/Contact">
              <li className="text-2xl">Contact</li>
            </NavLink>
            <NavLink exact to="/FAQ">
              <li className="text-2xl">F.A.Q</li>
            </NavLink>
          </div>
          <div className="flex justify-end list-none w-32">
            <NavLink exact to="/Profil">
              <li>Profil</li>
            </NavLink>
            <NavLink exact to="/Panier">
              <li>Panier</li>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
