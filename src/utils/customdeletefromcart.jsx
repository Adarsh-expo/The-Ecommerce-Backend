import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from './Header';


   export function usecustomdeletefromcart() {
const [runner2,setrunner2]=useState(true)

const deletefromcart=async(_id)=>{
    console.log(_id)
    try{const deleteproduct=await axios.delete('https://ecommerce-backend-teif.onrender.com/api/v1/deletefromcart',{data:{_id},
    withCredentials: true})

toast.success(deleteproduct.data.message)
setrunner2((pre)=>!pre)

}

catch(err){

    console.log(err.message)
}

}

  return {runner2,deletefromcart}
   
  
}
