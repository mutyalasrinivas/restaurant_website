import React from "react";
import Meal from "./Meal";
    const meals=[{id:'m1',title:'andra',description:'dummy data..',price:22.3},{id:'m2',title:'veg',description:'dummy data..',price:25},{id:'m3',title:'vizagstyle',description:'dummy data..',price:98},{id:'m4',title:'kerala',description:'dummy data..',price:29},{id:'m5',title:'telangana',description:'dummy data..',price:45},{id:'m6',title:'ko',description:'dummy data..',price:2.3},{id:'m7',title:'tamil',description:'dummy data..',price:22.3}]
const Body=()=>{
    return(
        <div>
             
            {meals.map((meal)=><Meal key={meal.id} title={meal.title} description={meal.description} price={meal.price} />)}
        </div>
    )
}
export default Body;