import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { ESTABLISHMENT_PATH } from "../../utils/api";
import EstablishmentForm from "../forms/EstablishmentForm";
import { Heading } from "../styles/StyledHeadings";

function AdminEstablishments() {
  const [establishments, setEstablishments] = useState([]);
  const [auth, setAuth] = useContext(AuthContext);

  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get(ESTABLISHMENT_PATH);
      console.log(response.data.data);
      setEstablishments(response.data.data);
    };
    fetchData().catch(console.error);
  }, [auth]);

  const addEstablishment = async (formData) => {
    const options = {
      data: {
        title: formData.title,
        punchline: formData.punchline,
        description: formData.description,
      },
    };
    const responseData = await http.post(ESTABLISHMENT_PATH, options);
    console.log(responseData);
  };

  if (establishments.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section>
        <div className="heading">
          <Heading as={"h3"}>Add establishment</Heading>
        </div>
        <div className="cont">
          <EstablishmentForm addEstablishment={addEstablishment} />
        </div>
      </section>
      <section>
        <div className="heading">
          <Heading as={"h3"}>Establishments</Heading>
        </div>
        {establishments.map((est, idx) => {
          return (
            <div className="cont" key={idx}>
              <Heading as={"h4"}>{est.attributes.title}</Heading>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default AdminEstablishments;
