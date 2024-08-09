import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Productcall from '../Store/actions/productaction'
import { Link } from 'react-router-dom'
import { Inserttocart } from '../Store/reducers/cartreducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from './Header';

function Horizantlecart() {
const product=useSelector((state)=>state.Products.value)
console.log(product)
const Headphone=product.filter((ele)=>ele.productsubcategory==="Headphone")



console.log(Headphone)
const dis=useDispatch();
useEffect(()=>{
  
  dis(Productcall())

},[])


const addtocart=async(ele)=>{
const ele2={...ele,choosenquantity:1}
  dis(Inserttocart(ele2))
  toast.success("Added to cart",customToastOptions)
  }


  return (

 <div className='flex w-[100vw]   flex-wrap items-center justify-center mt-[2rem] gap-[3rem] '>
{Headphone.map((ele, index) => (
        <div  className='mt-[2rem] flex flex-col gap-2  items-center justify-center rounded-xl hover:scale-105  shadow-2xl  w-[15vw] min-h-[25vw]'        key={index} >
          <Link    to={`/Bestseller/headphone/${ele.slug}`}    className=' flex items-center  flex-col '>
             <img className='object-contain w-[90%] h-[15vw]' src={ele.photo} alt={ele.name} />
             <span className='text-[1.5vw] mx-2 text-center text-zinc-700'>{ele.name.slice(0,30)}...</span>
              <span className='text-[1.1vw]'>${ele.price}</span>
              
            </Link><button   onClick={()=>{addtocart(ele)}}        className='bg-yellow-400 mb-2 rounded-2xl w-[8vw] text-[1.2vw] py-1'>Add to cart</button></div>  
          ))}

    </div>
  
  )
}

export default Horizantlecart