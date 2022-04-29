import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EnquiryModal from '../components/EnquiryModal';
import { Heading } from '../components/styles/StyledHeadings';
import { ESTABLISHMENT_URL } from '../utils/api';
import { Modal } from "react-bootstrap";
require("react-bootstrap/ModalHeader")

function Result() {
    const { location } = useParams();
    const [hotel, setHotel] = useState({});
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(ESTABLISHMENT_URL + location);
            console.log(response.data.data);
            setHotel(response.data.data);
        }
        fetchData().catch((error) => setError(error))
    }, []);

    if(error){
        return (
        <div>
            <Heading>Something went wrong</Heading>
            <p>{error.message}</p>
        </div>
      );
    }

    if(!hotel.hasOwnProperty("id")){
        return <div>Loading...</div>;
    }


  return (  
  <div className='content'>
    <Heading>{hotel.attributes.title}</Heading>
    <img className='resultImg' src={hotel.attributes.coverimageurl} />
        <div className='result'>
            <div className='result__text'>
                <Heading as={"h2"}>{hotel.attributes.punchline}</Heading>
                <p>{hotel.attributes.description}</p>
            </div>
            <div className='result__btn'>
                <button onClick={() => setModal(true)}>Send Enquiry</button>
            </div>
        </div>
        <EnquiryModal show={modal} onHide={() => setModal(false)} />
  </div>
  )
}

export default Result