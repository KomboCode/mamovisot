import React, { useContext } from 'react'
import About from '../Components/About/About';
import Placehero from '../Components/PlaceHero/Placehero';
import Places from '../Data/Places';
import { PlacesContext } from '../Contexts/PlacesContext';
import Placeabout from '../Components/PlaceAbout/PlaceAbout';


const Hotel = () => {


    const { single } = useContext(PlacesContext);
    const { id, title, photo, second } = Places[single];

    console.log("single", single);



    return (
        <section>
            <Placehero
                photo={photo}
            />        
            <div className="container">
            <Placeabout 
                photo={second}
            />
            </div>

        </section>


    )
}

export default Hotel;