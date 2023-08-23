import React from 'react';
import './App.css';
//import './pages/OtherJwellery.css';
//import './Components/Navbar.css';
//import './pages/Homepage.css'
//import './pages/Footer'
//import { FindStore } from './pages/FindStore';
import Navbar from './Components/Navbar';
//import Homepage from './Pages/Homepage';
//import Cart from './pages/Cart';
//import Digital from './Components/DigitalGold';
//import { Earrings } from './pages/Earrings';
import {Footer} from './pages/Footer'
import { AllRoutes } from './AllRoutes';
// import {Gifting} from './Components/Gifting';
// import { AllRoutes } from './AllRoutes';
//import { Cities } from './pages/Cities';
/*import { Services } from './pages/Services';*/
//import { Item } from './pages/Item';
//import { Products } from './pages/Products';
//import { AllRoutes } from './pages/AllRoutes';
function App() {
  return (
    /*<h1>Hello</h1>*/
    /* <FindStore />
      <Cities />
      <Services/>
      <Item/>
      <AllRoutes/>
      <Products/>
      <Navbar/>
      <Homepage />
      <Gifting/>  
      <AllRoutes/> 
    <FindStore>*/
     
    <>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </>
     
  );
}

export default App;