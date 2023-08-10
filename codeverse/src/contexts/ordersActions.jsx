import { useContext } from 'react';

export const OrdersActionsContext = useContext({});

const OrdersActionsProvider = () => {
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