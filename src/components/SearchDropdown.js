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
        <ListGroup>
          {items.map((item, idx) => {
            return (
              <ListGroup.Item className="searchDropdown" action key={idx}>
                <Link to={`/${item.id}`}>{item}</Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </>
  );
}

export default SearchDropdown;
