import { createContext } from 'react';

export const OrdersActionsContext = createContext({});

const OrdersActionsProvider = ({children}) => {
  return (
    <OrdersActionsContext.Provider 
        value={{
            
        }}
    >
        {children}
    </OrdersActionsContext.Provider>
  )
}

export default OrdersActionsProvider