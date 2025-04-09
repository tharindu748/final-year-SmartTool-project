import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculation from './pages/Calculation'
import Header from './components/Header' 
import Navbar from './components/Navbar' 
import Slider from './components/slider' // Import the Slider component


export default function Main() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <Slider />
    <Routes>
      <Route Path="/" element ={<Home />} />
      <Route path="/Calculation" element={<Calculation />} />
 
   </Routes>
    </BrowserRouter>
   
  )
}
