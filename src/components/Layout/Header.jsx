import React, { useState ,useContext} from 'react';
import './HeaderStyles.css';
import ModalCart from '../UI/ModalCart';
import Cart from '../Cart/Cart';
import CartContext from '../../store/CartContext';
 

const Header=()=>{
  const [isModalOpen,setIsModalOpen]=useState(false);
  const openModal=()=>setIsModalOpen(true)
  const closeModal=()=>setIsModalOpen(false)
 
  const cartCtx=useContext(CartContext);
  const itemsCount=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.quantity
  },0)

 return(
    <div className='header'>
    <div className='header_left'>
      <h1 className='header_title'>Venkateswara Foods</h1>
    </div>
    <div className='header_right'>
    <a href='#' onClick={openModal}><img style={{width:"40px",height:'40px'}}
    src='https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_1280.png' 
    alt='cart-pic'/><span style={{fontFamily:"fantasy",color:"white"}}>{itemsCount}</span> </a>
    <a href='/'><img style={{width:"40px",height:'40px'}}
    src='https://cdn-icons-png.flaticon.com/512/3237/3237472.png' 
    alt='user-pic'/> </a> 
     </div>
     {isModalOpen&&
     <ModalCart onClose={closeModal}>
      <Cart onClose={closeModal}/>
     </ModalCart>
     }
    </div>
 )
}

export default Header;