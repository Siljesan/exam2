import React, { useContext, useEffect, useState } from 'react'
import AdminEnquiries from '../components/admin/AdminEnquiries'
import AdminContact from '../components/admin/AdminContact'
import { Heading } from '../components/styles/StyledHeadings'
import { useToggle } from '../hooks/useToggle';
import AuthContext from '../context/AuthContext';
import useAxios from '../hooks/useAxios';
import { ENQUIRY_PATH, POPULATE } from '../utils/api';
import { Link } from 'react-router-dom';

function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [auth, setAuth] = useContext(AuthContext);
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
    <div>Admin</div>
    <Heading as={"h2"}>Inbox</Heading>
    <section className='adminCont'>
      <AdminEnquiries />
      <AdminContact />
    </section>
    </div>
  )
}

export default Admin