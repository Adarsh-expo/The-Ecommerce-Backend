import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { userchange,insertdata } from '../Store/reducers/userreducer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profile from '/man.png' 
import { useNavigate } from 'react-router-dom';
import allcategcall from '../Store/actions/categoriecallaction';
import { moredetails } from '../Store/reducers/cartreducer';
 export const customToastOptions = {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastClassName: 'custom-toast',
    bodyClassName: 'custom-toast-body'
  };
function Header() {
 

const[ringcolor,setringcolor]=useState(false)
const[search,setsearch]=useState('')

const[showdropdown ,setshowdropdown]=useState(false);

const[categsearch,setcategsearch]=useState('All Categories');

console.log(categsearch)



const navo=useNavigate()


    const user=useSelector((state)=>state.User.value)
    
const {totalincart,value}=useSelector((state)=>state.Cart)

useEffect(()=>{des(moredetails())},[value])




    const Categories=useSelector((state)=>state.Categories.value)
    console.log(Categories)
   const des=useDispatch();


  
   useEffect(()=>{
   const fetchprofile=async()=>{
   const res=await axios.get('https://ecommerce-backend-teif.onrender.com/api/v1/user/fetch-profile',{withCredentials:true})
   console.log(res.data)
   
   des(insertdata(res.data.status&& res.data.userdata))
   
   }
   fetchprofile();

des(allcategcall())
   
   },[])














const logoutuser=async()=>{
try{const res=await axios.post('https://ecommerce-backend-teif.onrender.com/api/v1/user/logout',{}, {withCredentials: true})
console.log( res.data.status)

des(insertdata({}))

toast.success("Successfully loggedout",customToastOptions)

setTimeout(()=>{navo('/')},2500)


}
catch(err){console.log(err)}


}






  return (
    <div className='w-[100%] h-[11vh]  z-50 sticky top-0 bg-white 
    flex justify-between items-center px-[10px]'>
    {/* headerleft portion */}
   
   

{/* 
   Mid section */}
    <div  className='input flex justify-center  md:w-[40vw] w-[50vw]    lg:w-[35vw] lg:h-[3rem] md:h-[3rem] h-[2.3rem]
      items-center border-[2px] border-zinc-300  rounded-lg'> 
    
    <select onChange={(e)=>{setcategsearch(e.target.value);setringcolor(true)}} className='h-[100%]  rounded-lg lg:text-[1.5vw] text-[0.7rem]     w-[33%] outline-none '>
    <option  value='All Categories'  className='bg-white'>All Categories</option>
      {Categories.map((ele,index)=><option key={index}  value={ele.name} className='bg-white'>{ele.name}</option>)}</select>
    <input onChange={(e)=>{setsearch(e.target.value)}}    value={search} placeholder='Search In' className=' outline-none  pl-2 lg:text-[1.4rem] md:text-[1.3rem]    text-[0.7rem]  w-[60%] 
      h-[100%] '  type='search'/>
    

{search.trim()===""?

   <Link    to={`/products/${categsearch}`} className='lg:w-[10%] h-[100%] w-[16%]  hover:bg-slate-400 hover:scale-105'><i class={`ri-search-line  bg-zinc-200  w-[100%]    ${ringcolor && "ring-2 ring-offset-2 rounded ring-red-500"}  flex items-center  justify-center
     h-[100%]   text-[4.4vw] lg:text-[1.9vw]`}></i></Link> :
      <Link      to={`/products/search/${search}`}    className='lg:w-[10%]   w-[15%] h-[100%]  hover:bg-slate-400 hover:scale-105'><i class="ri-search-line  bg-zinc-200   w-[100%] flex items-center  justify-center
     h-[100%]  text-[4.4vw]  lg:text-[1.9vw]"></i></Link> }
    
    </div>
    
    
    {/* //header right */}
    <div className='headeright  flex gap-[15px]  text:[3vw]    lg:text-[2vw]'>
    <Link to='/'><div   className='headerightcontent'>Home</div></Link>
{!user.username&&<Link to='/signup'> <div  className='headerightcontent'>Sign Up</div></Link>}
<ToastContainer/>
{user.username&&<div onClick={()=>{setshowdropdown((pre)=>!pre)}}        className='relative flex gap-[1px]'>{user.role===1?"Admin":"User"} {!showdropdown?<i class="ri-arrow-drop-down-fill"></i>:<i class="ri-arrow-drop-up-fill"></i>}    
 <div className={`dropdown shadow-red-200  shadow-xl px-[1rem] text-[1.6vw] font-light transition-transform duration-700 ${showdropdown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"} bg-white flex flex-col  items-center rounded-lg top-[100%] absolute`}>
  {user.username && <Link to={`/dashboard/${user.role==1?'admin':'user'}`}><div   className=' hover:scale-105  hover:text-red-700  headerightcontent'>Dashboard</div></Link>}


<Link  className='hover:scale-105  hover:text-red-700'>Profile</Link>

<Link onClick={logoutuser}  > <div  className='headerightcontent hover:scale-105  hover:text-red-700  '>Logout</div>

</Link>

</div>



 </div>}


       
      
       
        <Link to='/user/cart'      className='relative '>
          <i className="ri-shopping-bag-line    px-[8px] py-[8px]   rounded-full  text-center "></i>
          <span className='text-white absolute lg:h-[1.8vw] h-[2.3vw] w-[2.3vw]
         text-center lg:w-[1.8vw]     bottom-[50%] left-[60%] rounded-full lg:text-[1.4vw] text-[2vw]  bg-red-600'>{totalincart}</span>
         </Link>
        
        
    </div>
    
  
    </div>
  )
}

export default Header