import { createContext } from "react";

export const WishlistActionsContext = createContext({});

const WishlistActionsProvider = ({children}) => {

  return (
    <WishlistActionsContext.Provider 
        value={{
            
        }}
    >
        {children}
    </WishlistActionsContext.Provider>
    
  )
}

export default WishlistActionsProvider;