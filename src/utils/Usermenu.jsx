import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Usermenu() {


  const loc=useLocation();
  return (
    <div className='admin-menu h-[88vh] mr-[1rem]      '>

    <div className='mt-[2rem] text-[2vw]  ml-[0.5rem]'  >User Menu</div>
    <div className='w-[20vw] h-[50vh]  flex flex-col gap-6    mt-[2rem] ml-[1.3rem] font-light bg-whitem  '>
    <NavLink  className={`text-[1.5vw]  options h-[3rem] w-[70%] pl-[1vw] flex items-center rounded ${loc.pathname.includes('profile')?'bg-orange-600':''}`}    to='/dashboard/user/profile' ><div>Profile</div></NavLink>
    <NavLink  className={`text-[1.5vw]  options h-[3rem] w-[70%] pl-[1vw] flex items-center rounded ${loc.pathname.includes('order')?'bg-orange-600':''}`}     to='/dashboard/user/order'  ><div>Orders</div></NavLink>

    
    </div>
    
    
        </div>
  )
}

export default Usermenu