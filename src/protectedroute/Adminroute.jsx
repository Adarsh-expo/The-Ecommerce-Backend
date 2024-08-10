import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Circlenav from '../utils/Circlenav';

function Adminroute() {
    const [isauthenticate,setisauthenticate]=useState(false);
    useEffect(()=>{
    const verifyrouteaccess=async()=>{
        try{ const res=  await axios.get('https://ecommerce-backend-teif.onrender.com/api/v1/user/admin-auth',  {withCredentials: true})
    
    setisauthenticate(res.data.status);}
    catch(err){
    console.log(err)
    }
       
    
    }
    verifyrouteaccess();
    
    
    },[])
    
    
      return (isauthenticate?<Outlet/>:<Circlenav/>
   
         
      )




  
}

export default Adminroute