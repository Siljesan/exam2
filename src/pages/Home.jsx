import React, { useRef } from 'react'
import Hero from '../components/Hero'
import Inspo from '../components/Inspo'

function Home() {
  const homeRef = useRef();

  return (
    <div ref={homeRef} className='content'>
    <Hero home={homeRef} />
    <Inspo />
    </div>
  )
}

export default Home