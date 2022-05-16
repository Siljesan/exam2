import React from "react";
import { ListGroup } from "react-bootstrap";

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
              <ListGroup.Item action href="#link1" key={idx}>
                {item}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </>
  );
}

export default SearchDropdown;
