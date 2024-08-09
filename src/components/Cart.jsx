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

    
      <div className=' growcontainer   rounded-2xl ml-[4rem] mt-[2rem] w-[70%] min-h-[30vw] px-[1rem]   shadow-xl'>
      <div className='text-[2.2vw] mb-2'> Shopping Cart:{totalincart}</div>
      {cartdata.map((ele)=><div className='flex mt-2  
       min-h-[18vw]  w-[100%] items-center justify-between'>
         <div className='flex  mt-[2rem] gap-[2rem] '>
          
          <Checkbox  id={ele._id}  checkedstatevalue={checkedstatevalue} setcheckedstatevalue={setcheckedstatevalue}/>
          <img   className='   h-[14vw] object-contain  w-[11vw]' 
          src={ele.photo}/> <div className=' flex flex-col   font-normal   text-[1.6vw]'>{ele.name.slice(0,60)}<span className='font-thin'>${ele.price}</span>
          <h1 className='text-[#1296AB] text-[1vw]'>{ele.quantity>0?"In Stock":"Out of stock"}</h1>
          
          <button onClick={()=>{remove(ele)}} className=' mt-[1rem] flex '><i class="ri-delete-bin-6-line  hover:scale-110 text-red-500"></i><span className='text-[#1296AB]'>Remove</span></button></div>
          </div>
             <div className=' items-center  flex gap-[1rem]'><button  onClick={()=>{des(sequentialdelete(ele))}} className='bg-orange-500 rounded h-[2.3vw] 
             flex justify-center items-center w-[2.3vw] shadow-2xl text-white text-[1.6vw] '>-</button><span className='text-[1vw] font-normal text-zinc-700'>{ele.choosenquantity}</span><button  onClick={()=>{insertdata(ele)}}   className='bg-blue-600 rounded  text-[1.6vw] flex justify-center items-center  h-[2.3vw] text-center  text-white    w-[2.3vw]'>+</button></div>
            <hr/>
             </div> )}
        
        
         </div> 
    
    
    
    <div  className='w-[25%] overflow-y-auto ml-[2rem] flex flex-col items-center shadow-2xl rounded-xl h-[20vw]'  >
      <div className='mb-[1vw] mt-[1vw] text-zinc-400'>Summary</div>
      <hr className='h-[8px] w-[95%]'/>  
       <div className=' flex w-[100%] px-[1rem] items-center flex-col '>
       <div className='flex   items-center mt-[10%] text-zinc-500 text-[1.4vw] w-[100%] justify-between'><div className=''>Total Qunatity</div><span>{subtotal}</span></div> 
        
        <div className='flex mt-[5%]  items-center w-[100%] font-medium justify-between   text-[1.4vw]'><span>Total Amount</span><span>{sumtotal}</span></div>
<button     disabled={!sumtotal}    className={` ${!sumtotal?"bg-orange-200":"bg-orange-400"}  mt-[10%] text-teal-50  w-[90%]   text-[1.3vw]    h-[2rem]`}>
 {sumtotal?<Link to='/user/cart/addshippingaddress'   >GO TO CHECKOUT</Link>:"Go To Checkout"} </button>

        </div>
        
        </div> 
 



                                  </div>
        
  </div>
    
  )
}

export default Cart