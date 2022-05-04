import React from 'react'
import HotelCards from '../components/HotelCards'
import { Heading } from '../components/styles/StyledHeadings'

function Hotels() {
  return (
    <div className='content'>
    <Heading>Where to?</Heading>
    <input type={"search"} className="hotelSearch" />
    <HotelCards />
    </div>
  )
}

export default Hotels