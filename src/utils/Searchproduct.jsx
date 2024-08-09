import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import Productcall from '../Store/actions/productaction';
import Header from './Header';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import { Inserttocart } from '../Store/reducers/cartreducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from './Header';
function Searchproduct() {
const[pricerange,setpricerange]=useState([100,13000])

const[keyproduct,setkeyproduct]=useState([])

const {keyword}=useParams();
const des=useDispatch()
console.log(keyword)
const products=useSelector((state)=>state.Products.value)
console.log(products)

const newproducts=products.filter((ele) => 
ele.name.toLowerCase().includes(keyword.toLowerCase()  )
);


console.log(newproducts)


useEffect(()=>{


    des(Productcall())
},[])

useEffect(()=>{setkeyproduct(newproducts)},[products,keyword])
useEffect(()=>{ const pricefilteredproduct=newproducts.filter((ele)=>ele.price>pricerange[0] && 
    ele.price<pricerange[1] );
setkeyproduct(pricefilteredproduct)
console.log(pricefilteredproduct)
console.log("jjjj")

},[pricerange])


const addtocart=async(ele)=>{
  const ele2={...ele,choosenquantity:1}
des(Inserttocart(ele2))
toast.success("Added to cart",customToastOptions)
}

  return (<div className='overflow-x-hidden'> <Header/>
    <div className='flex'>

    <div className='w-[30%] pt-3'>
         <div className='text-[2.2vw] mb-[2rem] font-medium'>Price Range</div>
         <span className='text-[1.8vw] ml-[1rem]'></span>
         <div className='flex ml-[2rem] gap-[1rem] flex-col'>
            <div className='text-[1.4vw] font-semibold'>Price limit:${pricerange[0]}-${pricerange[1]}</div>
          
         <Slider value={pricerange}  className='w-[70%] text-blue-700' range min={100} max={13000} onChange={(value)=>{setpricerange(value)}}/>
         
         </div>
       </div>

<div className='flex flex-col'>
{keyproduct.map((ele, index) => (
    <div className='rounded-lg flex flex-col items-center  shadow-lg mt-[1rem]  min-h-[25vw]'  key={index} >
      <Link       to={`/products/search/${keyword}/${ele.slug}`}          className='flex  items-center gap-[3rem]  w-[60vw]' key={index}>

<img  className='h-[20vw] w-[35%] object-contain' src={ele.photo}/>
<div className='flex   pt-4 flex-col'> <span className='text-[2vw] text-zinc-700 font-light'>{ele.name.slice(0,60)}...</span> <span  className='text-[1.6vw] font-thin'>{ele.description.slice(0,150)}</span>
<span className='text-[1vw]'>${ele.price}</span> 


</div>

          </Link><button  onClick={()=>{addtocart(ele)}}   className='bg-yellow-400 mb-2 rounded-2xl w-[8vw] text-[1.2vw] py-1'>Add to cart</button>
</div>      
          ))}</div>
    </div></div>
  
 
  )
}

export default Searchproduct