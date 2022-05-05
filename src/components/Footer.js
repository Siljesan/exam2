import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import Menu from "./nav/Menu";

function Footer() {
  return (
    <div className="footer">
      <Menu />
      <p className="footer__logo">Holidaze</p>
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
    </div>
  );
}

export default Footer;
