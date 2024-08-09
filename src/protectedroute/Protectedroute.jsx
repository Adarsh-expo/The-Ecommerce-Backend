import React from 'react'
import { Outlet } from 'react-router-dom'

import Signup from '../components/Signup'
import { Navigate } from 'react-router-dom'
import Circlenav from '../utils/Circlenav'
import { useEffect,useState } from 'react'
import axios from 'axios'

function Protectedroute() {
console.log("jjjjjjjj")
const[isauth,setisauth]=useState(false)

useEffect(()=>{
const authenticate=async()=>{
  
  const res=await axios.get('http://localhost:3000/api/v1/user/userverification',{withCredentials:true})
console.log(res.data.status)
setisauth(res.data.status)

}

authenticate()


},[])




  return (
    
isauth?<Outlet/>:<Circlenav/>

  )
}

export default Protectedroute