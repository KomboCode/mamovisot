import { createContext, useState } from "react";

export const PlacesContext = createContext();


export const PlacesContextProvider = ({ children }) => {

    const [ single, setSingle ] = useState(0);
    const [ place, setPlace ] = useState(0);


    const handleSingle = (value) => {
      setSingle(value);
    }

    const handlePlace = (value) => {
      setPlace(value);
    }

    return (
        <PlacesContext.Provider
          value={
            {
                single,
                handleSingle,
                place,
                handlePlace
            }
          }
        >{ children}</PlacesContext.Provider>
    )
}