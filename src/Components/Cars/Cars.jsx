import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cars.css';
// import tembo_1 from '../../assets/z-logdge/one.jpg';
import tembo_1 from '../../assets/cars/5.png';
import mzingani_1 from '../../assets/cars/2.jpg';
import tui_1 from '../../assets/cars/3.jpg';
import product_4 from '../../assets/cars/4.jpg';
import product_5 from '../../assets/cars/1.jpg';
import product_6 from '../../assets/zanblue/four.jpg';
import product_7 from '../../assets/tembo/one.jpg';
import product_8 from '../../assets/mzingani/one.jpg';
import product_9 from '../../assets/product-9.jpg';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import { PlacesContext } from '../../Contexts/PlacesContext';
import { useNavigate } from 'react-router-dom';

const Cars = () => {

  const Navigate = useNavigate();
  const { handlePlace } = useContext(PlacesContext);


  const handleHotel = (value) => {
    Navigate("/cars");
    handlePlace(value);
    window.scrollTo({
      top: 0,
      bahavior: 'smooth' 
    })
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='cars programs-slider'>
      <Slider {...settings}>
        <div 
          className="program"
          onClick={() => handleHotel(0)}
          >
          <img src={tembo_1} alt="Product 1" />
          <div className="captio">
            <h2>Luxury Fleet</h2>
          </div>
        </div>

        <div 
           className="program"
          onClick={() => handleHotel(1)}
        >
          <img src={mzingani_1} alt="Product 2" />
          <div className="captio">
            <h2>Bus Fleet</h2>
          </div>
        </div>

        <div 
           className="program"
           onClick={() => handleHotel(2)}
           >
          <img src={product_4} alt="Product 4" />
          <div className="captio">
            <h2>Mini Van Fleet</h2>
          </div>
        </div>
        
        <div 
           className="program"
           onClick={() => handleHotel(3)}
          >
          <img src={tui_1} alt="Product 3" />
          <div className="captio">
            <h2>Cab Fleet</h2>
          </div>
        </div>

    
      </Slider>
    </div>
  );
};

export default Cars;
