import React , {useState} from 'react';
import BasketContext from './Components/Context';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Checkout from './Components/Checkout';

function App() {

  const[basket , setBasket] = useState([])
  return (
    <BasketContext.Provider value={{
      basket: basket , setBasket: setBasket }} >
      
  
    <Router>
     
        <Routes>
          <Route path="/" element = {<Home />  }>
            </Route>
            <Route path="/checkout" element = {<Checkout />  }>
            </Route>
          
        </Routes>
    </Router>
    </BasketContext.Provider  >
  );
}

export default App;






