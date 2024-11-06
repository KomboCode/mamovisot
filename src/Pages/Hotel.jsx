import React, { useContext } from 'react'
import About from '../Components/About/About';
import Placehero from '../Components/PlaceHero/Placehero';
import Places from '../Data/Places';
import { PlacesContext } from '../Contexts/PlacesContext';
import Placeabout from '../Components/PlaceAbout/PlaceAbout';


const Hotel = () => {


    const { single } = useContext(PlacesContext);
    const { id, title, url, photo, second, head, hero, kichwa, about, middle, last } = Places[single];

    console.log("single", single);



    return (
        <section>
            <Placehero
                photo={photo}
                head={head}
                hero={hero}
                url={url}
            />        
            <div className="container">
            <Placeabout 
                photo={second}
                kichwa={kichwa}
                about={about}
                middle={middle}
                last={last}
            />
            </div>

        </section>


    )
}

export default Hotel;