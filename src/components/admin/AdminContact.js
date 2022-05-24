import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { useToggle } from "../../hooks/useToggle";
import { CONTACT_PATH } from "../../utils/api";
import { Heading } from "../styles/StyledHeadings";
import loading from "../../Spin-1s-200px.gif";

function AdminContact() {
  const [contact, setContact] = useState([]);
  const [auth] = useContext(AuthContext);
  const [toggle, setToggle] = useToggle();
  const [error, setError] = useState();

  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get(CONTACT_PATH);
      console.log(response.data.data);
      setContact(response.data.data);
    };
    fetchData().catch((error) => setError(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle, auth]);

  if (error) {
    return (
      <div>
        <Heading as={"h2"}>Something went wrong</Heading>
        <p>{error.message}</p>
      </div>
    );
  }

  if (contact.length === 0) {
    return (
      <div className="loading">
        <img src={loading} alt="loading" />
      </div>
    );
  }

  return (
    <section>
      <div className="heading">
        <Heading as={"h3"}>Contact messages</Heading>
      </div>
      {contact.map((con, idx) => {
        const deleteBtn = async () => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this enquiry?"
          );
          if (confirmDelete) {
            const responseData = await http.delete(CONTACT_PATH + con.id);
            console.log(responseData);
            setToggle();
          }
        };
        return (
          <div className="cont" key={idx}>
            <div>
              <Heading as={"h4"}>{con.attributes.subject}</Heading>
              <p>{con.attributes.email}</p>
              <p>{con.attributes.message}</p>
            </div>
            <div className="cont__icon">
              <Link
                className="cont__icon--item"
                to="#"
                onClick={(e) => {
                  window.location.href = `mailto:${con.attributes.email}`;
                  e.preventDefault();
                }}
              >
                <FontAwesomeIcon icon={solid("reply")} />
              </Link>
              <button className="cont__icon--item" onClick={deleteBtn}>
                <FontAwesomeIcon icon={solid("trash")} />
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AdminContact;
