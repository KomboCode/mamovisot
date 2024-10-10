import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './Drive.css';
import Tembo_1 from '../../assets/tembo_1.jpg';
import Hotels from '../../Data/Fleets';
import { useState, useContext, useMemo, useEffect, useRef } from 'react';
import { PlacesContext } from '../../Contexts/PlacesContext';
import { faAngleDown, faAngleLeft, faAngleRight, faAutomobile, faCheck, faStar, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

const Drive = () => {

    const ref = useRef(null);

    const { place, handlePlace } = useContext(PlacesContext);

    const [ pick, setPick ] = useState(0);

    const { id, title, others, nyota, kilometers, standard, bed, breakfast, 
        cancel, good, reviews, rate, location, night, price, charges } = Hotels[place];
    const { one, two, three, four } = others; 
    const [ picha, setPicha ] = useState(one);
    const [ suggest, setSuggest ] = useState(Hotels);
    const [ name, setName ] = useState("PICK A CAR OR SEARCH BY NAME");
    const [ show, setShow ] = useState(false);

    const options = useMemo(() => countryList().getData(), []);


    const [ country, setCountry ] = useState("");
    const [ mobile, setMobile ] = useState("");

    var list = [];
    for ( var n = 1; n<= nyota; n ++  ) {
        list.push(n);
    }

    useEffect(() => {

        if ( pick === 0 ) {
            setPicha(one)
        } else if ( pick === 1 ) {
            setPicha(two)
        } else if ( pick === 2 ) {
            setPicha(three)
        } else if ( pick === 3 ) {
            setPicha(four)
        }

    }, [pick, place]);

       
    const changeHandler = value => {
        console.log("country", value)
        setCountry(value);
        console.log(country);
    }

    const handleIncrement = () => {
        setPick((pick) => {
            var picka = 0;
            picka = picka + 1;

            return picka;
        })
    }

    const handleRef = () =>{
        ref.current.focus();
        setShow(true);

      }
    
    const handleSuggest = (value) => {
        console.log("Handle suggestion", value);
        setSuggest((suggest) => {
            const pata = Hotels.filter((item) => item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
            return pata;
        })
    }

    const handleSelect = (value, valu) => {
        setName(value);
        setShow(false);
        handlePlace(valu);
        window.scrollTo({
            top: 0,
            bahavior: 'smooth' 
          })
    }

    const handleReserve = () => {
        window.scrollTo({
            top: 500,
            bahavior: 'smooth' 
          })
    }


    return (
        <div className="booking">
            <div className="upper">
                <div className="facilities faci">                      

                    <ul>
                        <li>
                            <h4>Choose Car facilities</h4>
                        </li>

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Navigation System</p>
                            </div>
                        </li>

                    

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Self Driving</p>
                            </div>
                        </li>

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Tint Window</p>
                            </div>
                        </li>

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Transparent Window</p>
                            </div>
                        </li>

                       

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Sound System</p>
                            </div>
                        </li>

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Surveillance</p>
                            </div>
                        </li>

 
                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Multimedia</p>
                            </div>
                        </li>


                        <li>
                                <h4>Reservation  policy</h4>
                        </li>

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Free cancellation</p>
                            </div>
                        </li>

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Book without credit card</p>
                            </div>
                        </li>

                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>No prepayment</p>
                            </div>
                        </li>


                        
                        <li>
                            <h4>Places To Visit</h4>
                        </li>

                        
                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Beach</p>
                            </div>
                        </li>


                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Caves</p>
                            </div>
                        </li>


                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Museum</p>
                            </div>
                        </li>


                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Ruins</p>
                            </div>
                        </li>

                        
                        <li>
                            <div>
                                <input type="checkbox"/>
                                <p>Private beach area</p>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className='left'>
                    <div className='upleft'>
                        <div className="room">
                            <div className='photo'>
                                <div>
                                    <FontAwesomeIcon 
                                       icon={faAngleLeft} 
                                       className='icon'
                                       onClick={() => setPick((pick) => {
                                        pick = pick - 1;
                                        if ( pick === -1 ) {
                                            pick = 3
                                        }
                                        return pick;
                                       })}                                      
                                       />  
                                    <FontAwesomeIcon 
                                        icon={faAngleRight} 
                                        className='icon'
                                        onClick={() => setPick((pick) => {
                                        pick = pick + 1;
                                        if ( pick === 4 ) {
                                            pick = 0
                                        }
                                        return pick;
                                       })}        
                                        />                
                                </div>
                                <img src={picha}/>
                            </div>
                            <div className='info'>
                                <div className='words'>
                                    <h3>{title}</h3>
                                 
                                </div>

                               
                                <div className='type'>
                                    <FontAwesomeIcon icon={faAutomobile}    className='icon' />
                                    <p>Automatic</p>
                                    <p className='sepa'>{kilometers}</p>
                                </div>
                                <p className='kilos'>{kilometers}</p>
                                <div className='facilities'>
                                    <h4>{standard}</h4>
                                    <p>{bed}</p>

                                    <h4 className='break'>{breakfast}</h4>
                                        { cancel ?
                                    <div className='chec'>

                                            <FontAwesomeIcon icon={faCheck}    className='icon' />
                                            <p>Free cancellation</p>
                                    </div>
                                         : null }
                                    <button className='reserva' onClick={handleReserve}>Book Now</button>
                                       
                                </div>
                            </div>
                            
                        </div>
                        <div className="condition">
                            <h3>{good}</h3>
                            <p>{reviews}</p>
                            {/* <h3>{rate}</h3> */}
                            <h4>{location}</h4>

                            <p className='sakur'>{night}</p>
                            <p className='saku'>{night.slice(9, 24)}</p>

                            <h3>{price}</h3>
                            <p className='charge'>{charges}</p>
                            {/* <button>See availlability</button> */}
                        </div>

                    </div>

                    <div className='form'>
                                      
                    <form>
                           
                            <label className='choos'>Choose Transport</label>
                           
                            <div 
                                className='init' 
                                onClick={() => handleRef()}
                                style={ show ? {
                                    display: "none"
                                } : {
                                    display: "flex"
                                } }
                                >
                                <h5>{name}</h5>
                                <FontAwesomeIcon icon={faAngleDown} className='angle'/>
                            </div>

                            <input  
                                className='sug' 
                                onChange={(e) => handleSuggest(e.target.value)}
                                placeholder='CHOOSE TRANSPORT OR SEARCH BY NAME'
                                ref={ref}
                                style={ show ? {
                                    opacity: 1
                                } : {
                                    opacity: 0
                                } }
                                />
                            <div 
                               className='suggest'
                               style={ show ? {
                                display: "block"
                               } : {
                                display: "none"
                               }}
                               >
                                { suggest.map((sug, index) => {
                                    const { id, title, photo, others } = sug;
                                                                    
                                    var lis = [];
                                    for ( var a = 1; a<= sug.nyota; a ++  ) {
                                        lis.push(a);
                                    }

                                    return (
                                        <div 
                                           key={sug.id}
                                           className='item'
                                           onClick={() => handleSelect(sug.title, index)}
                                           >
                                            <div className='mid'>
                                                <img src={sug.others.one}/>                                           
                                                <div className='tit'>
                                                        <p className='titl'>{sug.title}</p>
                                                    
                                                        <p className='km dojarr'>{sug.kilometers}</p>
                                                
                                                        <p className='km dojar'>{sug.kilometers.slice(0, 17)}</p>
                                                     
                                                        <p className='fast'>{sug.standard}</p>

                                                </div>
                                                
                                            </div>

                                            <div className='price'>
                                                <h4>{sug.good}</h4>
                                                <p>{sug.reviews}</p>
                                                <h3>{sug.price}</h3>
                                                <p className='kiup'>{sug.night}</p>
                                                <p className='kiu'>{sug.night.slice(9,24 )}</p>
                                            </div>
                                         
                                        </div>
                                    )
                                })}
                            </div>    

                            <label className='country' htmlFor ="country">Country</label>
                            <Select className='selector' options={options}  onChange={changeHandler}/>

                            <label>Mobile</label>
                            <PhoneInput
                            className='phone'
                            international
                            placeholder="Enter phone number"
                            value={mobile}
                            onChange={setMobile}
                            countrySelectProps={{
                                unicodeFlags: false
                            }}
                            required
                            />

                            <label>Full Name</label>
                            <input/>


                            <label>Email Address</label>
                            <input/>

                            <label>Description</label>
                            <textarea/>

                            <button>Book Now</button>

                            </form>


                    </div>

                    
                </div>
              
            </div>
        </div>
    )
}

export default Drive;