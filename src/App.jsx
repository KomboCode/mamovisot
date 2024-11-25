import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Home from './Pages/Home';
import { TailSpin } from 'react-loader-spinner';
import { data } from 'jquery';
import Footer from './Components/Footer/Footer';
import Hotel from './Pages/Hotel';
import { PlacesContextProvider } from './Contexts/PlacesContext';
import Viewall from './Pages/Viewall/Viewall';
import Season from './Pages/Season/Season';
import Episods from './Pages/Episods.jsx/Episods';
import Vipande from './Pages/Vipande/Vipande';
import Kipande from './Pages/Kipande/Kipande';
import Television from './Pages/television';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch("/api")
      .then((res) => res.json())
      .then((data) => { console.log(data)})


    // Simulate a delay to show the loading spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (

    
    <div>
      {loading ? (
        <div className="loading-spinner">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <PlacesContextProvider>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/hotel" element={<Hotel/>}/>
              <Route path="/viewall" element={<Viewall/>}/>
              <Route path="/season" element={<Season/>}/>
              <Route path="/episods" element={<Episods/> } />
              <Route path="/vipande" element={<Vipande/> } />
              <Route path="/kipande" element={<Kipande/> } />
              <Route path="/television" element={<Television/> } />
              
            </Routes>
          </PlacesContextProvider>
        
          <div className='container'>
            <Footer/>
          </div>
        </>
      )}
    </div>


  );


};

export default App;
