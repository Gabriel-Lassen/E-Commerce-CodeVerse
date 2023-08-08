import { createContext } from "react";

export const FilterActionsContext = createContext({});

const FilterActionsProvider = ({children}) => {

    return (
        <FilterActionsContext.Provider 
            value={{
            
            }}
        >
            {children}
        </FilterActionsContext.Provider>
        
      )
    }
    
export default FilterActionsProvider;