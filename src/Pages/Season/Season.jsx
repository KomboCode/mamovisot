import React, { useContext } from 'react'
import './Season.css'
import Series from '../../Data/Series'
import { useNavigate } from 'react-router-dom'
import { PlacesContext } from '../../Contexts/PlacesContext'


const Season = () => {

   
  const { handleSeri } = useContext(PlacesContext);
  const Navigate = useNavigate();

  const handleSeason = (value) => {
    console.log("h");
    handleSeri(value);
    Navigate("/episods");
  }


  return (
    <div className="campus">
      <div className="gallery viewall">
        { Series.map((item, index) => {
            const { id, title, season, photo } = item;
            return (
                <div onClick={() => handleSeason(index)}>
                    <img src={photo}/>
                    <h4>{title}</h4>
                </div>
            )
        }) }


        

      </div>
      {/* <button className='btn dark-btn'>See more here
      <img src={white_arrow} alt="" /> </button> */}
    </div>
  )
}

export default Season;