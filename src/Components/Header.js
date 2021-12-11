import React, { useContext, useEffect } from 'react'
import './Header.css'
import BasketContext from './Context';
import {Link} from 'react-router-dom'

import BasketProduct from './BasketProduct'

function Header(props) {
   const {basketLength , setBasketLength} = props
    const { basket } = useContext(BasketContext);
    

    function myFunction() {
        
        if(document.getElementById("myDropdown").style.display == "block"){
            document.getElementById("myDropdown").style.display = "none"
         }else{
            document.getElementById("myDropdown").style.display = "block"
         }
        
      }
      
     

    useEffect(() => {
    }, [basket , basketLength])

    return (
        
        <div className="header">
            <div className="header__text">
                <h3 >Rudresh Mishra</h3>
            </div>
            <div className="header__searchbox">
                <input type="search"></input>
                <button>search</button>
            </div>
            
                <div className="dropdown">
                    <button onClick={() =>{myFunction()}} className="dropbtn">Basket :{basketLength>-1?basketLength:0}</button>
                    <div id="myDropdown" className="dropdown-content">
                        {basket.map((item) =>{
                            return(
                                <BasketProduct item = {item} 
                                basketLength = {basketLength} setBasketLength = {setBasketLength}/>
                            )
                        })}
                       
                      
                    </div>
                </div>
            
            <div className="header__username">
                <h3>username</h3>
            </div>
            
            <div className="header__username">
                <h3>checkout</h3>
            </div>
            
                     
            


        </div>
        
    )
}

export default Header
