import React from 'react'
import { Circles } from 'react-loader-spinner'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Circlenav() {

const navo=useNavigate()
    const[no,setno]=useState(0);

useEffect(()=>{

setInterval(()=>{setno((pre)=>pre+1)},1000)

},[])
 if(no>6){navo('/')}

  return (
    <div className='flex flex-col items-center h-[100vh] w-[100vw]  justify-center '><Circles height="100" width="100"  wrapperStyle=
    {{display:"flex",   justifyContent:"center",height:"30vh",alignItems:"center"}}/>
    
    <div className='text-[1.3vw] '>Unauthorised  access take you to Homepage</div>
    <div   className='text-[1.3vw] '>Wait {no}</div>

    
    
    </div>
  )
}

export default Circlenav