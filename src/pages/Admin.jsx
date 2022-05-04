import React, { useState } from 'react'
import AdminEnquiries from '../components/admin/AdminEnquiries'
import AdminContact from '../components/admin/AdminContact'
import { Heading } from '../components/styles/StyledHeadings'
import AdminEstablishments from '../components/admin/AdminEstablishments';

function Admin() {
  const [error, setError] = useState();


  return (
    <div className='content'>
    <div>Admin</div>
    <Heading as={"h2"}>Inbox</Heading>
    <section className='adminCont'>
      <AdminEnquiries />
      <AdminContact />
    </section>
    <Heading as={"h2"}>Establishment editor</Heading>
    <section className='adminCont'>
      <AdminEstablishments />
    </section>
    </div>
  )
}

export default Admin