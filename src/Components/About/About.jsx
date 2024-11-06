import React from 'react'
import './About.css'
import about_img from '../../assets/About.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        {/* <video width="700px" height="400px" controls>
          <source src='https://d1vpmwlygrv24c.cloudfront.net/slavery.mp4' type='video/mp4'/>
        </video> */}
        <img src={about_img} className='about-img'/>
      </div>
      
      <div className="about-right">
        <h3>ABOUT MANEMOVIES STORE</h3>
        <h2>Why Visit Manemovies Store?</h2>

      
        <p>
        Manemovies Store offers a vast collection of movies and TV shows to watch online to satisfy even the
         most discriminating movie buff. 
        </p>
       
        <p>
        Whether you're looking for the latest bongo movies Nigerian Nollywood, Trending Movies 
        or romance movies to add to your collection, you will find them 
        in our Movie section.
        </p>

       
       <p>
          Browse our wide selection of new and used movies from any genre to find your
          next favorite movie or rewatch the greatest hits with your family.
          Watch Movies online now from Manemovies Store.
       </p>

        <p>
       
        </p>

       
      </div>
    </div>
  )
}

export default About