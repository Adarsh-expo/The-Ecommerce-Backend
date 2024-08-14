import React from 'react'
import Usermenu from '../utils/Usermenu'
import Orderboxcart from '../utils/Orderboxcart'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import '../styles/Order.css'
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



const[size,setsize]=useState(window.innerWidth)

useEffect(()=>{
window.addEventListener('resize',()=>{

  const sizewidth=window.innerWidth
  setsize(sizewidth)
})


},[])



  return (<div className='   items-center  w-[100vw] h-[100vh] overflow-y-hidden overflow-x-hidden ' >
    
    

    <Header  />
    <div className='flex relative  '>
      
    <button onClick={()=>{setsize(501)}} className='absolute top-1 left-1 hover:scale-105'> <i className={`ri-menu-line  text-[1.4rem] text-red-600 ${size>500 && "hidden"} `}></i></button>
    <Usermenu size={size} setsize={setsize} />
  <div className='  flex flex-col gap-[2rem] productright2  mt-2 h-[80vh]  overflow-y-auto  w-[80vw]'>

{order.length ? order.map((ele,index)=><Orderboxcart  key={index}  wholedata={ele} />):<div className=' mt-4  ml-8  lg:text-[1.5vw]
 md:text-[2vw] text-[4vw]'>No order history to show</div>}




  </div>
 

</div>


<Footer/>
 </div>
    
  )
}

export default Orders