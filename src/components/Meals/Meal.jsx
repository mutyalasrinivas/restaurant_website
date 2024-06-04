import React from "react";
import MealItemForm from "./MealItemForm";

const Meal=({id,title,description,price})=>{
   return <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"baseline",backgroundColor:'#E0B0FF',margin:"5px",width:"50%"}}>
     <div style={{padding:"2px"}}>
      <p>{id}</p>
        <h7>{title}</h7>
        <p>{description}</p>
        <p>{price}</p>
     </div>
     <div >
        <MealItemForm meal={{id,title,description,price}}/>
     </div>
    </div> 
}

export default Meal;