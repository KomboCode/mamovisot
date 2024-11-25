import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cars.css';
// import tembo_1 from '../../assets/z-logdge/one.jpg';
import tembo_1 from '../../assets/series/from1.png';
import tui_1 from '../../assets/series/unit1.png';
import mzingani_1 from '../../assets/series/unit1.png';
import product_4 from '../../assets/series/from1.png';
import { PlacesContext } from '../../Contexts/PlacesContext';
import { useNavigate } from 'react-router-dom';

const Cars = () => {

  const Navigate = useNavigate();
  
  const { handleSingle } = useContext(PlacesContext);


  const handleHotel = (value) => {
    Navigate("/season");
    // handleSingle(value);
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
           onClick={() => handleHotel(7)}
           >
          <img src={product_4} alt="Product 4" />
          <div className="captio">
            <h2>Three Kingdoms</h2>
          </div>
        </div>

        
        <div 
           className="program"
          onClick={() => handleHotel(8)}
        >
          <img src={mzingani_1} alt="Product 2" />
          <div className="captio">
            <h2>Bekaboo</h2>
          </div>
        </div>


        <div 
          className="program"
          onClick={() => handleHotel(9)}
          >
          <img src={tembo_1} alt="Product 1" />
          <div className="captio">
            <h2>The Heavenly Idol</h2>
          </div>
        </div>

        
        <div 
           className="program"
           onClick={() => handleHotel(10)}
          >
          <img src={tui_1} alt="Product 3" />
          <div className="captio">
            <h2>Schoool Love</h2>
          </div>
        </div>

    
      </Slider>
    </div>
  );
};

export default Cars;
