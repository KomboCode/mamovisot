import './Placehero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';



const Placehero = ({ photo, head, hero, url }) => {

    

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
        {/* <h1>{head}</h1> */}
         {/* <p>{hero.slice(0,20)}</p> */}
         <video width="700px" height="400px" controls controlsList='nodownload' className='vid' >
          <source src={url} type='video/mp4'/>
        </video>      

      </div>
    </div>
  )
}

export default Placehero;