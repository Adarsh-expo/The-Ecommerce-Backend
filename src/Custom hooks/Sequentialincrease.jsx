import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export function useSequentialincrease() {

const[runner4,setrunner4]=useState(true)
const sequentialincrease=async(ele)=>{
    try{const{quantity,_id}=ele
console.log(_id)

    const increase=await axios.put('https://ecommerce-backend-teif.onrender.com/api/v1/sequentialincrease',{_id,quantity},{withCredentials:true})

    setrunner4((pre)=>!pre)}
    catch(err){

        console.log(err.message)
    }

}




  return {runner4,sequentialincrease}
}

