import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ESTABLISHMENT_URL } from "../utils/api";
import { Heading } from "./styles/StyledHeadings";

function HotelCards() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ESTABLISHMENT_URL);
      console.log(response);
      setHotel(response.data.data);
    };
    fetchData().catch(console.error);
  }, []);

  if (hotel.length < 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards">
      {hotel.map((hotel, idx) => {
        return (
          <Link to={`/${hotel.id}`}>
            <div className="card" key={idx}>
              <img className="card__img" src={hotel.attributes.coverimageurl} />
              <div className="card__text">
                <Heading as={"h3"}>{hotel.attributes.title}</Heading>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HotelCards;
