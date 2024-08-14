import React, { useState } from 'react'
import axios from 'axios'

export function useSequentialdelete() {

const[runner3,setrunner3]=useState(true)


const sequentialdelete=async(_id)=>{
    try{const deletesequential=await axios.put('https://ecommerce-backend-teif.onrender.com/api/v1/sequentialdelete',{_id},{withCredentials:true})


setrunner3((pre)=>!pre)

}

catch(err){
    console.log(err.message)
}
}


  return {runner3,sequentialdelete}
}

