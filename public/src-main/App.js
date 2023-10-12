import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import About from "./pages/About"
import Topheader from './Component/Topheader'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={ <Home/> }/>
    <Route path="/signup" element={ <Signup/> }/>
    <Route path="/login" element={ <Login/> }/>
    <Route path='/about' element={ <About/> }/>
    <Route path="/topheader" element={<Topheader/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App




