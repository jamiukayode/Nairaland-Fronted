import React from 'react'
import { Link } from 'react-router-dom'

function Topheader() {
  return (
    <div data-aos='fade-in' className='topheader card'>

      <img src=".././logo1.png" alt="" className='logo card-img-top ' />

      <p className='text-center'>Welcome,
        <strong>Guest:</strong>
        <Link to="/Signup">Register on Nairaland</Link>&nbsp;
        <Link to="/Login">LOGIN!</Link>&nbsp;
        <Link to="">Trending</Link>&nbsp;
        <span>/</span>&nbsp;
        <Link to="">Recent</Link>&nbsp;
        <Link to="">News</Link>
      </p>

      <p className="text-center">
<strong>Stats:</strong>&nbsp; 3,066,961 members, 7,542,697 topics.  &nbsp;
<strong>Date:</strong> Thursday, 17 August 2023 at 04:23 PM
      </p>

     <div className="container">
      <div className="d-flex">
      <input type="text" className='form-control bg-info bg-opacity-25 ' />
       <button className='btn bg-primary text-white fw-bolder '>search</button>
      </div>
     </div>

    </div>



  )
}

export default Topheader


