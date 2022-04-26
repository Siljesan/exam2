import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading } from '../components/styles/StyledHeadings';
import { ESTABLISHMENT_URL } from '../utils/api';

function Result() {
    const { location } = useParams();
    const [hotel, setHotel] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(ESTABLISHMENT_URL + location);
            setHotel(response.data.data);
        }
        fetchData().catch((error) => setError(error))
    }, [location]);

    if(error){
        return (
        <div>
            <Heading>Something went wrong</Heading>
            <p>{error.message}</p>
        </div>
      );
    }

    if(hotel.length === 0){
        return <div>Loading...</div>;
    }

console.log(hotel.attributes.title);
  return (  
  <>
 <Heading>{hotel.attributes.title}</Heading>
<img src={hotel.attributes.coverimageurl} />
<div>
    <div>
        <Heading as={"h3"}>{hotel.attributes.punchline}</Heading>
        <p>{hotel.attributes.description}</p>
    </div>
    <div>
        <button>Send Enquiry</button>
    </div>
</div>
  </>
  )
}

export default Result