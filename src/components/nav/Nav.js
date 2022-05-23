import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Menu from "./Menu";

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <div className="nav">
      {auth ? (
        <div className="nav__logo">Holidaze</div>
      ) : (
        <Link className="nav__logo" to="/">
          Holidaze
        </Link>
      )}
      <Menu />
    </div>
  );
}

export default Nav;
