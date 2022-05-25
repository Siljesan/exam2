import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Menu from "./Menu";

function Nav() {
  const [auth] = useContext(AuthContext);

  return (
    <div className="nav">
      {auth ? (
        <div className="nav__logo">HOLIDAZE</div>
      ) : (
        <Link className="nav__logo" to="/">
          HOLIDAZE
        </Link>
      )}
      <Menu />
    </div>
  );
}

export default Nav;
