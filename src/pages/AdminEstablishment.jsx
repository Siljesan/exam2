import React, { useContext, useEffect, useState } from 'react'
import AdminEstablishments from '../components/admin/AdminEstablishments'
import { Heading } from '../components/styles/StyledHeadings'
import AuthContext from '../context/AuthContext';
import useAxios from '../hooks/useAxios';
import { ENQUIRY_PATH } from '../utils/api';
import { Link } from 'react-router-dom';

function AdminEstablishment() {
  const [auth] = useContext(AuthContext);
  const [error, setError] = useState();

const http = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get(ENQUIRY_PATH);
      console.log(response);
    };
    fetchData().catch((error) => setError(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[auth]);

  if (error) {
    return (
      <div className='content error'>
        <Heading as={"h2"}>Something went wrong</Heading>
        <p>{error.message}</p>
        <p>Please log in to view this page or head back to homepage</p>
        <div className='error__btn'>
        <Link className="error__btn--login" to="/login">
          Login
        </Link>/
        <Link className='error__btn--home' to="/">
        Home
        </Link>
        </div>
      </div>
    );
  }
  return (
    <div className='content'>
        <Heading>Establishment editor</Heading>
        <section>
            <AdminEstablishments />
        </section>
    </div>
  )
}

export default AdminEstablishment