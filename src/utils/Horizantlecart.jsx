import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Productcall from '../Store/actions/productaction'
import { Link } from 'react-router-dom'
import { Inserttocart } from '../Store/reducers/cartreducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from './Header';
import addtocart from '../Store/actions/Cartaction'
import axios from 'axios'
 import { useAddToCartBackend } from './Addtocartbackend'


function Horizantlecart() {
const product=useSelector((state)=>state.Products.value)
console.log(product)
const Headphone=product.filter((ele)=>ele.productsubcategory==="Headphone")



console.log(Headphone)
const dis=useDispatch();
useEffect(()=>{
  
  dis(Productcall())

},[])





// const addtocartbackend=async(ele)=>{
//   const ele2={...ele,choosenquantity:1}
 
//   try{ const {data:{message}}=await
//   axios.post('https://ecommerce-backend-teif.onrender.com/api/v1/Inserttocart',{id:ele2._id,choosenquantity:ele2.choosenquantity},{withCredentials:true})
//   console.log(message)
 
//   toast.success(message,customToastOptions)
//   setrunner((pre)=>!pre)
  
// }
// catch(err){
//   console.log(err.message)
// }




//   }

const{addtocartbackend, runner}=useAddToCartBackend() //created custom hook
useEffect(()=>{
  dis(addtocart())
  console.log("uu")
  console.log(product)},[runner])
  return (

 <div className='flex w-[100vw]   flex-wrap items-center justify-center mt-[2rem] gap-[3rem] '>
{Headphone.map((ele, index) => (
        <div  className='mt-[2rem] flex flex-col gap-2  items-center justify-center rounded-xl hover:scale-105  shadow-2xl   w-[30vw]   md:w-[24vw]    lg:w-[15vw] min-h-[25vw]'        key={index} >
          <Link    to={`/Bestseller/headphone/${ele.slug}`}    className=' flex items-center  flex-col '>
             <img className='object-contain  w-[96%]  lg:w-[90%] h-[15vw]' src={ele.photo} alt={ele.name} />
             <span className=' text-[3vw] md:text-[2vw] lg:text-[1.5vw] mx-2 my-1 text-center text-zinc-700'>{ele.name.slice(0,30)}...</span>
              <span className=' text-[2.4vw]  md:text-[1.7vw]  lg:text-[1.1vw]'>${ele.price}</span>
              
            </Link><button   onClick={()=>{   addtocartbackend(ele)}}        className='bg-yellow-400 mb-2       rounded-2xl lg:w-[8vw] w-[13vw]  text-[2.3vw]  md:text-[1.6vw]   lg:text-[1.2vw] py-1'>Add to cart </button></div>  
          ))}


{/* <div className='absolute w-screen top-0 right-0 h-screen  opacity-20 bg-zinc-700 '></div> */}
    </div>
  
  )
}

export default Horizantlecart