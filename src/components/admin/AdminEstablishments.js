import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { useToggle } from "../../hooks/useToggle";
import { ESTABLISHMENT_PATH } from "../../utils/api";
import EstablishmentForm from "../forms/EstablishmentForm";
import { Heading } from "../styles/StyledHeadings";
import MediaUpload from "./MediaUpload";

function AdminEstablishments() {
  const [establishments, setEstablishments] = useState([]);
  const [auth, setAuth] = useContext(AuthContext);
  const [toggle, setToggle] = useToggle();
  const [error, setError] = useState();

  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get(ESTABLISHMENT_PATH);
      console.log(response.data.data);
      setEstablishments(response.data.data);
    };
    fetchData().catch((error) => setError(error));
  }, [toggle, auth]);

  const addEstablishment = async (formData) => {
    const options = {
      data: {
        title: formData.title,
        punchline: formData.punchline,
        description: formData.description,
        coverimageurl: formData.coverimageurl,
      },
    };
    const responseData = await http.post(ESTABLISHMENT_PATH, options);
    console.log(responseData);
    setToggle();
  };

  const addAnother = (e) => {
    e.preventDefault();
    setToggle();
  };

  if (error) {
    return (
      <div>
        <Heading as={"h2"}>Error fetching data</Heading>
        <p>The server responded with:</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (establishments.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section>
        <Heading as={"h2"}>Establishments</Heading>
        <Table bordered className="table">
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
                    <img src={est.attributes.coverimageurl} />
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
            <EstablishmentForm addEstablishment={addEstablishment} />
          )}
          <MediaUpload />
        </div>
      </section>
    </>
  );
}

export default AdminEstablishments;
