import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <ul className="nav__list">
        <li>
          <NavLink
            to="/hotels"
            className={(isActive) => (isActive ? "active" : "")}
          >
            All hotels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(isActive) => (isActive ? "active" : "")}
          >
            Contact us
          </NavLink>
        </li>
        <li>
          <Link className="nav__list--login" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Menu;
