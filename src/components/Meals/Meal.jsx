import React from "react";

const Meal=({title,description,price})=>{
   return  <div style={{padding:'10px',textAlign:'center', border:'2px'}}>
        <h2>{title}</h2>
        <h5>{description}</h5>
        <h2>{price}</h2>
    </div>
}

export default Meal;