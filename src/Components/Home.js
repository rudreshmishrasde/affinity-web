import React , {useState , useEffect} from 'react'
import Header from './Header'
import ProductView from './ProductView'
import SideBar from './SideBar'
import './Home.css'
import  { productList } from '../productList'



function Home() {

    const [products , setProducts] = useState([])
    const [category , setCategory] = useState(null)
    const [basketLength , setBasketLength] = useState(0)
    const [allProducts, setAllProducts] =useState([])
    

    useEffect(() => {
        
    }, [category , products])
    
    useEffect(() => {
         setAllProducts(productList)
         setProducts(productList)
                   
                     },  [])
               
    return (
        <div className = "homepage">
            
            <Header basketLength = {basketLength} setBasketLength = {setBasketLength}/>
            <div className = "homepage__lowersection">
                
              <SideBar products = {products} setProducts = {setProducts}
                        allProducts = {allProducts} setAllProducts = {setAllProducts}
                        category = {category} setCategory = {setCategory}
                           
                        
                />
               
                
                <ProductView products = {products} setProducts = {setProducts}
                             category = {category} setCategory = {setCategory}
                             allProducts = {allProducts} setAllProducts = {setAllProducts}
                             basketLength = {basketLength} setBasketLength = {setBasketLength}              
                />
            </div>
            </div>
        
    )
}

export default Home
