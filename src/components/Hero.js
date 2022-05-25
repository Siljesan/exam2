import axios from "axios";
import React, { useEffect, useState } from "react";
import { ESTABLISHMENT_URL } from "../utils/api";
import SearchDropdown from "./SearchDropdown";
import { HeroHeading } from "./styles/StyledHeadings";

function Hero() {
  const [hotel, setHotel] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [searching, setSearching] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ESTABLISHMENT_URL);
      setHotel(response.data.data);
    };
    fetchData().catch(console.error);
  }, []);

  const onChange = (event) => {
    if (event.target.value.length > 1) {
      setSearching(true);
      setInputValue(event.target.value);
    } else {
      setSearching(false);
    }
    const filteredData = hotel.filter((item) => {
      return Object.values(item.attributes.title)
        .join("")
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });
    setSearchItems(filteredData);
  };

  return (
    <div className="hero">
      <div className="hero__img">
        <div className="hero__text">
          <HeroHeading>Discover Bergen</HeroHeading>
          <div className="hero__drop">
            <SearchDropdown
              items={searchItems}
              onChange={onChange}
              searching={searching}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
