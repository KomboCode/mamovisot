import React from 'react'
import './Viewall.css'
import gallery_1 from '../../assets/About_1.png'
import gallery_2 from '../../assets/About_2.png'
import gallery_3 from '../../assets/About_3.png'
import gallery_4 from '../../assets/About_4.png'

import gallery_5 from '../../assets/trends/claudie.png'
import gallery_6 from '../../assets/trends/deadpool.png'
import gallery_7 from '../../assets/trends/moon.png'
import gallery_8 from '../../assets/trends/thekiller.png'


import gallery_9 from '../../assets/series/baadook.png'




import white_arrow from '../../assets/white-arrow.png'

const Viewall = () => {
  return (
    <div className="campus">
      <div className="gallery viewall">
       

        <img src={gallery_5} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_7} alt="" />
        <img src={gallery_8} alt="" />

        
        <img src={gallery_5} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_7} alt="" />
        <img src={gallery_8} alt="" />

        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />

      </div>
      {/* <button className='btn dark-btn'>See more here
      <img src={white_arrow} alt="" /> </button> */}
    </div>
  )
}

export default Viewall;