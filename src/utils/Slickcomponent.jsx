import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddToCartBackend } from './Addtocartbackend';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import addtocart from '../Store/actions/cartaction';

function Slickcomponent({similarproduct,subcategory}) {

const des=useDispatch()

    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };

   const{addtocartbackend,runner}=useAddToCartBackend();

useEffect(()=>{
  des(addtocart())
  console.log("jjj")
  },[runner])

  return (
    <div className=' mb-[3rem]  w-3/4 m-auto'>

<Slider {...settings}  > 
 {similarproduct?.map((ele)=>
<div className='flex  shadow-lg  rounded flex-col items-center  mr-[7rem] w-[25%] lg:h-[20vw] h-[45vw] md:h-[25vw] mb-3   '>
     <img className=' h-[50%] w-[95%] mx-auto object-contain' src={ele.photo}/>
    <div className='flex flex-col items-center w-[100%] '>
         <Link  to={`/products/${subcategory}/${ele.slug}`}    className='text-[2vw] hover:text-red-500  lg:text-[1.3vw] text-center '>{ele.name.slice(0,30)}..</Link>
    <span className='text-[0.6rem] lg:text-[1.4vw] md:text-[2vw]   '>${ele.price}</span>
   
    <button onClick={()=>{addtocartbackend(ele)}} className='bg-yellow-500 mb-2 px-2 min-h-[1.4rem]    min-w-[3rem] text-[2vw] lg:text-[1.3vw]   text-white rounded-xl '   >Add to cart </button>
    
    </div>
   
    
    </div>
    
    )}
    </Slider>
    
   
    


   
    
    
    </div>
  )
}

export default Slickcomponent