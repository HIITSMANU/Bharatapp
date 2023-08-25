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
import { Adminindex } from './pages/Adminindex'
function App() {

  const currentPath = window.location.pathname;

  const excludedPaths = ['/adminindex', '/alldata', '/dash', '/prodform', '/prodata'];

  const shouldExcludeNavbarFooter = excludedPaths.includes(currentPath);

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
    {!shouldExcludeNavbarFooter && <Navbar />}
  {/* {currentPath !== '/adminindex' && <Navbar />} */}
  {/* {currentPath !== '/adminindex' && <Footer />} */}
    {/* <Navbar/> */}
    <AllRoutes/>
    {!shouldExcludeNavbarFooter && <Footer />}
    {/* {currentPath !== '/adminindex' && <Footer />} */}
    {/* <Footer/> */}
    </>
     
  );
}

export default App;