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

const addtocart=async(ele)=>{
  const ele2={...ele,choosenquantity:1}
des(Inserttocart(ele2))
toast.success('Added to cart')
}


  return (
  <div className='overflow-x-hidden overflow-y-hidden'>
  
  <Header/><div className='overflow-x-hidden '>

    
    <div className=' w-[100vw]   productdetail flex justify-center gap-[1rem] items-center  h-[100vh]'>   
    
<img className='h-[25vw] detailpic   object-cover min-w-[21vw]'
   src={singleproduct.photo}  />
   <div className=' flex flex-col shadow-lg   detail px-3   rounded-lg pl-4  h-[30vw] w-[40vw]'>
      <span className='text-[2vw] productname text-zinc-800 '>{singleproduct.name}</span> 
      <span className='text-[1.2vw] flex flex-col  productdescription   '><span className='font-semibold'>Description:</span>{singleproduct.description}</span>

      <span  className='text-[1.4rem] font-medium mb-3 mt-3  productprice text-red-400 '>${singleproduct.price}</span>
      <div className='flex gap-[2rem]'><button className='bg-red-500 redbutton text-white    rounded h-[3rem] hover:scale-105 font-medium   w-[10vw]'>Buy now</button>
      <button onClick={()=>{addtocart(singleproduct)}}      className='bg-orange-500 text-white redbutton  rounded w-[10vw] hover:scale-105 font-medium h-[3rem]'>Add to cart</button>
      </div>
      
      
          </div></div>
    
<div className='w-[100vw] text-center   font-semibold text-zinc-800 text-[2vw]'>You may also like</div>



<Slickcomponent similarproduct={similarproduct} subcategory={subcategory} addtocart={addtocart}  />






      </div></div>
  
  )
}

export default Productdetail
// to={`/products/${subcategory}/${ele.slug}`}