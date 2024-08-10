import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import { Circles } from 'react-loader-spinner'
import Circlenav from '../utils/Circlenav'
function Userroute() {
const [isauthenticate,setisauthenticate]=useState(false);
useEffect(()=>{
const verifyrouteaccess=async()=>{
    try{ const res=  await axios.get('https://ecommerce-backend-teif.onrender.com/api/v1/user/user-auth',  {withCredentials: true})

setisauthenticate(res.data.status);
console.log(res.data.status)

}
catch(err){
console.log(err)
}
   

}
verifyrouteaccess();


},[])


return (isauthenticate?<Outlet/>:<Circlenav/>)
}

export default Userroute