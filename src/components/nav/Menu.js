import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Menu() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    setAuth(null);
    navigate("/");
  };

  return (
    <>
      <ul className="nav__list">
        {auth ? (
          <li>
            <button onClick={logout} className="nav__list--login">
              Log out
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to="/hotels"
                className={(isActive) => (isActive ? "" : "")}
              >
                All hotels
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(isActive) => (isActive ? "" : "")}
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <Link className="nav__list--login" to="/login">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default Menu;
