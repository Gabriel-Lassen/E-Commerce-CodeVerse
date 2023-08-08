import { createContext, useState } from "react";

export const FilterActionsContext = createContext({});

const FilterActionsProvider = ({children}) => {
    const [filtredSizes, setFiltredSizes] = useState([]);
    const [filtredColors, setFiltredColors] = useState([]);
    const [filtredBrands, setFiltredBrands] = useState([]);

    return (
        <FilterActionsContext.Provider 
            value={{
                filtredSizes,
                setFiltredSizes,
                filtredColors,
                setFiltredColors,
                filtredBrands,
                setFiltredBrands
            }}
        >
            {children}
        </FilterActionsContext.Provider>
        
      )
    }
    
export default FilterActionsProvider;