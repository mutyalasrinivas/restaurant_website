import { useContext } from "react";
import CartContext from "../../store/CartContext";
 
const Cart=({onClose})=>{
   const cartCtx=useContext(CartContext);
   const {items,totalAmount}=cartCtx;
   const removeHandler=(id)=>{
    cartCtx.removeItem(id)
    }
    const reduceHandler=(id)=>{
     cartCtx.decreaseQuantity(id)
    }
  return(
    <div>
         <ul>
          {items.map((item)=>(
            <li key={item.id}>
              {item.title} * {item.quantity} - Rs{item.price.toFixed(2)}-
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC7V4IwtWtU9_UFg6_MJ1lmAwJpU-MksCtA&s"
               style={{width:"20px",height:"20px",alignItems:"baseline", marginRight:"0px"}} alt="minimize" 
               onClick={()=>reduceHandler(item.id)}/>
            </li>
          ))}
         </ul>
         <div>
            <span>Total amount</span>
            <span>{totalAmount.toFixed(2)}</span>
         </div>
         <div>
           <button onClick={onClose}>Cancel</button>
           <button>Order</button>
         </div>
    </div>
  )
}
export default Cart;