import React, { useEffect } from 'react'
import Product from './Product'
import './ProductView.css'

function ProductView(props) {

    
    const { products, setProducts,category ,  allProducts, basketLength ,setBasketLength} = props
    

    useEffect(() => {
        
        
    }, [category])

    useEffect(() => {
        let tempArray = []
            allProducts.map((obj) =>{
                if(obj.category == category)
                {
                    tempArray.push(obj)
                }
            })
              setProducts(tempArray)
              
             
          
    }, [products])

    return (
       <div className="productView">
                    
            {category == null||category =="AllCategories" ?allProducts.map((item) =>{
                      return(
                          <Product item = {item} 
                          basketLength = {basketLength} setBasketLength = {setBasketLength}/>
                      )  

                }):products.map((item) =>{
                    return(
                        <Product item = {item}
                        basketLength = {basketLength} setBasketLength = {setBasketLength}/>
                    )})}
                     </div>
                
    )
}

export default ProductView
