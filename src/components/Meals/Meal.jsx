import React from "react";
import MealItemForm from "./MealItemForm";

const Meal=({title,description,price})=>{
   return <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"baseline",backgroundColor:'#E0B0FF',margin:"20px",width:"50%"}}>
     <div>
        <h2>{title}</h2>
        <h5>{description}</h5>
        <h2>{price}</h2>
     </div>
     <div >
        <MealItemForm/>
     </div>
    </div> 
}

export default Meal;