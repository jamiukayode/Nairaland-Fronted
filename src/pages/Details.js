import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function Details() {
  const { id } = useParams()

  const [data, setdata] = useState(null)

  console.log(data);

  useEffect(()=>{
    axios.get(`https://jamiukayode27.pythonanywhere.com/getarticle/${id}`)
    .then((res) => {
      setdata(res.data)
   
    })
    .catch((err) => console.log(err))
  },[id])

  return (
    <div>
      <h1 className="text-center fs-1 fw-bold text-primary  ">{data?.title}</h1>
      <p className=" fw-bold  fs-italic" dangerouslySetInnerHTML={{
        __html:data?.description
      }}></p>
<div className='d-flex justify-content-around '>
<img className='w-25 h-25  ' src={`https://jamiukayode27.pythonanywhere.com/${data?.image}`} alt={data?.title} /> <br />
      <img className='w-25 h-25 m-auto d-block ' src={`https://jamiukayode27.pythonanywhere.com/${data?.other}`} alt={data?.title} /> <br />
      
</div>
    </div>
  )
}

export default Details