import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { useToggle } from "../../hooks/useToggle";
import { ESTABLISHMENT_PATH, POPULATE } from "../../utils/api";
import EstablishmentForm from "../forms/EstablishmentForm";
import { Heading } from "../styles/StyledHeadings";
import loading from "../../Spin-1s-200px.gif";

function AdminEstablishments() {
  const [establishments, setEstablishments] = useState([]);
  const [auth] = useContext(AuthContext);
  const [toggle, setToggle] = useToggle();
  const [error, setError] = useState();

  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get(ESTABLISHMENT_PATH + POPULATE);
      console.log(response.data.data);
      setEstablishments(response.data.data);
    };
    fetchData().catch((error) => setError(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle, auth]);

  const onEstablishmentAdded = () => {
    setToggle();
  };

  const addAnother = (e) => {
    e.preventDefault();
    setToggle();
  };

  if (error) {
    return (
      <div>
        <Heading as={"h2"}>Something went wrong</Heading>
        <p>{error.message}</p>
      </div>
    );
  }

  if (establishments.length === 0) {
    return (
      <div className="loading">
        <img src={loading} alt="loading" />
      </div>
    );
  }

  return (
    <>
      <section>
        <Heading as={"h2"}>Establishments</Heading>
        <Table responsive bordered className="table">
          <thead className="table__h">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Punchline</th>
              <th>Description</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {establishments.map((est, idx) => {
              const deleteBtn = async () => {
                const confirmDelete = window.confirm(
                  "Are you sure you want to delete this establishment?"
                );
                if (confirmDelete) {
                  const responseData = await http.delete(
                    ESTABLISHMENT_PATH + est.id
                  );
                  console.log(responseData);
                  setToggle();
                }
              };
              return (
                <tr key={idx}>
                  <td>{est.id}</td>
                  <td>{est.attributes.title}</td>
                  <td>{est.attributes.punchline}</td>
                  <td>{est.attributes.description}</td>
                  <td>
                    <img
                      src={est.attributes.coverimage.data.attributes.url}
                      alt={`${est.attributes.title} in bergen`}
                    />
                  </td>
                  <td>
                    <button onClick={deleteBtn}>
                      <FontAwesomeIcon icon={solid("trash")} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>
      <section>
        <Heading as={"h2"}>Add establishment</Heading>
        <div className="flex">
          {toggle ? (
            <div>
              <p>Establishment is added</p>
              <button onClick={addAnother}>Add another</button>
            </div>
          ) : (
            <>
              <EstablishmentForm onEstablishmentAdded={onEstablishmentAdded} />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default AdminEstablishments;
