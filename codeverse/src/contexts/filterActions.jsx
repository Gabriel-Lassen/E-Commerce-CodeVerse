import { createContext, useState } from "react";

export const FilterActionsContext = createContext({});

const FilterActionsProvider = ({children}) => {
    const [filtredSizes, setFiltredSizes] = useState([]);
    const [filtredColors, setFiltredColors] = useState([]);
    const [filtredBrands, setFiltredBrands] = useState([]);
    const [filtredPriceRange, setFiltredPriceRange] = useState([]);
    const [SortBy, setSortBy] = useState('Popular');

    function handleClearAllFilters() {
        setFiltredSizes([]);
        setFiltredColors([]);
        setFiltredBrands([]);
        setFiltredPriceRange([]);
    }

    return (
        <FilterActionsContext.Provider 
            value={{
                filtredSizes,
                setFiltredSizes,
                filtredColors,
                setFiltredColors,
                filtredBrands,
                setFiltredBrands,
                filtredPriceRange,
                setFiltredPriceRange,
                SortBy,
                setSortBy,
                handleClearAllFilters
            }}
        >
            {children}
        </FilterActionsContext.Provider>
        
      )
    }
    
export default FilterActionsProvider;