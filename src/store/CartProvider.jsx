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
      return prevItems.map((item) => {
        // Check if item ID matches and quantity is greater than 1
        if (item.id === id && item.quantity > 1) {
          // Decrement quantity and create a new item object
          const updatedItem = { ...item, quantity: item.quantity - 1};
          setTotalAmount((prevTotal) => {
            // Calculate the new total amount based on updated items
            return totalAmount-item.price*(item.quantity-1);
             
          });
          // Return the updated item
          return updatedItem;
        } else {
          // If ID doesn't match or quantity is 1, return the original item
          return item;
        }
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