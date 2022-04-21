import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Nav() {
  return (
    <div className="nav">
      <Link className="nav__logo" to="/">
        Holidaze
      </Link>
      <Menu />
    </div>
  );
}

export default Nav;
