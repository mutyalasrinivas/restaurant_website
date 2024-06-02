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
const removeItemHandler=(id)=>{
         setCartItem((prevItems) => {
          const updatedItems = prevItems.filter(item => item.id !== id);
          const itemToRemove = prevItems.find(item => item.id === id);
          console.log(itemToRemove)
          setTotalAmount((prevTotal) => prevTotal - itemToRemove.price * itemToRemove.quantity);
          return updatedItems;
        });
     
}

const decreaseQuantityHandler = (id) => {
    setCartItem((prevItems) => {
        return prevItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            setTotalAmount((prevTotal) => prevTotal - item.price);  
            return item;
        });
    });
 };

    const cartContext={
        items:cartItem,
        totalAmount:totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        decreaseQuantity: decreaseQuantityHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>
          {children}
        </CartContext.Provider>
    )
}

export default CartProvider;