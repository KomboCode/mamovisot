import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        {/* <h1>Amba motion kwenye motion Dedicated to continuous improvement and empowering others to achieve excellence</h1> */}
        <h1>Explore Outdoor And Nature Activities, Cultural Experiences, Fishing Activities, Coastal Sailings And Cruises In Zanzibar</h1>
        <p>Travel has helped us to understand the meaning of life and it has helped 
        us become better people. Each time we travel, we see the world with new eyes.
        </p>
        <button className='btn'>
          <Link to='campus' smooth={true} offset={-260} duration={500}>Explore more <img src={dark_arrow} alt='' /></Link> 
        </button>
      </div>
    </div>
  )
}

export default Hero