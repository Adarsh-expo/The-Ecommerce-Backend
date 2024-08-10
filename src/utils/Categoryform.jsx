import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from '../utils/Header'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import allcategcall from '../Store/actions/categoriecallaction';

function Categoryform({set,data}) {

const des=useDispatch()
    //universal categories data to search id for specific slug so i can send its id as params 


useEffect(()=>{

des(allcategcall())//even if we refresh page it should call action to generater category in redux state

},[])


const categoriesdata=useSelector((state)=>state.Categories.value)
console.log(categoriesdata)




    const params=useParams()
    console.log(params)


  const object=categoriesdata.find((ele)=>ele.slug===params.slug)





const [obi,setobi]=useState(data[0].name?data[0].name:'')



const submithandler=async(e)=>{
e.preventDefault();
    try{ 


     const res=  data[0].name?await axios.put(`http://localhost:3000/api/v1/category/${params.slug?'updatesubcategory':'updatecategory'}/${data[0]._id}`,
     {name:obi},{withCredentials:true} ,{header:{'Content-Type': 'application/json'}})
     :await axios.post(`http://localhost:3000/api/v1/category/${params.slug ?`createsubcategory/${object._id}`:'createcategory'}`,
     {name:obi},{withCredentials:true} ,{header:{'Content-Type': 'application/json'}})



res.data.success?toast.success(res.data.message,customToastOptions):toast.warn(res.data.message,customToastOptions)
setTimeout(()=>{const[hide,sethide]=set;
sethide(false)},3000)



}
   
catch(err){
    console.log(err)
}



}


  return (
    


<form    onSubmit={submithandler}   className='flex gap-[1rem] '>

    <input   placeholder='Category'     onChange={(e)=>{setobi(e.target.value)}}  value={obi}  type='text' className='w-[13vw]     h-[3rem] rounded text-[1.6rem] font-light   outline-none border-[2px] border-red-500'  />
    <input   className='text-[1.7rem] font-light bg-red-600 rounded px-[5px]  ' type='submit' />
    
</form>




    
  )
}

export default Categoryform