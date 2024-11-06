import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Tours.css';
// import tembo_1 from '../../assets/z-logdge/one.jpg';
import tembo_1 from '../../assets/trends/deadpool.png';
import mzingani_1 from '../../assets/trends/claudie.png';
import tui_1 from '../../assets/trends/moon.png';
import product_4 from '../../assets/trends/thekiller.png';
import product_9 from '../../assets/product-9.jpg';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import { PlacesContext } from '../../Contexts/PlacesContext';
import { useNavigate } from 'react-router-dom';

const Tours = () => {

  const Navigate = useNavigate();
  
  const { handleSingle } = useContext(PlacesContext);


  const handleHotel = (value) => {
    Navigate("/hotel");
    handleSingle(value);
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
          onClick={() => handleHotel(4)}
          >
          <img src={tembo_1} alt="Product 1" />
          <div className="captio">
            <h3>276 views</h3>
            <h2>Deadpool Wolverine</h2>
          </div>
        </div>

        <div 
           className="program"
          onClick={() => handleHotel(5)}
        >
          <img src={mzingani_1} alt="Product 2" />
          <div className="captio">
          <h3>198 views</h3>
            <h2>Darkness Of Man</h2>
          </div>
        </div>

        <div 
           className="program"
           onClick={() => handleHotel(6)}
           >
          <img src={tui_1} alt="Product 3" />
          <div className="captio">
          <h3>530 views</h3>
            <h2>Label Moon Part: Two</h2>
          </div>
        </div>
        
        <div 
           className="program"
           onClick={() => handleHotel(0)}
          >
          <img src={product_4} alt="Product 4" />
          <div className="captio">
            <h3>512 views</h3>
            <h2>The Killer</h2>
          </div>
        </div>


      </Slider>
    </div>
  );
};

export default Tours;
