import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'

function Ordersuccessfull() {

  const [searchparam,setsearchparam]=useSearchParams()
  const [num,setnum]=useState(0);
  useEffect(()=>{


   const clear= setInterval(()=>{setnum((pre)=>pre+1)},1000)


return ()=>clearInterval(clear)

  },[])
  const nav=useNavigate()
  num===5&& nav('/')
  const val=searchparam.get('reference_id')
  console.log(val)
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full text-center px-4'>
  <div className='text-[6vw] lg:text-[2.5vw] md:text-[4vw] font-thin mb-4'>
    Order Successful
  </div>
  <img 
    className='w-[80%] lg:w-[40%] md:w-[50%] h-auto max-w-[400px] mb-6' 
    src='https://media1.tenor.com/m/-8Uay6X3E3UAAAAC/gil-cat.gif' 
    alt='Success Animation'
  />  
  <div className='text-[4vw] lg:text-[1.5vw] md:text-[2.5vw] font-light'>
    Reference No: {val}
  </div>
  <div className='text-[3.5vw] lg:text-[1.5vw] md:text-[2.5vw] mt-4'>
    Redirecting to homepage in {num} sec
  </div>
</div>

  )
}

export default Ordersuccessfull