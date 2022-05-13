import axios from "axios";
import React, { useEffect, useState } from "react";
import { ESTABLISHMENT_URL } from "../utils/api";
import SearchDropdown from "./SearchDropdown";
import { HeroHeading } from "./styles/StyledHeadings";

function Hero() {
  const [hotel, setHotel] = useState([]);
  const [hotelTitle, setHotelTitle] = useState([]);
  const [searchItem, setSearchItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ESTABLISHMENT_URL);
      setHotel(response.data.data);
    };
    fetchData().catch(console.error);
  }, []);

  const onChange = (event) => {
    console.log(hotel);
    hotel.map((x) => {
      setHotelTitle(x.attributes.title);
    });
    console.log(hotelTitle);
    const filteredList = hotelTitle.filter((item) =>
      item.match(event.target.value)
    );
    setSearchItem(filteredList);
  };

  return (
    <div className="hero">
      <div className="hero__img">
        <div className="hero__text">
          <HeroHeading>Discover Bergen</HeroHeading>
          <div className="hero__drop">
            <p>Where to?</p>
            <SearchDropdown items={searchItem} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
