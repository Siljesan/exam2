import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ESTABLISHMENT_URL } from "../utils/api";
import { Heading } from "./styles/StyledHeadings";
import loading from "../Spin-1s-200px.gif";

function Inspo() {
  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ESTABLISHMENT_URL);
      console.log(response);
      setHotel(response.data.data);
    };
    fetchData().catch((error) => setError(error));
  }, []);

  if (error) {
    return (
      <div>
        <Heading as={"h2"}>Something went wrong</Heading>
        <p>{error.message}</p>
      </div>
    );
  }

  if (hotel.length === 0) {
    return (
      <div className="loading">
        <img src={loading} />
      </div>
    );
  }

  return (
    <div>
      <Heading as={"h2"}>Get inspired</Heading>
      <div className="cards">
        {hotel.map((hotel, idx) => {
          return hotel.attributes.featured ? (
            <div className="card" key={idx}>
              <Link to={`/${hotel.id}`}>
                <img
                  className="card__img"
                  src={hotel.attributes.coverimageurl}
                />
                <div className="card__text">
                  <Heading as={"h3"}>{hotel.attributes.title}</Heading>
                  <p>{hotel.attributes.punchline}</p>
                </div>
              </Link>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default Inspo;
