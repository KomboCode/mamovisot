import React from 'react'
import './PlaceAbout.css'
import about_img from '../../assets/About.jpg'

const Placeabout = ({ photo, kichwa, about, middle, last }) => {
  return (
    <div className="placeabout">
      <div className="about-left">
        <img src={photo} alt="about image" className='about-img' />
      </div>
      
      <div className="about-right">
        {/* <h3>ABOUT BORACHEE</h3> */}
        <h2>{kichwa}</h2>
        <p>{about}</p>
        <p>{middle}</p>
        <p>{last}</p>
      
      </div>
    </div>
  )
}

export default Placeabout;