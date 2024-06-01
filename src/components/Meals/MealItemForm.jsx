import React from "react";

const MealItemForm=()=>{
    const handleSubmit=()=>{

    }
  return(
    <>
    <form style={{display:"flex",flexDirection:"column" }} onSubmit={handleSubmit}>
        <label for="amount">Amount 
       <input type="number" name="amount" /></label>
       <button type="submit">+Add</button>
    </form>
    </>
  )
}
export default MealItemForm;