import React from 'react'
import AdminEstablishments from '../components/admin/AdminEstablishments'
import { Heading } from '../components/styles/StyledHeadings'

function AdminEstablishment() {
  return (
    <div className='content'>
        <Heading as={"h2"}>Establishment editor</Heading>
        <section>
            <AdminEstablishments />
        </section>
    </div>
  )
}

export default AdminEstablishment