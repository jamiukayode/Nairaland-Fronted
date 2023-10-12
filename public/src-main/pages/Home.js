import React from 'react'
import Topheader from "../Component/Topheader"
import {AiFillApple} from "react-icons/ai"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home container '>
      <Topheader/>
    <AiFillApple size={70} color='orange' data-aos='fade-in' className='float-end'/>

    <Link to="/Login">
      <AiFillApple size={100} color='green'/> 
      </Link>
      <p>Click on the above Apple to Login</p>
    </div>
  )
}

export default Home