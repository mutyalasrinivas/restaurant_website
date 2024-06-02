import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider=({children})=>{
    const [cartItem,setCartItem]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0);
    const addItemHandler=(item)=>{
       setCartItem((prevItems)=>{
       const updateItems= [...prevItems,item];
       return updateItems;
       });
       setTotalAmount((prevTotal)=>prevTotal+item.price*item.quantity);

};
   const removeItemHandler=()=>{}
    const cartContext={
        items:cartItem,
        totalAmount:totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
          {children}
        </CartContext.Provider>
    )
}

export default CartProvider;