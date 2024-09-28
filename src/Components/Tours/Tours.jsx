import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Tours.css';
// import tembo_1 from '../../assets/z-logdge/one.jpg';
import tembo_1 from '../../assets/z-lodge/one.jpg';
import mzingani_1 from '../../assets/sipano/three.jpg';
import tui_1 from '../../assets/kiwengwa/kiwe.png';
import product_4 from '../../assets/marafiki/mara.png';
import product_5 from '../../assets/imara/imara.png';
import product_6 from '../../assets/zanblue/four.jpg';
import product_7 from '../../assets/tembo/one.jpg';
import product_8 from '../../assets/mzingani/one.jpg';
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
            <h3>TZS 106, 276</h3>
            <h2>Z-Lodge Zanzibar</h2>
          </div>
        </div>

        <div 
           className="program"
          onClick={() => handleHotel(1)}
        >
          <img src={mzingani_1} alt="Product 2" />
          <div className="captio">
          <h3>TZS 145,976</h3>
            <h2>Sipano Beach Lodge</h2>
          </div>
        </div>

        <div 
           className="program"
           onClick={() => handleHotel(2)}
           >
          <img src={tui_1} alt="Product 3" />
          <div className="captio">
          <h3>TZS 576,461</h3>
            <h2>Kiwengwa Beach Resort</h2>
          </div>
        </div>
        
        <div 
           className="program"
           onClick={() => handleHotel(3)}
          >
          <img src={product_4} alt="Product 4" />
          <div className="captio">
            <h3>TZS 299,857</h3>
            <h2>Marafiki Bungalows</h2>
          </div>
        </div>

        <div 
           className="program"
           onClick={() => handleHotel(4)}
        >
          <img src={product_5} alt="Product 5" />
          <div className="captio">
            <h3>TZS 681,493</h3>
            <h2>Imara Beach Resort</h2>
          </div>
        </div>

        <div 
           className="program"
           onClick={() => handleHotel(5)}
        >
          <img src={product_6} alt="Product 6" />
          <div className="captio">
            <h3>TZS 655,841</h3>
            <h2>Zanbluu Beach Hotel</h2>
          </div>
        </div>

        <div 
          className="program"
          onClick={() => handleHotel(6)}
        >
          <img src={product_7} alt="Product 7" />
          <div className="captio">
            <h3>TZS 419,527</h3>
            <h2>Tembo House Hotel</h2>
          </div>
        </div>

        <div 
          className="program"
          onClick={() => handleHotel(7)}
        >
          <img src={product_8} alt="Product 8" />
          <div className="captio">
            <h3>TZS 258,967</h3>
            <h2>Mizingani Seafront Hotel</h2>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Tours;
