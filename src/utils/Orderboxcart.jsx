import React, { useState } from 'react'

function Orderboxcart({wholedata:{products,payment,buyer,shippingaddress,status}}) {



   
  return (
    <div  className='  mainboxorder border-red-800 border-opacity-30 px-3 border-[1px] hover:shadow-lg w-[100%] flex justify-between rounded-lg'>


<div className='divleft flex flex-col  w-[70%] '>



{products.map((ele,index)=><div key={index}   className='flex gap-4 pb-3 items-center  '>
    
<img  className='w-[15vw] ml-3 my-2 h-[15vw]   object-contain'  src={ele.photo}/>

<div className='flex flex-col'>

<span className='lg:text-[1.7vw] mt-2  md:text-[1.7vw] text-[2vw] '>{ele.name}</span>


</div>
<div className='flex  flex-col'>
<span className='lg:text-[2vw] md:text-[2vw] text-[2.3vw] '>Total price:${ele.price}</span>
<span className='font-light text-[2.3vw] md:text-[2vw] lg:text-[2vw]'>Quantity:{ele.choosenquantity}</span>

</div>

</div>)}



</div>

<div className='divright ml-3 flex flex-col    items-center w-[30%]  '>
    
    <span className='lg:text-[1.2vw] mt-2 text-[2.5vw] font-semibold text-red-500'> Order {status} yet</span>
    <span className='lg:text-[1vw]   mt-3 text-[2.2vw] font-light'>Total Cost:${payment.amount}</span>
    <span className='lg:text-[1vw]     text-[2.2vw] mt-[4%] font-light '>Order No:{payment.razorpayorderid}</span>
    
    </div>


    </div>
  )
}

export default Orderboxcart
