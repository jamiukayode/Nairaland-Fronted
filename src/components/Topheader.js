import React from 'react'
import {Link} from 'react-router-dom'

function Topheader() {
  return (
    <div className="topheader my-box-shadow container card">
        <img src="./../logo1.png" className="logo card-img-top "/>
        <p className='text-center'>Welcome, <strong>&nbsp;Guest: </strong>
        <Link to="/signup">Register on Nairaland </Link> &nbsp;/&nbsp;
        <Link to="/login">LOGIN! </Link>&nbsp;/&nbsp;
        <Link to="/"  >Trending </Link>&nbsp;/&nbsp;
        <Link to='/'>Recent </Link>&nbsp;/&nbsp;   
        <Link to="/Createarticles">Create  </Link>      
        </p>
        <p className='text-center'>
        <strong>Stats: </strong>3,066,959 members, 7,542,679 topics. 
        <strong>Date: </strong>Thursday, 17 August 2023 at 04:11 PM
        </p>
        <div className="mb-3 container w-75 gap-2 d-flex">
          <input type="text"
            className="form-control rounded-5 " name="" id="" aria-describedby="helpId" placeholder=""/>
            <button type="button" className="btn btn-light border-black rounded-5 fw-bold ">search</button>
        </div>
    </div>
  )
}

export default Topheader