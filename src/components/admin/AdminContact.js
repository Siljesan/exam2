import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { CONTACT_PATH } from "../../utils/api";
import { Heading } from "../styles/StyledHeadings";

function AdminContact() {
  const [contact, setContact] = useState([]);
  const [auth, setAuth] = useContext(AuthContext);

  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get(CONTACT_PATH);
      console.log(response.data.data);
      setContact(response.data.data);
    };
    fetchData().catch(console.error);
  }, [auth]);

  if (contact.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="heading">
        <Heading as={"h3"}>Contact messages</Heading>
      </div>
      {contact.map((con, idx) => {
        return (
          <div className="cont" key={idx}>
            <Heading as={"h4"}>{con.attributes.subject}</Heading>
            <p>{con.attributes.email}</p>
            <p>{con.attributes.message}</p>
          </div>
        );
      })}
    </section>
  );
}

export default AdminContact;
