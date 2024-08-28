import React from 'react'
import Usermenu from '../utils/Usermenu'
import Header from '../utils/Header'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import man from '/man.png'
function Profile() {
    document.title="Your Profile"

const user=useSelector((state)=>state.User.value)
console.log(user)

    const[size,setsize]=useState(window.innerWidth)

    useEffect(()=>{
    window.addEventListener('resize',()=>{
    
      const sizewidth=window.innerWidth
      setsize(sizewidth)
    })
    
    
    },[])



  return (<div className='h-screen w-screenn overflow-y-hidden overflow-x-hidden'> 
    
    <Header/>
    
     <div className='flex relative '>
     <button onClick={()=>{setsize(501)}} className='absolute top-1 left-1 hover:scale-105'> <i className={`ri-menu-line  text-[1.4rem] text-red-600 ${size>500 && "hidden"} `}></i></button>
    
    <Usermenu  size={size} setsize={setsize}/>
  <div className='flex-grow  overflow-y-auto  flex   justify-center'>
    
     <div className='lg:w-[55%] md:w-[55%] w-[60%] mt-7 rounded shadow-md h-[85%]  max-h-[100%] max-w-[500px] flex flex-col pl-3 pr-3  '>
      
      <div className='text-[2vw]'>User Profile</div>
      <div className='relative  w-fit'> <i class="ri-add-line  text-[#FE6365] text-[3vw] hover:rotate-12  left-auto top-auto  absolute"></i><img className='lg:h-[10vw] md:h-[15vw] md:w-[15vw] lg:w-[10vw] h-[20vw] w-[20vw]   rounded-full' src={user.avatar?user.avatar:"https://t4.ftcdn.net/jpg/04/87/28/07/240_F_487280776_70nVPeKBJquslGgmpLrWQuEJ34QKahzR.jpg"}/></div>
      
     <div className='text-blue-300 mt-3  lg:text-[1vw] text-[2.5vw]'>ID:{user._id}</div>
     
     
     <div className='flex  items-center mt-3  gap-[30%]'><span className='lg:text-[1.2vw] md:text-[2vw] text-[3.9vw] text-zinc-500 basis-1/4'>Name:</span><span className='lg:text-[1vw] text-[3.7vw] md:text-[1.2vw] basis-3/4 text-zinc-400'>{user.username}</span></div>
     <div   className='flex items-center   gap-[30%]'><span className='lg:text-[1.2vw]  md:text-[2vw] text-zinc-500 text-[3.9vw]   basis-1/4'>Email:</span><span className='lg:text-[1vw] text-[3.7vw] md:text-[1.2vw] basis-3/4 text-blue-400'>{user.email}</span></div>
     <div className='flex items-center gap-[30%]'><span className='lg:text-[1.2vw]   md:text-[2vw] text-zinc-500 basis-1/4 text-[3.9vw]'>Address:</span><span className='lg:text-[1vw] basis-3/4 text-zinc-400 md:text-[1.2vw] text-[3.7vw]'>{user.address}</span></div>
     <div className='flex items-center  gap-[30%]' ><span className='lg:text-[1.2vw]  md:text-[2vw] text-zinc-500 basis-1/4 text-[3.9vw]'>Phone:</span><span className='lg:text-[1vw] basis-3/4 text-zinc-400 md:text-[1.2vw] text-[3.7vw]'>{user.phone}</span></div>
     <div className='flex items-center  gap-[30%]'><span className='lg:text-[1.2vw]   md:text-[2vw] text-zinc-500 basis-1/4 text-[3.9vw]'>Role:</span><span className='lg:text-[1vw] basis-3/4 text-zinc-400 md:text-[1.2vw] text-[3.7vw]'>{user.role}</span></div>
     <button className='bg-[#FE6365] w-[50%] mb-3 ml-3 mt-4  text-white rounded py-2  lg:text-[1vw] md:text-[1.2vw]  text-[3.7vw]'>Edit Profile</button>
     
     
     
     
     </div>
  
  
  
  
  
  </div>

</div> 



</div>
  
  )
}

export default Profile