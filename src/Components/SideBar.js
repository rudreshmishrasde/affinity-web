import React, { useState , useEffect } from 'react'
import './SideBar.css'


function SideBar(props) {

        const {  allProducts ,category , setCategory , products , setProducts} = props
         const [categoryArray , setCategoryArray] = useState([])
         

           function allCategories(){
               setCategory("AllCategory")
               
           } 

        function selectCategory(item){
          setCategory(item)
                }


        useEffect(() => {
        
        }, [category , products])


        useEffect(() => {
            
                allProducts.map((item) =>{
                    if(categoryArray .indexOf(item.category) < 0)
                    {
                    categoryArray .push(item.category)
                    }
                    
                })
                setCategoryArray(categoryArray )
                

            }, [categoryArray , allProducts])         
                    


 return (
        <div className = "sidebar">
             <h3 onClick = {() =>{allCategories()}}>AllCategories</h3>

            {categoryArray.map((item) =>{
                return(
                <div className = "sidebar__category" onClick = {() =>{selectCategory(item)}} >
                <h3 >Category{item}</h3>
            </div>)
            })}
            
           
        </div>
    )
}

export default SideBar
