import { createContext, useState } from "react";

export const FilterActionsContext = createContext({});

const FilterActionsProvider = ({children}) => {
    const [filtredSizes, setFiltredSizes] = useState([]);

    return (
        <FilterActionsContext.Provider 
            value={{
                filtredSizes,
                setFiltredSizes,
            }}
        >
            {children}
        </FilterActionsContext.Provider>
        
      )
    }
    
export default FilterActionsProvider;