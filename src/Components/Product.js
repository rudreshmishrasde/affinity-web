import React  , {useEffect, useContext, useState} from 'react'
import './Product.css'
import BasketContext from './Context'

function Product(props) {
    const {item , basketLength , setBasketLength} = props
    
    const { basket, setBasket  } = useContext(BasketContext);
     
    
    
    useEffect(() => {
    }, [basket , basketLength])
    
    
    function addToBasket(item){
        
        let tempArray = [...basket]
        tempArray.push(item)
        setBasket(tempArray)
        let a = basketLength + 1 
        setBasketLength(a)
    }

    
    return (
        <div className="product">

                
                <p>{item.title}</p>
                
                
                <img className="product__image" src={item.image}></img>
                <button  className="product__button" onClick = {() =>{addToBasket(item)}} >Add To Basket</button>
                
                

        </div>
    )
}

export default Product                
                
                
               
                

