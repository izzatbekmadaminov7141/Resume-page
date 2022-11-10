import React from 'react'
// icons
import "bootstrap-icons/font/bootstrap-icons.css"
// Page
import Code from './Departments/Code';
import Edu from './Departments/Edu';
// helper page 
import Navbar from "./helper/Navbar";
import Resume from './helper/Resume';
import Home from './Departments/Home';
import Services from './Departments/Services';
import Messeger from "./Departments/Messeger"
import { Routes,Route, useLocation } from 'react-router-dom';
import{AnimatePresence} from "framer-motion"  
import HeaderStyled from './HeaderStyled';
function Header() {
  const loacation =useLocation();
  return (
     <header>
      <AnimatePresence>
        <HeaderStyled />
           <Resume />
        <Routes location={loacation} key={loacation.key}>
            <Route path='/' element={<Home />} />
            <Route path='/code' element={<Code />} />
            <Route path='/edu' element={<Edu />} />
            <Route path='/services' element={<Services />} />
            <Route path='/messeger' element={<Messeger />} />
        </Routes>
      <Navbar/>
      </AnimatePresence>
     </header>
  )
};




export default Header