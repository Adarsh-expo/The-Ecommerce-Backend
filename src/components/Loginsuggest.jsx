import React from 'react'
import cartimg from '/shoppingcart.png'
import Header from '../utils/Header'
import { Link } from 'react-router-dom'
function Loginsuggest() {
  return (
    <div className='h-screen w-screen overflow-x-hidden'><Header/><div className='bg-black flex flex-col  items-center gap-3 h-screen w-screen '>
        
        <img className='w-[45%] max-w-[380px]  mt-10 lg:mt-2  min-h-[20vw] object-cover' src={cartimg}/>

        <div className='text-white mt-8   lg:text-[2rem]   text-[1rem]'>Missing cart items?</div>
       
<Link to='/signup'><button className='lg:text-[1.6rem] tetx:[1.1rem]  hover:scale-105 px-2 py-1 w-[8rem] mt-9 bg-red-600 rounded text-white'>LOGIN   </button>
</Link>






        
        
        </div></div>
    
  )
}

export default Loginsuggest