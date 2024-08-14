import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Usermenu({size,setsize}) {


  const loc=useLocation();
  return (
    <div className={`admin-menu h-[88vh] mr-[1rem]   sidepanel2 pt-3  ${size<501&&"ml-[-15rem]"} `  }>
       <button   onClick={()=>{setsize(500)}}  className={`ml-[90%]  ${size>501 &&"hidden" }    mt-[2px]`}><i class="ri-close-line text-red-500 "></i></button>

    <div className='mt-[2rem] lg:text-[2vw] md:text-[2.3vw] text-[3vw] md-[2vw]  ml-[0.5rem]'  >User Menu</div>
    <div className='w-[20vw] h-[50vh]  flex flex-col gap-6    mt-[2rem] ml-[1.3rem] font-light bg-whitem  '>
    <NavLink  className={`lg:text-[1.5vw]  md:text-[1.7vw]  text-[2.5vw]    options h-[3rem] lg:w-[70%]  w-[75%] pl-[1vw] flex items-center  rounded ${loc.pathname.includes('profile')?'bg-[#FF0000] bg-opacity-70 text-white':''}`}    to='/dashboard/user/profile' ><div>Profile</div></NavLink>
    <NavLink  className={`lg:text-[1.5vw] text-[2.5vw] md:text-[1.7vw] options h-[3rem] lg:w-[70%]    w-[75%] pl-[1vw] flex items-center   rounded ${loc.pathname.includes('order')?'bg-[#FF0000]  bg-opacity-70   text-white':''}`}     to='/dashboard/user/order'  ><div>Orders</div></NavLink>

    
    </div>
    
    
        </div>
  )
}

export default Usermenu