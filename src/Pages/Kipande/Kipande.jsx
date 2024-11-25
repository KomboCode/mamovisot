import React, { useContext } from 'react'
import './Kipande.css'
import Series from '../../Data/Series'
import { useNavigate } from 'react-router-dom'
import { PlacesContext } from '../../Contexts/PlacesContext'


const Kipande = () => {

  const { vipa, handleTele } = useContext(PlacesContext);

  console.log("vipandeee", vipa);

  const Navigate = useNavigate();


  const handleKipande = (value) => {
    Navigate("/television");
    handleTele(value);

  }


  return (
    <div className="campus">
      <div className="gallery viewall">
        { vipa.map((item) => {
            const { id, title, url, photo } = item;
            return (
                <div onClick={() => handleKipande(item)}>
                    <img src={photo}/>
                    <h4>{title}</h4>
                    {/* <h4>{url}</h4> */}
                </div>
            )
        }) }


        

      </div>
      {/* <button className='btn dark-btn'>See more here
      <img src={white_arrow} alt="" /> </button> */}
    </div>
  )
}

export default Kipande;