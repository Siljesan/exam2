import axios from "axios";
import React, { useEffect, useState } from "react";
import { ESTABLISHMENT_URL } from "../utils/api";
import { Heading } from "./styles/StyledHeadings";

function Inspo() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ESTABLISHMENT_URL);
      console.log(response);
      setHotel(response.data.data);
    };
    fetchData().catch(console.error);
  });
  return (
    <div className="inspo">
      <Heading as={"h2"}>Get inspired</Heading>
      <div className="inspoCards">
        {hotel.map((hotel, idx) => {
          return (
            <div className="card" key={idx}>
              <img className="card__img" src={hotel.attributes.coverimageurl} />
              <div className="card__text">
                <Heading as={"h3"}>{hotel.attributes.title}</Heading>
                <p>{hotel.attributes.punchline}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Inspo;
