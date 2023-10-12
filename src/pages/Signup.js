import React, { useState, useEffect, handleSubmit, useLayoutEffect, useRef } from 'react'
import Topheader from '../components/Topheader'
import axios from "axios"
function Signup() {


  async function handleSubmit(e) {
    e.preventDefault()

    let form = new FormData(e.currentTarget)

    await axios.post("https://jamiukayode27.pythonanywhere.com/signup/", form)
      .then((res) => {
        alert("Account created successfully")
      })
      .catch((err) => {
        for (let i in err?.response?.data) {
          alert(i + "" + err?.response?.data[i])
        }
      })

  }

  return (

    <div className="signup container ">
      <Topheader />
      <form className="container" onSubmit={((e) => handleSubmit(e))}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="" className='form-label'>FirstName</label>
            <input type="text" className='form-control' name='first_name' />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className='form-label'>LastName</label>
            <input type="text" className='form-control' name='last_name' />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className='form-label'>Username</label>
            <input type="text" className='form-control' name='username' />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className='form-label'>PhoneNumber</label>
            <input type="text" className='form-control' name='phone' />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className='form-label'>Email</label>
            <input type="email" className='form-control' name='email' />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className='form-label'>Password</label>
            <input type="password" className='form-control' name='password' />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className='form-label'>Photo</label>
            <input type="file" className='form-control' name='photo' />
          </div>

          <button type='submit' className='col-md-12 mt-3 
bg-primary btn  text-white fw-bold '>Signup</button>


        </div>
      </form>
    </div>
  )

}

export default Signup