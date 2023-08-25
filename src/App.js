import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {Footer} from './pages/Footer'
import { AllRoutes } from './AllRoutes';
import { Adminindex } from './pages/Adminindex'
function App() {

  const currentPath = window.location.pathname;

  const excludedPaths = ['/adminindex', '/alldata', '/dash', '/prodform', '/prodata','/team'];

  const shouldExcludeNavbarFooter = excludedPaths.includes(currentPath);

  return ( 
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