import React from "react";
import Meal from "./Meal";
    const meals=[{id:11,title:'andra',description:'dummy data..',price:22.3},{id:22,title:'veg',description:'dummy data..',price:25},{id:33,title:'vizagstyle',description:'dummy data..',price:98},{id:44,title:'kerala',description:'dummy data..',price:29},{id:55,title:'telangana',description:'dummy data..',price:45},{id:66,title:'ko',description:'dummy data..',price:2.3},{id:77,title:'tamil',description:'dummy data..',price:22.3}]
const Body=()=>{
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >
             
            {meals.map((meal)=><Meal key={meal.id} id={meal.id} title={meal.title} description={meal.description} price={meal.price} />)}
        </div>
    )
}
export default Body;