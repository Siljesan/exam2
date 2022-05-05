import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { ENQUIRY_PATH, POPULATE } from "../../utils/api";
import { Heading } from "../styles/StyledHeadings";

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [auth, setAuth] = useContext(AuthContext);

  const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get(ENQUIRY_PATH + POPULATE);
      console.log(response.data.data);
      setEnquiries(response.data.data);
    };
    fetchData().catch(console.error);
  }, [auth]);

  if (enquiries.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="heading">
        <Heading as={"h3"}>Enquiries</Heading>
      </div>
      {enquiries.map((enq, idx) => {
        return (
          <div className="cont" key={idx}>
            <Heading as={"h4"}>{enq.attributes.email}</Heading>
            <p>{enq.attributes.establishment.data.attributes.title}</p>
            <p>{enq.attributes.date}</p>
            <p>{enq.attributes.information}</p>
          </div>
        );
      })}
    </section>
  );
}

export default AdminEnquiries;
