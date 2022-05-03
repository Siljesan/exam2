import React from 'react'
import AdminEnquiries from '../components/admin/AdminEnquiries'
import AdminContact from '../components/admin/AdminContact'
import { Heading } from '../components/styles/StyledHeadings'

function Admin() {
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