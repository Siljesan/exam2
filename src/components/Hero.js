import axios from "axios";
import React, { useEffect, useState } from "react";
import { ESTABLISHMENT_URL } from "../utils/api";
import SearchDropdown from "./SearchDropdown";
import { HeroHeading } from "./styles/StyledHeadings";

function Hero({ home }) {
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

  // runs when search input is changed, and sends filtered data to SearchDropdown
  const onChange = (event) => {
    if (event.target.value.length > 1) {
      setSearching(true);
      setInputValue(event.target.value);
    } else {
      setSearching(false);
    }
    //filters through the titles from the data to return what mathces the value of the input
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
              home={home}
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
