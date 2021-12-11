import React , { useState , useContext,useEffect  } from 'react'
import BasketContext from './Context'
import CheckoutProduct from './CheckoutProduct'
import Header from './Header';

function Checkout() {
    const { basket  , setBasket } = useContext(BasketContext);

    useEffect(() => {
    }, [basket])

    return (
        <div>
            <Header/>
            {basket.map((item) =>{
                return(
                    <CheckoutProduct item = {item}/>
                )
            })}
        </div>
    )
}

export default Checkout
