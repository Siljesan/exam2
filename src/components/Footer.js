import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import Menu from "./nav/Menu";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Menu />
      <Link to="/" className="footer__logo">
        HOLIDAZE
      </Link>
      <div className="footer__icons">
        <FontAwesomeIcon
          icon={brands("twitter")}
          className="footer__icons--item"
        />
        <FontAwesomeIcon
          icon={brands("facebook")}
          className="footer__icons--item"
        />
        <FontAwesomeIcon
          icon={brands("instagram")}
          className="footer__icons--item"
        />
      </div>
    </footer>
  );
}

export default Footer;
