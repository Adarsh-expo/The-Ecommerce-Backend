import React from 'react'

function Starcomponent({star}) {

  return (
    <div className='flex text-orange-500 lg:text-[2vw]'>
  { Array.from({length:5},(ele,index)=>{
    
  
    let number=index+1;
    
    if(number>star && number-1>=star ){




    return (<div><i class="ri-star-line"></i> </div>);
   

} if(number<star){
      return (<div><i class="ri-star-fill"></i></div>)
    }
    if(number>star && number-1<star){
       return (<div><i class="ri-star-half-line"></i></div>)
    }
    if(number===star)
    {
        return(<div><i class="ri-star-fill"></i></div>)
    }})


    
    
  }

  
    </div>
    )
  }



export default Starcomponent