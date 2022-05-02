import axios from 'axios';
import React from 'react'
import ContactForm from '../components/forms/ContactForm'
import { Heading } from '../components/styles/StyledHeadings'
import { CONTACT_URL } from '../utils/api';

function Contact() {
    const sendContact = async (formData) => {
        const options = {
          data: {
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        };
        const responseData = await axios.post(CONTACT_URL, options);
        console.log(responseData);
      };
  return (
    <div className='content'>
        <div>
        <Heading>Get in touch</Heading>
        <p>We love to hear what you have to say, send us a Message and we will get back to you as soon as possible</p>
        </div>
        <ContactForm sendContact={sendContact}/>
    </div>
  )
}

export default Contact