import React, { useRef } from 'react'
import Topheader from '../components/Topheader'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Login() {

  const navigate = useNavigate()
  
async function handleSubmit(e){
  e.preventDefault()

  let form = new FormData(e.currentTarget)

  await axios.post("https://jamiukayode27.pythonanywhere.com/login/", form)

  .then((res) => {
   // alert("Login successfully")
  localStorage.setItem("user", JSON.stringify(res.data));
  console.log('Login successfully');
  navigate("/")
  })
  .catch((err) => {
    // console.log(err.response.data);
    if (err?.response?.data == "Invalid Credentials") {
      alert("Invalid Credentials")
    }else{
      for(let i in err?.response?.data){
        alert(i + "" + err?.response?.data[i])
      }
    }
  })
}


  return (
    <div className='login container'>
      <Topheader />
      <form className="container"  onSubmit={((e) => handleSubmit(e))}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="" className='form-label fw-bold '>Email</label>
            <input type="email" className="form-control" name='email' />
          </div>

          <div className="col-md-6">
            <label htmlFor="" className='form-label fw-bold '>Password</label>
            <input  type="password" className="form-control" name='password' />
          </div>
          <button type='submit' className="col-md-12 mt-4 fw-bold bg-primary
          border-0 p-2 rounded container text-white ">Login</button>

        </div>

      </form>


    </div>
  )
}

export default Login