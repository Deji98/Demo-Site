import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar"
import Header from './Header';

const Sharedlayout = () => {
  return (
  <div className='heading'>
  <Header />
 <Navbar />
      <Outlet />
  </div>
   
    
    
    
    
  );
};
export default Sharedlayout;