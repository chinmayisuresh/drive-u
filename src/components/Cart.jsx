import {useContext} from 'react'; 
import {Winecontext} from '../context/Data';
import {useEffect} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Cartpage=()=>{
   
const cart=JSON.parse(localStorage.getItem('cart'));
const navigate = useNavigate();

const addtolocal = (e) => {
    localStorage.setItem('checkout',JSON.stringify(e));
    navigate('/checkout');
}
    
if(!cart){
    return (
        <>
        <h1>Cart page</h1>
    <p>No items added to the cart</p>
        </>
        )
}

    return (
          <>
        
          <div className='showing'>
          {cart.map((e)=>{
              return (
                  <>
                  <div className='show' key={e.shop}>
                  <p className='name'>{e.location}</p>
                  <div className='name'>Rating:{e.rating} stars</div>
                  <div className='name'>Discount Available:{e.discount}%</div>
                   <img src={e.image}></img><br></br> 
                  <button onClick={()=> addtolocal(e)}>Checkout</button>
                  
                  </div>
                  
                  </>
              )
          })}
          </div>
        
          

          </>
    );
}