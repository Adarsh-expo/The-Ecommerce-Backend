import React, { useEffect } from 'react'
import Header from '../utils/Header'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { insertdata } from '../Store/reducers/userreducer'
import { Link } from 'react-router-dom'
import headphone from '/headphone.png'
import Horizantlecart from '../utils/Horizantlecart'

function Home() {


  document.title="Homepage"
  return (
    <div className=' w-[100vw]  overflow-x-hidden  h-[100vh]  '>
      <Header/>
    
    <img className='w-[95%] mx-auto h-[65%]  rounded-lg object-cover mt-2' src='https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
    <div className=' text-center   font-medium     text-[4vw] '> Trending Collection</div>
 <Horizantlecart/>


    </div>
  )
}

export default Home