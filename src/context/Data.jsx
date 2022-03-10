import { useState } from "react";
import { createContext } from "react";
import { ReactReduxContext } from "react-redux";
import { Garage } from "../components/shop";


export const Winecontext = createContext();
export const WinecontextProvider=({children})=>{


    const [list,setList]=useState([]);
    const [cart,setCart]=useState([]);

    const garage = Garage;

    const paginate = (n)=>{

        let arr = [];
        
        for(let i=n ; i<n+5 ; i++){
            arr.push(garage[i])
        }

        setList(arr)

    }
   
    const addtocart=(c)=>{
        let g=JSON.parse(localStorage.getItem('cart'));
        g.push(c);
        setCart(g);
        console.log(g);
        localStorage.setItem('cart',JSON.stringify(g));
    }

    const setChange = (value) => {
   
        let arr = garage.filter((e)=> {

            let z = e.location.split(' ');
              z = z[1].toLocaleLowerCase();
         if(z.startsWith(value.toLocaleLowerCase())) return e
           
        });

        console.log(arr)

        setList(arr);
    }
    const hightolow=()=>{
        let high=list.sort((a,b)=>a.discount-b.discount);
        console.log(high)
        setList(high);
        console.log(list)
    
    }
     
    return (
    <Winecontext.Provider value={{list ,addtocart  , paginate , setChange , hightolow}}>{children}</Winecontext.Provider>)
}