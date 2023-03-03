import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import "../NavBar/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">POKEHENRY</h1>
      <Search />
      <ul className="navbar__menu">
        <li>
          <NavLink to="/" className="navbar__button">
            A
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create" className="navbar__button"
          >
            Create Pokemon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
