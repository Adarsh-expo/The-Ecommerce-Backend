import React, { useState } from 'react'

function Orderboxcart({wholedata:{products,payment,buyer,shippingaddress,status}}) {



   
  return (
    <div  className='  mainboxorder border-zinc-300  border-[1px] hover:shadow-lg w-[100%] flex justify-between rounded-lg'>


<div className='divleft flex flex-col  w-[70%] '>



{products.map((ele,index)=><div key={index}   className='flex justify-evenly  items-center text-[1.2vw] '>
    
<img  className='w-[15vw] my-2 h-[15vw]   object-contain'  src={ele.photo}/>

<div className='flex flex-col'>

<span>{ele.name}</span>


</div>
<div className='flex flex-col'>
<span>Total price:${ele.price}</span>
<span className='font-light'>Quantity:{ele.choosenquantity}</span>

</div>

</div>)}



</div>

<div className='divright  flex flex-col justify-center   items-center w-[30%]  '>
    
    <span className='text-[1.2vw] font-semibold text-red-500'> Order {status} yet</span>
    <span className='text-[1vw] font-light'>Total Cost:${payment.amount}</span>
    <span className='text-[1vw] mt-[3%] font-light '>Order No:{payment.razorpayorderid}</span>
    
    </div>


    </div>
  )
}

export default Orderboxcart
