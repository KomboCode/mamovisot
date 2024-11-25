import React, { useContext } from 'react'
import './Vipande.css'
import Series from '../../Data/Series'
import { PlacesContext } from '../../Contexts/PlacesContext'
import { useNavigate } from 'react-router-dom'


const Vipande = ({ season, title, picha, episods}) => {

//   const { id, title, photo, season } = Series[0];

  const Navigate = useNavigate();

  const { handleVipa } = useContext(PlacesContext);


  const handleVipande = () => {
    handleVipa(episods);
    Navigate("/kipande");
  }


  return (
    <div className="campus">
      <div className="gallery viewall">
       
                <div onClick={ () => handleVipande()}>
                    <img  src={picha}/>
                    <h4>{title}</h4>
                </div>        

      </div>
    </div>
  )
}

export default Vipande;