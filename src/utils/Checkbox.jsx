import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'


function Checkbox({id,checkedstatevalue,setcheckedstatevalue}) {


const cartdata=useSelector((state)=>state.Cart.value)


    const[checked,setchecked]=useState(false)

    const checkvaluestore=async(e)=>{
      
        if(checked){
           console.log(checkedstatevalue)

        const filterchecked=await checkedstatevalue.filter((ele)=>ele._id!==e.target.value)
   console.log(filterchecked)
        setcheckedstatevalue(filterchecked)
        setchecked(false)}
        if(!checked){
        const obi=cartdata.find((ele)=>ele._id===e.target.value)
        console.log(obi)
          setcheckedstatevalue((pre)=>[...pre,obi])
          setchecked(true)
        }
        
        }


  return (
   <input onChange={checkvaluestore} className='w-[1.4vw]' value={id}  checked={checked} type='checkbox'/>
  )
}

export default Checkbox