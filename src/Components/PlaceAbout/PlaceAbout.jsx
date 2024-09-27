import React from 'react'
import './PlaceAbout.css'
import about_img from '../../assets/About.jpg'

const Placeabout = ({ photo }) => {
  return (
    <div className="placeabout">
      <div className="about-left">
        <img src={photo} alt="about image" className='about-img' />
      </div>
      
      <div className="about-right">
        <h3>ABOUT BORACHEE</h3>
        <h2>Home of the EUROCUT brand in Tanzania</h2>
        <p>
          We aim to empower craftsmen, technicians and industries in Tanzania by enhancing the
          value of their work through the application of the right skills, tools,
          and technologies.
        </p>
        <p>
          We invest our resources, expertise, and time in sourcing high-quality 
          abrasive products and tools, ensuring they are accessible and affordable
          for those who need them.
        </p>
        <p>
          We forge and leverage partnerships with global manufacturers to ensure 
          our resellers and consumers have access to the latest technologies and 
          tools for cutting, grinding, sanding, polishing, and other product 
          finishing purposes.
        </p>
      </div>
    </div>
  )
}

export default Placeabout;