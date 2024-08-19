import React from 'react'
import Starcomponent from './Starcomponent'

function Commentandrating({feedbackdetail=[],avgrating}) {
    console.log(feedbackdetail)
  return (
    <div className='flex flex-col items-center mt-3  w-screen'>
        <span className=' lg:text-[2vw] md:text-[2.5vw] mb-2  font-semibold text-[4vw]'>Top Reviews</span>


    
 
    
    
    <div className='flex pl-2 w-[100%]'>  


<div className='flex flex-col '><div className='lg:text-[1.5vw] md:text-[2vw] text-[4vw]'>Average Review</div><Starcomponent star={avgrating}/><div className='text-[3vw]  md-text-[2.2vw] lg:text-[2vw]'>({avgrating})</div></div>
<div className='flex mx-auto w-[55%]  h-fit flex-col'> {feedbackdetail.length?feedbackdetail.map((ele,index)=> 
     <div className='flex     w-[100%] min-h-[15vw] flex-col mt-3'>
        <div className='flex items-center   '><i class="ri-account-circle-fill lg:text-[2vw]"></i>
        <div className='  lg:text-[1.2vw] md:text-[2vw] text-[3.2vw] text-zinc-700'>{ele.username}</div></div>
     <Starcomponent star={ele.rating}/>
     
     <div className='lg:text-[1.2vw] md:text-[2vw] text-[3vw] break-words  '>{ele.review}</div>
     
     
     
     </div>):<div>No Reviews Yet</div>}</div>
    </div>
    
  
      </div>




   
  )
}

export default Commentandrating