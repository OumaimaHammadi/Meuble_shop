import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewProducts from '../Components/NewProducts/NewProducts'

const home = () => {
  return (
      <div>
        <Hero />
        <Popular/>
        <NewProducts/>
      </div>
     
 
  )
}

export default home