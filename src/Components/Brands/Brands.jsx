import React from 'react';
import './Brands.css';


const Brands = () => {
  return (
    <div className='brand-logos'>
      <div className='brand-logo'>
        <img src={brand_2} alt="Brand 2" />
        <span>Azam Marine</span>
      </div>
      <div className='brand-logo'>
        <img src={brand_3} alt="Brand 3" />
        <span>Precision Air</span>
      </div>
      <div className='brand-logo'>
        <img src={brand_1} alt="Brand 1" />
        <span>Tourism Commission</span>
      </div>
    </div>
  );
};

export default Brands;
