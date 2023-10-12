import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Topheader from '../components/Topheader'
import Ads from '../components/Ads'
import Homenews from '../components/Homenews'
import axios from 'axios'
function Home() {

  const [contents, setContents] =  useState([])

  useEffect(() =>{

    axios.get("https://jamiukayode27.pythonanywhere.com/getarticles/")
    .then((res) => setContents(res.data))
    .catch((err) => console.log(err))

  }, [])

  

  return (
    <div className='home'>
      <Topheader/>

    <div className="bottom-header container">
      <div className="card my-box-shadow border-end-0 rounded-circle-3 rounded-bottom-3  border-start-0 ">
        <h6 className="text-center fs-2 card-header">NAIRALAND NIGERIA FORUM</h6>
        <h6 className="text-left card-header">
          <Link>Nairaland&nbsp;/&nbsp;General:&nbsp;</Link><Link>Politics,</Link><Link>&nbsp;Crime,</Link>
          <Link>&nbsp;Romance,</Link><Link>&nbsp;Jobs/Vacancies,</Link><Link>&nbsp;Career,</Link>
          <Link>&nbsp;Business,</Link><Link>&nbsp;Investment,</Link><Link>&nbsp;Nysc,</Link>
          <Link>&nbsp;Education,</Link><Link>&nbsp;Autos,</Link><Link>&nbsp;Car Talk,</Link>
          <Link>&nbsp;Properties,</Link><Link>&nbsp;Health,</Link><Link>&nbsp;Travel,</Link>
          <Link>&nbsp;Family,</Link><Link>&nbsp;Culture,</Link><Link>&nbsp;Religion,</Link>
          <Link>&nbsp;Food,</Link><Link>&nbsp;Diaries,</Link><Link>&nbsp;Nairaland Ads,</Link>
          <Link>&nbsp;Pets,</Link><Link>&nbsp;Agriculture</Link>
          </h6>
        <h6 className='text-left card-header '><Link>Entertainment:&nbsp;</Link><Link>Jokes/Etc,</Link><Link>&nbsp;TV/Movies,</Link>
        <Link>&nbsp;Music/Radio,</Link><Link>&nbsp;Celebrities,</Link><Link>&nbsp;Fashion,</Link><Link>&nbsp;Events,</Link><Link>&nbsp;Sports,</Link>
        <Link>&nbsp;Gaming,</Link><Link>&nbsp;Forum Games,</Link><Link>&nbsp;Literature</Link>
        </h6>
        <h6 className="text-left  card-header">
          <Link>Science/Technology:,&nbsp;</Link><Link>&nbsp;Programming,</Link><Link>&nbsp;Webmasters,</Link>
          <Link>&nbsp;Computers,</Link><Link>&nbsp;Phones,</Link><Link>&nbsp;Art,&nbsp;Graphics&nbsp; & &nbsp;Video,</Link>
          <Link>&nbsp;Technology Market</Link>
        </h6>
        

      </div>
    </div>

    <Ads/>
    <Homenews contents={contents}/>
    <Ads/>

    <div className="text-center mb-3 rounded-2 py-2 naira-bg container">
    <h5>Member Online:</h5>
    <p>(<strong>2050 Members</strong> and <strong>8395 Guests</strong> online in <strong>last 5 minutes!</strong>)</p>
    </div>


    </div> 
       
  )
}

export default Home