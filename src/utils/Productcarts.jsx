import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Productcall from '../Store/actions/productaction';
import Header from './Header';
import axios from 'axios';
import { productInsert } from '../Store/reducers/productreducer';
import allcategcall from '../Store/actions/categoriecallaction';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Inserttocart } from '../Store/reducers/cartreducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from './Header';

function Productcarts() {
  const params=useParams()
  const [subcateg,setsubcateg]=useState([]);
  const[range,setrange]=useState([76,13000])
  const [categproduct,setcategprouct]=useState([]);
  const[categorychoosen,setcategorychoosen]=useState('')
  const categories=useSelector((state)=>state.Categories.value)
  const products=useSelector((state)=>state.Products.value)
  console.log(categories)
const des=useDispatch()

const slugobject=categories.find((ele)=>ele.name===params.category)
console.log(slugobject)



useEffect(()=>{des(Productcall())},[])

useEffect(()=>{

const getsubcateg=async()=>{
  if(slugobject)
  {
    const subcateg= await axios.get(`http://localhost:3000/api/v1/category/allsubcategory/${slugobject.slug}`)
console.log(subcateg.data.categoriesall[0].Allslugbasedcategory)

setsubcateg(subcateg.data.categoriesall[0].Allslugbasedcategory)
console.log(slugobject.slug)
}

 
const pro=products.filter((ele)=>ele.productcategory===params.category)
console.log(pro)
setcategprouct(pro)
 

}

getsubcateg()

  
},[categories,products,params])




useEffect(()=>{

  //pricebased filter
  if(!categorychoosen){
    
    
    const extremefilter=products.filter
    ((ele)=>ele.productcategory===params.category &&ele.price>=range[0] && ele.price<=range[1])
    setcategprouct(extremefilter)
  }
  else{
   const extremefilter=products.filter((ele)=>ele.productsubcategory===categorychoosen &&ele.price>=range[0] && ele.price<=range[1])
  
   setcategprouct(extremefilter)
  }
 
 



},[range])


const getfilterproduct=async(e)=>{

const filter=products.filter((ele)=>ele.productsubcategory===e.target.dataset.subcateg &&ele.price>=range[0] && ele.price<=range[1] )
setcategprouct(filter)
setcategorychoosen(e.target.dataset.subcateg)

}

const addtocart=async(ele)=>{
  const ele2={...ele,choosenquantity:1}
  des(Inserttocart(ele2))
  try{ const {data:{message}}=await
  axios.post('http://localhost:3000/api/v1/Inserttocart',{id:ele2._id,choosenquantity:ele2.choosenquantity},{withCredentials:true})
  console.log(message)
  toast.success(message,customToastOptions)
}
catch(err){
  console.log(err.message)
}




  }

  return (   
   <div className='overflow-y-hidden overflow-x-hidden h-screen w-screen'>
  <Header />
     <div className='flex  overflow-y-hidden'>
       <div className='w-[20%] pt-3'>
         <div className='text-[2.2vw] mb-[2rem] font-medium'>Category</div>
         <span className='text-[1.8vw] ml-[1rem]'>{params.category}</span>
         <div className='flex ml-[2rem] gap-[1rem] flex-col'>
           {subcateg.map((ele, index) => (
             <div key={index}  onClick={getfilterproduct}    data-subcateg={ele.name} className=' hover:cursor-pointer  flex text-[1.5vw]'>
               <i className='ri-user-smile-fill'></i>{ele.name}
             </div>
           ))}
<div className='text-[1.3vw]'>Price Range:${range[0]}-${range[1]}</div>
           <Slider   range      value={range} min={76}  max={13000} onChange={(value)=>{setrange(value)}}/>
         </div>
       </div>
       <div className='flex w-[80%] h-[88vh] overflow-y-scroll flex-wrap items-center justify-center gap-[3rem]'>
         {categproduct.map((ele, index) => (
        <div  className='mt-[2rem] flex flex-col gap-2  items-center rounded-lg hover:scale-105 shadow-lg  w-[30vw]   md:w-[24vw]    lg:w-[15vw] min-h-[25vw]'        key={index} >
          <Link    to={`/products/${params.category}/${ele.slug}`}    className=' flex items-center justify-center text-center  flex-col '>
             <img className='object-contain w-[96%]  lg:w-[90%] h-[15vw]' src={ele.photo} alt={ele.name} />
             <span className='text-[3vw] md:text-[2vw] lg:text-[1.5vw] mx-2 my-1 text-zinc-700'>{ele.name.slice(0,35)}...</span>
              <span className=' text-[2.4vw]  md:text-[1.7vw]  lg:text-[1.1vw]'>${ele.price}</span>
              
            </Link><button   onClick={()=>{addtocart(ele)}}        className='bg-yellow-400 mb-2 rounded-2xl lg:w-[8vw] w-[13vw]  text-[2.3vw]  md:text-[1.6vw]   lg:text-[1.2vw] py-1'>Add to cart</button>
            </div>  
          ))}
        </div> 
       </div>
     </div>
  );
}

export default Productcarts;
