import React, { useState , useEffect } from 'react'
import './SideBar.css'


function SideBar(props) {

        const {  allProducts ,category , setCategory} = props
         const [categoryArray , setCategoryArray] = useState([])
         
        function selectCategory(item){
          setCategory(item)
                }


        useEffect(() => {
        
        }, [category])


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
