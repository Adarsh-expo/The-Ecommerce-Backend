import React from 'react'
import Usermenu from '../utils/Usermenu'
import Orderboxcart from '../utils/Orderboxcart'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
function Orders() {
    document.title="Your Orders"
    const[order,setorder]=useState([])

useEffect(()=>{
const getdetail=async()=>{

  const res= await axios.get('https://ecommerce-backend-teif.onrender.com/api/v1/detail/getorderdetail',{withCredentials:true})
console.log(res.data)
setorder(res.data.Order)
}

getdetail()
},[])




  return (<div className='  items-center  w-[100vw] h-[100vh] overflow-x-hidden ' >
    
    <Header/>
    <div className='flex '>
      
    
    <Usermenu/>
  <div className='  flex flex-col gap-[2rem]    w-[80vw]'>

{order.length ? order.map((ele,index)=><Orderboxcart  key={index}  wholedata={ele} />):<div className='text-[1.5vw]'>No order history to show</div>}




  </div>

</div>

<Footer/>

 </div>
    
  )
}

export default Orders