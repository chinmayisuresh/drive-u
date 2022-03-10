import {useContext} from 'react'; 
import {Winecontext} from '../context/Data';
import {useEffect} from 'react';
import { useState } from 'react';
import { Select } from './Selectt';

var x=0;
localStorage.setItem('cart',JSON.stringify([]));
export const Product=()=>{
   
const {list ,addtocart , paginate , hightolow}=useContext(Winecontext);
const  [page , setPage] = useState(0)

useEffect(()=>{
    paginate(page);
},[page]);

   console.log(list) 
if(list.length===0){
    return <div>LOADING...........</div>
}
    return (
          <>

           <Select />
            <button className='move' onClick={hightolow}>Discounts</button> <button>Ratings</button>
          <h1>SHOPS</h1>
          <div className='showing'>
          {list.map((e)=>{
              return (
                 
                  <div className='show' key={e.shop}>
                  <p className='name'>{e.location}</p>
                  <div className='name'>Rating:{e.rating} stars</div>
                  <div className='name'>Discount Available:{e.discount}%</div>
                   <img src={e.image}></img> <br></br>
                  
                  <button onClick={()=>{addtocart(e)}}>Checkout</button>
                  <div></div>
                  </div>
                  
              )
          })}
          </div><br></br>
          <br></br>
          <button id='btn1' disabled={page===0} onClick={()=> setPage(page-5)}>Prev</button>
         
          <button disabled={page==15} onClick={()=>setPage(page+5)}>Next</button>
          

          </>
    );
}
