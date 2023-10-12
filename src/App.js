import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Details from './pages/Details'
import CreateArticles from './pages/CreateArticles'

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/Createarticles" element={<CreateArticles/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App