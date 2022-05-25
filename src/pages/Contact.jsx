import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import ContactForm from '../components/forms/ContactForm'
import { Heading } from '../components/styles/StyledHeadings'
import { useToggle } from '../hooks/useToggle';
import { CONTACT_URL } from '../utils/api';

function Contact() {
  const [toggle, setToggle] = useToggle();

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
        setToggle()
      };
  return (
    <div className='content'>
        <div>
        <Heading>Get in touch</Heading>
        <p>We love to hear what you have to say, send us a message and we will get back to you as soon as possible</p>
        </div>
        {toggle ? <div><p>Thank you! We will reply to your message as soon as possible.</p><Link to="/">Home</Link></div> : <ContactForm sendContact={sendContact}/>}
    </div>
  )
}

export default Contact