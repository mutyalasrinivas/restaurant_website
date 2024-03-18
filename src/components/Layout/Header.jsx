import React from 'react';
import './HeaderStyles.css';
 

const Header=()=>{
 return(
    <div className='header'>
    <div className='header_left'>
      <h1 className='header_title'>Venkateswara Foods</h1>
    </div>
    <div className='header_right'>
    <a href='/'><img style={{width:"40px",height:'40px'}}
    src='https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_1280.png' 
    alt='cart-pic'/> </a>
    <a href='/'><img style={{width:"40px",height:'40px'}}
    src='https://cdn-icons-png.flaticon.com/512/3237/3237472.png' 
    alt='user-pic'/> </a> 
     </div>
    </div>
 )
}

export default Header;