import React from "react";
import bergen from "../bergen.jpg";
import { HeroHeading } from "./styles/StyledHeadings";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__img">
        <div className="hero__text">
          <HeroHeading>Discover Bergen</HeroHeading>
          <div className="hero__drop">
            <p>Where to?</p>
            <input type="search" id="hotelSearch" className="hero__search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
