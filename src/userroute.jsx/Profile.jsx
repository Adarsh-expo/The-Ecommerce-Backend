import React from 'react'
import Usermenu from '../utils/Usermenu'
import Header from '../utils/Header'
import { useState,useEffect } from 'react'
function Profile() {
    document.title="Your Profile"



    const[size,setsize]=useState(window.innerWidth)

    useEffect(()=>{
    window.addEventListener('resize',()=>{
    
      const sizewidth=window.innerWidth
      setsize(sizewidth)
    })
    
    
    },[])



  return (<div> 
    
    <Header/>
    
     <div className='flex relative '>
     <button onClick={()=>{setsize(501)}} className='absolute top-1 left-1 hover:scale-105'> <i className={`ri-menu-line  text-[1.4rem] text-red-600 ${size>500 && "hidden"} `}></i></button>
    
    <Usermenu  size={size} setsize={setsize}/>
  <div className=''>profile</div>

</div> </div>
  
  )
}

export default Profile