import React, { useContext } from 'react'
import './Episods.css'
import Series from '../../Data/Series'
import { useNavigate } from 'react-router-dom'
import Vipande from '../Vipande/Vipande'
import { PlacesContext } from '../../Contexts/PlacesContext'


const Episods = () => {

  const Navigate = useNavigate();

  const { seri } = useContext(PlacesContext);

  const { id, photo, season } = Series[seri];

  const handleEpisods = () => {
    console.log("h");
    Navigate("/vipande");
  }


  return (
    <div>
    { season.map((item) => {
              const { id, title, episods, picha } = item;
              return (
                  <Vipande 
                      picha={picha}
                      title = {title}
                      season={season}
                      episods={episods}
                  />
              )
          }) }
    </div>

  )
}

export default Episods;