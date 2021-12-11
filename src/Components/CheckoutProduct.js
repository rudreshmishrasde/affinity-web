import React from 'react'

function CheckoutProduct(props) {
    const {item} = props

    console.log("this is checkoutProduct")
    return (
         <div>
                <h1>{item.title}</h1>            
        </div>
    )
}

export default CheckoutProduct
