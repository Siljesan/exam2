import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Menu() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  // Let's user logout by removing the jwt token from AuthContext
  // and navigates back to homepage
  const logout = () => {
    setAuth(null);
    navigate("/");
  };

  return (
    <>
      {auth ? (
        <>
          <ul className="nav__list">
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inbox
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/establishment"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Establishment
              </NavLink>
            </li>
            <li>
              <button onClick={logout} className="nav__list--login">
                Log out
              </button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className="nav__list">
            <li>
              <NavLink
                to="/hotels"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                All hotels
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
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
      )}
    </>
  );
}

export default Menu;
