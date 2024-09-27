import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Tours.css';
import tembo_1 from '../../assets/tembo_1.jpg';
import mzingani_1 from '../../assets/mzingani_1.jpg';
import tui_1 from '../../assets/tui_1.jpg';
import product_4 from '../../assets/product-4.jpg';
import product_5 from '../../assets/product-5.png';
import product_6 from '../../assets/product-6.png';
import product_7 from '../../assets/product-7.png';
import product_8 from '../../assets/product-8.png';
import product_9 from '../../assets/product-9.jpg';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import { PlacesContext } from '../../Contexts/PlacesContext';
import { useNavigate } from 'react-router-dom';

const Tours = () => {

  const Navigate = useNavigate();
  const { handlePlace } = useContext(PlacesContext);


  const handleHotel = (value) => {
    Navigate("/book");
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
    <div className='tours programs-slider'>
      <Slider {...settings}>
        <div 
          className="program"
          onClick={() => handleHotel(0)}
          >
          <img src={tembo_1} alt="Product 1" />
          <div className="captio">
            <h3>TZS 134,440 </h3>
            <h2>Tembo House Hotel</h2>
          </div>
        </div>

        <div 
           className="program"
          onClick={() => handleHotel(1)}
        >
          <img src={mzingani_1} alt="Product 2" />
          <div className="captio">
          <h3>TZS 134,440</h3>
            <h2>Mzingani Seafront Hotel</h2>
          </div>
        </div>

        <div className="program">
          <img src={tui_1} alt="Product 3" />
          <div className="captio">
          <h3>TZS 134,440</h3>
            <h2>Tui Blue Bahari Hotel</h2>
          </div>
        </div>
        
        <div className="program">
          <img src={product_4} alt="Product 4" />
          <div className="captio">
            <h2>Scuba Diving</h2>
          </div>
        </div>

        <div className="program">
          <img src={product_5} alt="Product 5" />
          <div className="captio">
            <h2>St. Joseph Cathedral</h2>
          </div>
        </div>

        <div className="program">
          <img src={product_6} alt="Product 6" />
          <div className="captio">
            <h2>Nkamandume Ruins</h2>
          </div>
        </div>

        <div className="program">
          <img src={product_7} alt="Product 7" />
          <div className="caption">
            <h2>Chake Chake</h2>
          </div>
        </div>

        <div className="program">
          <img src={product_8} alt="Product 8" />
          <div className="caption">
            <h2>Chwaka Ruins</h2>
          </div>
        </div>

        <div className="program">
          <img src={product_9} alt="Product 9" />
          <div className="caption">
            <h2>Seafront Beach</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Tours;
