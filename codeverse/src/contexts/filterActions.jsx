import { createContext, useState } from "react";

export const FilterActionsContext = createContext({});

const FilterActionsProvider = ({children}) => {
    const [filtredSizes, setFiltredSizes] = useState([]);
    const [filtredColors, setFiltredColors] = useState([]);

    return (
        <FilterActionsContext.Provider 
            value={{
                filtredSizes,
                setFiltredSizes,
                filtredColors,
                setFiltredColors
            }}
        >
            {children}
        </FilterActionsContext.Provider>
        
      )
    }
    
export default FilterActionsProvider;