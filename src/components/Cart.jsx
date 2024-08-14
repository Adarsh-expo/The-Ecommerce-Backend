import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { moredetails } from '../Store/reducers/cartreducer'

import { useEffect,useState } from 'react';
import Checkbox from '../utils/Checkbox';
import Header from '../utils/Header';
import { Link } from 'react-router-dom';
import addtocart from '../Store/actions/cartaction';
import axios from 'axios';
import { usecustomdeletefromcart } from '../utils/customdeletefromcart';
import { useSequentialdelete } from '../Custom hooks/Sequentialdelete';
import { useSequentialincrease } from '../Custom hooks/Sequentialincrease';



function Cart() {


 const des=useDispatch();
  const cartdata=useSelector((state)=>state.Cart.value)
  const user=useSelector((state)=>state.User.value)
  




 
 


const[checkedstatevalue,setcheckedstatevalue]=useState([])



  const {sumtotal,subtotal,totalincart}=useSelector((state)=>state.Cart)


useEffect(()=>{
  
  const filter=cartdata.filter((ele)=>(checkedstatevalue.some((ele2)=>ele2._id===ele._id)))
des(moredetails(filter));



},[checkedstatevalue,cartdata])







 useEffect(()=>{console.log(checkedstatevalue)},[checkedstatevalue])

//here addto cart redux from backend cart eveytime when when we delete the cart value
const{runner2,deletefromcart}=usecustomdeletefromcart()
const{runner3,sequentialdelete}=useSequentialdelete()
const{runner4,sequentialincrease}=useSequentialincrease()

useEffect(()=>{des(addtocart())},[runner2,runner3,runner4])






  return (<div className='overflow-x-hidden overflow-y-hidden'>
  <Header/>
  <div className=' mt-3 flex'>   

    
      <div className=' growcontainer   rounded-2xl ml-[1rem]  md:ml-[3rem]   lg:ml-[4rem] mt-[2rem] w-[70%] min-h-[30vw] px-[1rem]   shadow-xl'>
      <div className='text-[2.2vw] mb-2'> Shopping Cart:{totalincart}</div>
      {cartdata.map((ele,index)=><div  key={index} className='flex mt-2  
       min-h-[18vw]  w-[100%] items-center justify-between'>
         <div className='flex  items-center  mt-[2rem] lg:gap-[2rem] md:gap-[1.7rem] gap-2 '>
          
          <Checkbox  id={ele._id}  checkedstatevalue={checkedstatevalue} setcheckedstatevalue={setcheckedstatevalue}/>
          <img   className='   lg-h-[14vw] md:h-[14vw] h-[20vw]    object-contain lg:w-[11vw] md:w-[11vw]   w-[20vw]' 
          src={ele.photo}/> 
          <div className=' flex flex-col   font-normal   text-[2.8vw] md:text-[1.6vw]   lg:text-[1.6vw]'>
            {ele.name.slice(0,60)}<span className='font-thin'>${ele.price}</span>
          <h1 className={` ${ele.quantity>0?"text-[#1296AB]":"text-red-500"}  text-[2vw]    lg:text-[1vw]`}>{ele.quantity>0?"In Stock":"Out of stock"}</h1>
          
          <button onClick={()=>{deletefromcart(ele._id)}} className=' mt-[1rem] flex '>
            <i class="ri-delete-bin-6-line  hover:scale-110 text-red-500"></i>
            <span className='text-[#1296AB]'>Remove</span>
            </button>
          </div>
          </div>
             <div className=' items-center  flex lg:gap-[1rem] gap-1'>
              <button  onClick={()=>{sequentialdelete(ele._id)}} className='bg-orange-500 rounded h-[4vw]  md:h-[2.3vw]  lg:h-[2.3vw] 
             flex justify-center items-center     w-[4vw]   md:w-[2.3vw] lg:w-[2.3vw] shadow-2xl text-white  text-[5.3vw] md:text-[2vw]  lg:text-[1.6vw] '>-</button>
             <span className='lg:text-[1vw]  md:text-[1vw] text-[2.6vw] font-normal text-zinc-700'>{ele.choosenquantity}</span>
             <button  onClick={()=>{sequentialincrease(ele)}}   className='bg-blue-600 rounded  text-[5.3vw] md:text-[2vw]  lg:text-[1.6vw] flex justify-center items-center  h-[4vw]  md:h-[2.3vw]  lg:h-[2.3vw]  text-center  text-white    w-[4vw]   md:w-[2.3vw] lg:w-[2.3vw]'>+</button>
             </div>
            <hr/>
             </div> )}
        
        
         </div> 
    
    
    
    <div  className='w-[25%] overflow-y-auto lg:ml-[2rem] md:ml-[2rem] ml-[1rem] flex flex-col items-center shadow-2xl rounded-xl min-h-[20vw]'  >
      <div className='mb-[1vw] mt-[1vw] text-zinc-400'>Summary</div>
      <hr className='h-[8px] w-[95%]'/>  
       <div className=' flex w-[100%] px-[1rem] items-center flex-col '>
       <div className='flex   items-center mt-[10%] text-zinc-500    md:text-[1.7vw] text-[2.7vw]  lg:text-[1.4vw] w-[100%] justify-between'><div className=''>Total Qunatity</div><span>{subtotal}</span></div> 
        
        <div className='flex mt-[5%] gap-3 items-center w-[100%] font-medium justify-between md:text-[1.7vw]   text-[2.7vw]        lg:text-[1.4vw]'><span>Total Amount</span><span>{sumtotal}</span></div>
<button     disabled={!sumtotal }    className={` ${!sumtotal?"bg-orange-200":"bg-orange-400"}  mt-[10%] text-teal-50  w-[90%]   lg:text-[1.3vw] md:text-[1.4vw] text-[2.2vw]  md:h-[2.2rem] lg:h-[2rem]`}>
 {sumtotal?<Link to='/user/cart/addshippingaddress'   >GO TO CHECKOUT</Link>:"Go To Checkout"} </button>

        </div>
        
        </div> 
 



                                  </div>
        
  </div>
    
  )
}

export default Cart