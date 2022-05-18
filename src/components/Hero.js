import axios from "axios";
import React, { useEffect, useState } from "react";
import { ESTABLISHMENT_URL } from "../utils/api";
import SearchDropdown from "./SearchDropdown";
import { HeroHeading } from "./styles/StyledHeadings";

function Hero() {
  const [hotel, setHotel] = useState([]);
  const [hotelTitle, setHotelTitle] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ESTABLISHMENT_URL);
      const data = response.data.data.map((item) => {
        return item.attributes.title;
      });
      setHotel(response.data.data);
      setHotelTitle(data);
    };
    fetchData().catch(console.error);
  }, []);

  const onChange = (event) => {
    if (event.target.value.length > 1) {
      setSearching(true);
    } else {
      setSearching(false);
    }
    const titleData = hotel.map((x) => {
      return x.attributes.title;
    });
    const filteredList = titleData.filter((item) =>
      item.match(event.target.value)
    );
    console.log(filteredList);
    setSearchItem(filteredList);
  };

  return (
    <div className="hero">
      <div className="hero__img">
        <div className="hero__text">
          <HeroHeading>Discover Bergen</HeroHeading>
          <div className="hero__drop">
            <p>Where to?</p>
            <SearchDropdown
              items={searchItem}
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
