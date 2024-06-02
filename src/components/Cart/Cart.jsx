import { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cart=({onClose})=>{
   const cartCtx=useContext(CartContext);
   const {items,totalAmount}=cartCtx;
  return(
    <div>
         <ul>
          {items.map(item=>(
            <li key={item.id}>
              {item.title} * {item.quantity} - Rs{item.price.toFixed(2)}
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