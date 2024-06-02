import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";

const MealItemForm=({meal})=>{
  const cartCtx=useContext(CartContext);
  const [quantity,setQuantity]=useState(1);
     const handleSubmit=(e)=>{
        e.preventDefault()
        const itemToAdd={
           ...meal,
           quantity:+quantity,
        };
        cartCtx.addItem(itemToAdd);
        
    }
  return(
    <>
    <form style={{display:"flex",flexDirection:"column" }} onSubmit={handleSubmit}>
        <label for="quantity">Quantity 
       <input type="number" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/></label>
       <button type="submit">+Add</button>
    </form>
    </>
  )
}
export default MealItemForm;