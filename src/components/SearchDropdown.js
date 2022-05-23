import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchDropdown({ items, onChange, searching }) {
  return (
    <>
      <input
        type="text"
        id="hotelSearch"
        className="hero__search"
        onChange={onChange}
      />
      {searching && (
        <ListGroup className="searchDropdown">
          {items.map((item, idx) => {
            return (
              <Link to={`/${item.id}`} key={idx}>
                <ListGroup.Item action>{item.attributes.title}</ListGroup.Item>
              </Link>
            );
          })}
        </ListGroup>
      )}
    </>
  );
}

export default SearchDropdown;
