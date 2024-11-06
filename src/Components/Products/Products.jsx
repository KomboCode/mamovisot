import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.css';
import product_1 from '../../assets/movies/thekiller.png';
import product_4 from '../../assets/movies/beautyandmr.png';
import product_3 from '../../assets/product-3.png';
import product_2 from '../../assets/product-4.png';
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

const Programs = () => {

  const Navigate = useNavigate();

  
  const { handleSingle } = useContext(PlacesContext);


  const handlePlace = (value) => {
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
    <div className='programs programs-slider'>
      <Slider {...settings}>
        <div 
          className="program"
          onClick={() => handlePlace(0)}
          >
          <img src={product_1} alt="Product 1" />
          <div className="caption">
            <h2>The Killer</h2>
          </div>
        </div>

        <div 
           className="program"
           onClick={() => handlePlace(1)}
        >
          <img src={product_2} alt="Product 2" />
          <div className="caption">
            <h2>Eyes In The Sky</h2>
          </div>
        </div>

        <div 
            className="program"
            onClick={() => handlePlace(2)}
          >
          <img src={product_3} alt="Product 3" />
          <div className="caption">
            <h2>12 Years Of Slave</h2>
          </div>
        </div>
        
        <div 
            className="program"
            onClick={() => handlePlace(3)}
            >
          <img src={product_4} alt="Product 4" />
          <div className="caption">
            <h2>Beauty And Mr Romantic</h2>
          </div>
        </div>

        <div 
             className="program"
             onClick={() => handlePlace(4)}
        >
          <img src={product_5} alt="Product 5" />
          <div className="caption">
            <h2>Deadpool & Wolverine</h2>
          </div>
        </div>

      

      </Slider>
    </div>
  );
};

export default Programs;
