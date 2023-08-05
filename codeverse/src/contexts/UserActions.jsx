import { createContext } from "react";

export const UserActionsContext = createContext({});

const UserActionsProvider = ({children}) => {
  return (
    <UserActionsContext.Provider 
        value={{
            
        }}
    >
        {children}
    </UserActionsContext.Provider>
    
  )
}

export default UserActionsProvider