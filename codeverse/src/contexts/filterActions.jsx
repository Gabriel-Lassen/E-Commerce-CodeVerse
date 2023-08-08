import { createContext, useState } from "react";

export const FilterActionsContext = createContext({});

const FilterActionsProvider = ({children}) => {
    const [filtredSizes, setFiltredSizes] = useState([]);
    const [filtredColors, setFiltredColors] = useState([]);
    const [filtredBrands, setFiltredBrands] = useState([]);
    const [SortBy, setSortBy] = useState('Popular');

    return (
        <FilterActionsContext.Provider 
            value={{
                filtredSizes,
                setFiltredSizes,
                filtredColors,
                setFiltredColors,
                filtredBrands,
                setFiltredBrands,
                SortBy,
                setSortBy
            }}
        >
            {children}
        </FilterActionsContext.Provider>
        
      )
    }
    
export default FilterActionsProvider;