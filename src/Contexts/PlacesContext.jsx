import { createContext, useState } from "react";

export const PlacesContext = createContext();


export const PlacesContextProvider = ({ children }) => {

    const [ single, setSingle ] = useState(0);
    const [ place, setPlace ] = useState(0);
    const [ tvshow, setTvshow ] = useState(0);
    const [ vipa, setVipa ] = useState([]);
    const [ seri, setSeri ] = useState(0);
    const [ tele, setTele ] = useState({
      id: 111, title: "Maelf", url: "https://d1vpmwlygrv24c.cloudfront.net/killer.mp4", head: "heand", hero: "hero", kichwa: "ji", about: "abou", middle: "uo" });


    const handleSingle = (value) => {
      setSingle(value);
    }

    const handlePlace = (value) => {
      setPlace(value);
    }

    const handleTvshow = (value) => {
      setTvshow(value);
    }

    const handleVipa = (value) => {
      setVipa((vipa) => {
        var newVipa = [...value];
        return newVipa;
      });

      console.log("values", value);
    }

    const handleTele = (value) => {
      setTele(value);
    }

    const handleSeri = (value) => {
      setSeri(value);
    }




    return (
        <PlacesContext.Provider
          value={
            {
                single,
                handleSingle,
                place,
                handlePlace,
                tvshow,
                seri,
                vipa,
                handleVipa, 
                tele,
                handleTele,
                handleSeri
            }
          }
        >{ children}</PlacesContext.Provider>
    )
}