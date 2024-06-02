const Cart=({onClose})=>{
    const cartItems=[{id:'c1',name:"srini",amount:9,price:18.27}].map((item)=><li>{item.name}</li>)
  return(
    <div>
         {cartItems}
         <div>
            <span>Total amount</span>
            <span>27.99</span>
         </div>
         <div>
           <button onClick={onClose}>Cancel</button>
           <button>Order</button>
         </div>
    </div>
  )
}
export default Cart;