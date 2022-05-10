import React from 'react'
import AdminEstablishments from '../components/admin/AdminEstablishments'
import MediaUpload from '../components/admin/MediaUpload'
import { Heading } from '../components/styles/StyledHeadings'

function AdminEstablishment() {
  return (
    <div className='content'>
        <Heading>Establishment editor</Heading>
        <section>
            <AdminEstablishments />
        </section>
        
        <MediaUpload />
    </div>
  )
}

export default AdminEstablishment