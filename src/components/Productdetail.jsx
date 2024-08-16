import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { Inserttocart } from '../Store/reducers/cartreducer'
import Header from '../utils/Header'
import Slickcomponent from '../utils/Slickcomponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addtocart from '../Store/actions/cartaction'
import { useAddToCartBackend } from '../utils/Addtocartbackend'
import Starcomponent from '../utils/Starcomponent'
import '../styles/Productdetail.css'


function Productdetail() {

const des=useDispatch();
const cartdata=useSelector((state)=>state.Cart.value)

    const {subcategory,productslug}=useParams()
    console.log(subcategory,productslug)
const[singleproduct,getsingleproduct]=useState({});
const[similarproduct,setsimilarproduct]=useState([]);
useEffect(()=>{
const callsingleproduct=async()=>{

const res=await axios
.get(`http://localhost:3000/api/v1/product/singleproduct/${productslug}`)

getsingleproduct(res.data[0])
console.log(res.data[0])


}

callsingleproduct()
},[productslug])

useEffect(()=>{
const similarproduct=async()=>{
console.log(singleproduct)
if(singleproduct._id){const res=await axios.get(`http://localhost:3000/api/v1/product/similarproduct/${singleproduct._id}/${singleproduct.categoryid}`)

setsimilarproduct(res.data);
console.log(res.data)}
  

}

similarproduct();




},[singleproduct])

const{addtocartbackend, runner}=useAddToCartBackend()

useEffect(()=>{des(addtocart())},[runner])


  return (
  <div className='overflow-x-hidden  h-screen w-screen overflow-y-hidden'>
  
  <Header/><div className='overflow-x-hidden pb-48  h-screen w-screen overflow-y-auto'>

    
    <div className=' w-[70vw] mt-3 pt-3  mx-auto  productdetailbox  flex justify-center gap-2 items-center
       md:min-h-[30vw]    lg:min-h-[30vw]'>   
    
<img className='h-[28vw] imagedetailsec   object-contain w-[45%]'
   src={singleproduct.photo}  />
   <div className=' flex flex-col detailsec    px-3   rounded-lg pl-4  mb-[3rem]  min-h-[30vw] w-[60%]'>
      <span className='lg:text-[1.7vw]  text-zinc-800 '>{singleproduct.name}</span>
<div className='flex gap-2 items-center'><Starcomponent  star={2}/><span className='text-zinc-400 lg:text-[1rem] md:text-[0.6rem] text-[0.5rem]'>(28 Customer Review)</span></div>
      <span className='text-[0.6rem] lg:text-[1rem]  mt-6 flex flex-col    '><span className='font-semibold '>Description:</span>{singleproduct.description}
      </span>
      <div className='flex  gap-[30%] mt-3 items-center '>
        <div className='flex justify-center items-center flex-col text-zinc-500'>
          <i class="ri-truck-line text-black bg-zinc-300 px-3 rounded-lg font-semibold  lg:text-[1.5vw] md:text-[2vw]  text-[3.3vw]"></i><div className='lg:text-[1vw] text-[0.5rem] '>Free Delivery</div> </div>
         <div className='flex text-zinc-500 flex-col items-center '><i class="ri-loop-right-line     lg:text-[1.5vw] md:text-[2vw] bg-zinc-300 px-3 rounded-lg text-black font-semibold text-[3.3vw]"></i> <div className='lg:text-[1vw] text-[0.5rem]'>30 Days Repacement</div></div></div>
<hr className='w-[70%] mt-2  bg-black '/>
<div className='text-zinc-400 lg:text-[1rem] md-[0.8rem] text-[0.7rem]'>In Stock 6</div>
      <span  className='lg:text-[1.4rem]  md:text-[1rem] text:[0.8rem]  font-medium mb-3 mt-3   text-red-400 '>₹{singleproduct.price}</span>
      <div className='flex gap-[2rem]'>
      <button onClick={()=>{addtocartbackend(singleproduct)}}      className='bg-orange-500 text-white lg:text-[1.2vw]  md:text-[1.2vw] text-[3vw]  detailbutton rounded  px-3 py-2   hover:scale-105 font-medium '>Add to cart</button>
      </div>
      
      
          </div>
          
          </div>
    
<div className='w-[100vw] text-center mb-3 mt-[3vw] font-semibold text-zinc-800  lg:text-[2vw] md:rtext-[3vw] text-[4vw]'>Get the simalr Products</div>



<Slickcomponent similarproduct={similarproduct} subcategory={subcategory}   />






      </div></div>
  
  )
}

export default Productdetail
// to={`/products/${subcategory}/${ele.slug}`}