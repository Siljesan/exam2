import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { useToggle } from "../../hooks/useToggle";
import { ENQUIRY_PATH, POPULATE } from "../../utils/api";
import { Heading } from "../styles/StyledHeadings";
import loading from "../../Spin-1s-200px.gif";

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [auth] = useContext(AuthContext);
  const [toggle, setToggle] = useToggle();
  const [error, setError] = useState();

  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get(ENQUIRY_PATH + POPULATE);
      console.log(response.data.data);
      setEnquiries(response.data.data);
    };
    fetchData().catch((error) => setError(error));
  }, [toggle, auth]);

  if (error) {
    return (
      <div>
        <Heading as={"h2"}>Something went wrong</Heading>
        <p>{error.message}</p>
      </div>
    );
  }

  if (enquiries.length === 0) {
    return (
      <div className="loading">
        <img src={loading} alt="loading" />
      </div>
    );
  }

  return (
    <section>
      <div className="heading">
        <Heading as={"h3"}>Enquiries</Heading>
      </div>
      {enquiries.map((enq, idx) => {
        const deleteBtn = async () => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this enquiry?"
          );
          if (confirmDelete) {
            const responseData = await http.delete(ENQUIRY_PATH + enq.id);
            console.log(responseData);
            setToggle();
          }
        };
        return (
          <div key={idx} className="cont">
            <div>
              <Heading as={"h4"}>{enq.attributes.email}</Heading>
              <p>{enq.attributes.establishment.data.attributes.title}</p>
              <p>{enq.attributes.date}</p>
              <p>{enq.attributes.information}</p>
            </div>
            <div className="cont__icon">
              <Link
                className="cont__icon--item"
                to="#"
                onClick={(e) => {
                  window.location.href = `mailto:${enq.attributes.email}`;
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

export default AdminEnquiries;
