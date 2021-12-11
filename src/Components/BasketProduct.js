import React, { useState , useContext,useEffect  } from 'react'
import './BasketProduct.css'
import BasketContext from './Context'


function BasketProduct(props) {
    const { basket  } = useContext(BasketContext);
    const [quantity, setQuantity] = useState(1)
    const { item  , basketLength , setBasketLength} = props

    function increase(item) {
        let a = quantity + 1
        setQuantity(a)
        let b = basketLength + 1
        setBasketLength(b)
    }

    function decrease(item) {
        if(quantity > 0)
        {
        let a = quantity - 1
        setQuantity(a)
        }else
        {
        let index = basket.indexOf(item)
        basket.splice(index , 1)
        }
        let b = basketLength - 1
        setBasketLength(b)
    }
    function remove(item){
        let index = basket.indexOf(item)
        basket.splice(index , 1)
        
        let a = basketLength - quantity
        //if(basket.length < 1)
       // {
       // setQuantity(a)
       // }
        
        setBasketLength(a)
        
        

    }
    useEffect(() => {
    }, [basket , basketLength , quantity])

    

    return (
        <div className="basketProduct">
            <img className="basketProduct_image" src={item.image}></img>
            <div className="basketProduct_box">
                <p className="basketProduct_title">{item.title}</p>
                <div className="basketProduct_box_lower">

                    <small>quantity</small>
                    <div className="basketProduct_box_lower_box">
                        <strong className="quantityChange" onClick={() => { increase(item) }}>+</strong>
                        <small className="quantity">{quantity}</small>
                        <strong className="quantityChange" onClick={() => { decrease(item) }}>-</strong>
                    </div>

                </div>
            </div>
            <button className = "button" onClick  = {() =>{remove(item)}}>Remove</button>
        </div>
    )
}

export default BasketProduct
