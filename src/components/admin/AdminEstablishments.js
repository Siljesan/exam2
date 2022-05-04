import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { ESTABLISHMENT_PATH } from "../../utils/api";
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

  if (establishments.length === 0) {
    return <div>Loading...</div>;
  }
  return (
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
  );
}

export default AdminEstablishments;
