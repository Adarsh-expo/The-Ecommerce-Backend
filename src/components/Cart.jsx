import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Deletefromcart,sequentialdelete,Inserttocart,moredetails } from '../Store/reducers/cartreducer'

import { useEffect,useState } from 'react';
import Checkbox from '../utils/Checkbox';
import Header from '../utils/Header';
import { Link } from 'react-router-dom';

import axios from 'axios';



function Cart() {


 const des=useDispatch();
  const cartdata=useSelector((state)=>state.Cart.value)
  const user=useSelector((state)=>state.User.value)
  
  console.log(user)
  const remove=(ele)=>{
des(Deletefromcart(ele))
console.log(ele)
  }
 
  const insertdata=(ele)=>{

    des(Inserttocart(ele))
  }

const[checkedstatevalue,setcheckedstatevalue]=useState(cartdata)
  const {sumtotal,subtotal,totalincart}=useSelector((state)=>state.Cart)
useEffect(()=>{

  const filteredItems = cartdata.filter(item => 
    checkedstatevalue.some(checkedItem => checkedItem._id === item._id)
  )
des(moredetails(filteredItems));



},[cartdata,checkedstatevalue])







 useEffect(()=>{console.log(checkedstatevalue)},[checkedstatevalue])







  return (<div className='overflow-x-hidden overflow-y-hidden'>
  <Header/>
  <div className=' mt-3 flex'>   

    
      <div className=' growcontainer   rounded-2xl ml-[1rem]  md:ml-[3rem]   lg:ml-[4rem] mt-[2rem] w-[70%] min-h-[30vw] px-[1rem]   shadow-xl'>
      <div className='text-[2.2vw] mb-2'> Shopping Cart:{totalincart}</div>
      {cartdata.map((ele)=><div className='flex mt-2  
       min-h-[18vw]  w-[100%] items-center justify-between'>
         <div className='flex  items-center  mt-[2rem] lg:gap-[2rem] md:gap-[1.7rem] gap-2 '>
          
          <Checkbox  id={ele._id}  checkedstatevalue={checkedstatevalue} setcheckedstatevalue={setcheckedstatevalue}/>
          <img   className='   lg-h-[14vw] md:h-[14vw] h-[20vw]    object-contain lg:w-[11vw] md:w-[11vw]   w-[20vw]' 
          src={ele.photo}/> 
          <div className=' flex flex-col   font-normal   text-[2.8vw] md:text-[1.6vw]   lg:text-[1.6vw]'>
            {ele.name.slice(0,60)}<span className='font-thin'>${ele.price}</span>
          <h1 className={` ${ele.quantity>0?"text-[#1296AB]":"text-red-500"}  text-[2vw]    lg:text-[1vw]`}>{ele.quantity>0?"In Stock":"Out of stock"}</h1>
          
          <button onClick={()=>{remove(ele)}} className=' mt-[1rem] flex '>
            <i class="ri-delete-bin-6-line  hover:scale-110 text-red-500"></i>
            <span className='text-[#1296AB]'>Remove</span>
            </button>
          </div>
          </div>
             <div className=' items-center  flex lg:gap-[1rem] gap-1'>
              <button  onClick={()=>{des(sequentialdelete(ele))}} className='bg-orange-500 rounded h-[4vw]  md:h-[2.3vw]  lg:h-[2.3vw] 
             flex justify-center items-center     w-[4vw]   md:w-[2.3vw] lg:w-[2.3vw] shadow-2xl text-white  text-[5.3vw] md:text-[2vw]  lg:text-[1.6vw] '>-</button>
             <span className='lg:text-[1vw]  md:text-[1vw] text-[2.6vw] font-normal text-zinc-700'>{ele.choosenquantity}</span>
             <button  onClick={()=>{insertdata(ele)}}   className='bg-blue-600 rounded  text-[5.3vw] md:text-[2vw]  lg:text-[1.6vw] flex justify-center items-center  h-[4vw]  md:h-[2.3vw]  lg:h-[2.3vw]  text-center  text-white    w-[4vw]   md:w-[2.3vw] lg:w-[2.3vw]'>+</button>
             </div>
            <hr/>
             </div> )}
        
        
         </div> 
    
    
    
    <div  className='w-[25%] overflow-y-auto lg:ml-[2rem] md:ml-[2rem] ml-[1rem] flex flex-col items-center shadow-2xl rounded-xl min-h-[20vw]'  >
      <div className='mb-[1vw] mt-[1vw] text-zinc-400'>Summary</div>
      <hr className='h-[8px] w-[95%]'/>  
       <div className=' flex w-[100%] px-[1rem] items-center flex-col '>
       <div className='flex   items-center mt-[10%] text-zinc-500    md:text-[1.7vw] text-[2.7vw]  lg:text-[1.4vw] w-[100%] justify-between'><div className=''>Total Qunatity</div><span>{subtotal}</span></div> 
        
        <div className='flex mt-[5%]  items-center w-[100%] font-medium justify-between md:text-[1.7vw]   text-[2.7vw]        lg:text-[1.4vw]'><span>Total Amount</span><span>{sumtotal}</span></div>
<button     disabled={!sumtotal}    className={` ${!sumtotal?"bg-orange-200":"bg-orange-400"}  mt-[10%] text-teal-50  w-[90%]   lg:text-[1.3vw] md:text-[1.4vw] text-[2.2vw]  md:h-[2.2rem] lg:h-[2rem]`}>
 {sumtotal?<Link to='/user/cart/addshippingaddress'   >GO TO CHECKOUT</Link>:"Go To Checkout"} </button>

        </div>
        
        </div> 
 



                                  </div>
        
  </div>
    
  )
}

export default Cart