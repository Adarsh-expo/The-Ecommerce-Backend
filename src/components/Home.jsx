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
    <div className=' w-[100vw]  overflow-x-hidden h-[100vh] '><Header/>
    
    <div className='  bg-zinc-300  theback  items-center mt-[2rem] basis-2/3 w-[95%] mx-auto rounded-2xl  flex  min-h-[500px]   '> 
    <div className='flex flex-col ml-[1rem] rrr   h-[100%]  '>
    <span className=' beat text-[1vw] mt-[1rem] font-medium' > The Incredible Beat With   </span>
    <span className=' beat2  text-[5vw] mt-[-0.7rem]   font-bold'> Wireless  </span>
    <span className=' beat3 text-[10vw] font-bold   mt-[-2rem] text-white'> HEADPHONES </span>
    
    <Link><button className='bg-red-500   hover:scale-105  text-white h-[2rem] text-center rounded w-[13rem]'>Hurry Up Shop Now</button></Link>
    </div>

    <img className='h-[30vw]   w-[4vw]  advertisment my-auto basis-1/3 object-cover'  src={headphone}/>
     
     
     </div>
    <div className=' text-center   font-semibold     text-[4vw] '> Best Seller Product  </div>
 <Horizantlecart/>


    </div>
  )
}

export default Home