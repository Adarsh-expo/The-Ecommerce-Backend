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
import '../styles/Header.css'
import addtocart from '../Store/actions/Cartaction';


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

const des=useDispatch();
useEffect(()=>{des(moredetails())},[value])




    const Categories=useSelector((state)=>state.Categories.value)
    console.log(Categories)
 


  
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


console.log(totalincart,value)



  return (
    <div className='w-[100%]  mainheader h-[7rem] bg-black  z-50 sticky top-0 
    flex justify-between items-center px-[10px]'>
    {/* headerleft portion */}
    <div className=' logo  md:text-[2rem] flex  lg:text-[3rem] font-semibold'><div className='text-white '>EXPO </div><div className='text-red-600 '>BUY</div></div>
   
   

{/* 
   Mid section */}
    <div  className='input flex justify-center  md:w-[40vw] w-[50vw]    lg:w-[35vw] lg:h-[4rem] md:h-[3rem] h-[2.3rem]
      items-center bg-white  rounded-lg'> 
    
    <select onChange={(e)=>{setcategsearch(e.target.value);setringcolor(true)}} className='h-[100%] selectcategory rounded-lg lg:text-[1.3vw] text-[2.3vw]     w-[24%] outline-none '>
    <option  value='All Categories'  className='  text-center bg-white'>All</option>
      {Categories.map((ele,index)=><option key={index}  value={ele.name} className='bg-white'>{ele.name}</option>)}</select>
    <input onChange={(e)=>{setsearch(e.target.value)}}    value={search} placeholder='SearchIn' className=' outline-none  pl-2 lg:text-[1.4rem] md:text-[1.3rem]    text-[0.7rem]  w-[69%] 
      h-[100%] '  type='search'/>
    

{search.trim()===""?

   <Link    to={`/products/${categsearch}`} className='lg:w-[10%] searchbox h-[100%] w-[16%] bg-red-600  hover:scale-105'><i class={`ri-search-line text-white   w-[100%]    ${ringcolor && "ring-2 ring-offset-2 rounded ring-red-500"}  flex items-center  justify-center
     h-[100%]   text-[4.4vw] lg:text-[1.9vw]`}></i></Link> :
      <Link      to={`/products/search/${search}`}    className='lg:w-[10%] searchbox  w-[15%] h-[100%] bg-red-600  hover:scale-105'><i class="ri-search-line  text-white   w-[100%] flex items-center  justify-center
     h-[100%]  text-[4.4vw]  lg:text-[1.9vw]"></i></Link> }
    
    </div>
    
    
    {/* //header right */}
    <div className='headeright  flex lg:gap-[15px]    md:gap-[15px] gap-[20px] text:[3vw]  text-white  lg:text-[2vw]'>
    <Link to='/'><div   className='headerightcontent'>Home</div></Link>
{!user.username&&<Link to='/signup'> <div  className='headerightcontent '>Sign Up</div></Link>}
<ToastContainer/>
{user.username&&<div onClick={()=>{setshowdropdown((pre)=>!pre)}}       
 className='relative    flex gap-[1px]'>{user.role===1?"Admin":"User"} {!showdropdown?
 <i class="ri-arrow-drop-down-fill"></i>:<i class="ri-arrow-drop-up-fill"></i>}    
 <div className={`dropdown shadow-red-200  shadow-xl px-[1rem] text-[1.6vw] font-light transition-transform duration-700 ${showdropdown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"} bg-white flex flex-col  items-center rounded-lg top-[100%] absolute`}>
  {user.username && <Link to={`/dashboard/${user.role==1?'admin':'user'}`}><div   className=' text-[1.4rem] text-zinc-400 hover:scale-105  hover:text-red-700  headerightcontent'>Dashboard</div></Link>}
<hr className='text-zinc-600   w-[95%] h-[1px]'/>

<Link  className='hover:scale-105   text-[1.4rem] text-zinc-400 hover:text-red-700'>Profile</Link>
<hr className='text-zinc-600   w-[95%] h-[1px]'/>
<Link onClick={logoutuser}  > <div  className='headerightcontent text-[1.4rem]  text-zinc-400 hover:scale-105  hover:text-red-700  '>Logout</div>

</Link>

</div>



 </div>}


       
      
       
        <Link to={  totalincart?"/user/cart":"/viewcart?Exploremode=true"}      className='relative  '>
          <i className="ri-shopping-bag-line     "></i>
         {totalincart!=0&&   <span className='text-white absolute lg:h-[2rem] h-[1rem] w-[1rem] md:w-[1.5rem] md:h-[1.5rem]
         text-center lg:w-[2rem]  flex justify-center items-center   bottom-[50%] left-[56%] rounded-full md:text-[1.8vw] lg:text-[1.4vw] text-[2.4vw]   bg-red-600'>
          {totalincart}</span>}
        
           
          
          
          
         </Link>
        
        
    </div>
    
  
    </div>
  )
}

export default Header