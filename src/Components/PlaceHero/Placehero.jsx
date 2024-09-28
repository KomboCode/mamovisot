import './Placehero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';



const Placehero = ({ photo, head, hero }) => {

    

  return (
    <div 
        className='placehero container'
        style={
            {
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${photo})` 


            }
           }
    >
      <div className="hero-text">
        <h1>{head}</h1>
         <p>{hero}</p>
        <button className='btn'>
          <Link to='campus' smooth={true} offset={-260} duration={500}>Explore more <img src={dark_arrow} alt='' /></Link> 
        </button>
      </div>
    </div>
  )
}

export default Placehero;