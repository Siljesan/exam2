import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EnquiryModal from '../components/EnquiryModal';
import { Heading } from '../components/styles/StyledHeadings';
import { ESTABLISHMENT_URL } from '../utils/api';
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className='result'>
        <div className='result__cont'>
            <div className='result__text'>
                <Heading as={"h2"}>{hotel.attributes.punchline}</Heading>
                <p>{hotel.attributes.description}</p>
            </div>
            <div className='result__btn'>
                <button onClick={() => setModal(true)}>Send booking enquiry</button>
            </div>
        </div>
        <img className='resultImg' src={hotel.attributes.coverimageurl} alt={`${hotel.attributes.title} in bergen`}/>
        </div>
        <EnquiryModal show={modal} onHide={() => setModal(false)} />
  </div>
  )
}

export default Result