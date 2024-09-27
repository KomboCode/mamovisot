import React from 'react'
import './About.css'
import about_img from '../../assets/About.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about image" className='about-img' />
      </div>
      
      <div className="about-right">
        <h3>ABOUT ZANZIBAR ADVENTURES</h3>
        <h2>Why Visit Zanzibar?</h2>

        <p>
        Zanzibar is the home of idyllic beaches, balmy weather & warm tropical waters.
        This archipelago is renowned for clear warm waters, coral reefs and 
        rich marine diversity
        </p>
        <p>
         Making it a perfect under-water destination for snorkelling and diving. 
         If it is lazy days along white sandy beaches that you are 
         after - Zanzibar is hard to beat. 
        </p>

        <p>
          But, in addition to the perfect beach destination, Zanzibar is also full 
          of options for nature lovers, culture vultures, and adventurers.
        </p>
       
        <p>
        Zanzibar is not only renowned for its stunning beaches and historical landmarks 
        but also for its lively entertainment.
        </p>

        <p>
       
        </p>

        <p>
        Immerse yourself in Zanzibar's captivating cultural and heritage events,
         offering a unique and unforgettable experience.
         Delve into Zanzibar's rich heritage through major historical and 
         political events that shaped the island's identity. 
         Explore Zanzibar's vibrant expos and exhibitions, unveiling opportunities
         for business and tourism.
        </p>
       
      </div>
    </div>
  )
}

export default About