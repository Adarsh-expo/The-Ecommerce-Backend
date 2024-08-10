import React from 'react'
import { useParams } from 'react-router-dom'
import Reactable from '../utils/Reacttable';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Categoryform from '../utils/Categoryform'
import Header from '../utils/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from '../utils/Header'



function Createsubcateg() {
    const params=useParams();
    const{slug}=params;
    console.log(params)


//this i am creating in order to hide unhide  category form
const [hide ,sethide]=useState(false);
const [hide1 ,sethide1]=useState(false);
const [category,setcategory]=useState([])

  //state variable in order to pass selected category so that any operation could be performed on that
  const [Editdata ,setedit]=useState({})












  document.title="Createcategory"
  const column=[{Header:'id',accessor:'_id'}
  ,{Header:'Name',accessor:'name'},
  {Header:'Action',accessor:'action'}
  
  ]

 





 //we are using useeffect for getting all category on compinent mount
  useEffect(()=>{
const getallcategory=async()=>{
  const categdata=await axios.get(`https://ecommerce-backend-teif.onrender.com/api/v1/category/allsubcategory/${slug}`,{withCredentials:true})
console.log(categdata.data)

  setcategory(categdata.data.categoriesall[0].Allslugbasedcategory)
console.log(category)}

getallcategory()




  },[hide,hide1])


 console.log('ccccc')
//delete the specific category


const deletecategory=async(ele)=>{
  try{const res=await axios.delete(`https://ecommerce-backend-teif.onrender.com/api/v1/category/deletesubcategory/${ele._id}`,{withCredentials:true})

sethide1((pre)=>!pre)

 }

catch(err){
  console.log(err.message)
}

}







const array= category.map((ele,index)=>({...ele,action:<div key={index}>
  <Link  to=''><button  onClick={()=>{sethide((pre)=>!pre);setedit(ele)}}   
  className='text-green-700 ml-[12px]'>Edit</button>
  </Link>
  <Link ><button  onClick={()=>{deletecategory(ele)}} className='text-red-700 ml-[12px] '>Delete</button></Link></div>}))

  


  return (
    <><Header/>
    <div className=' relative '>
    
    
 <div className='w-[100vw] flex flex-col      items-center gap-[3rem] pt-[3rem]'>
<span className='mt-[2rem] text-[2vw] flex justify-center items-center gap-[4rem] ml-[0.5rem]'> Create SubCategory  {hide&&<Categoryform  data={[Editdata,setedit]}        set={[hide,sethide]}   />}</span>
  
   <Reactable columns={column} data={array}/>

  </div>
<div onClick={()=>{sethide((pre)=>!pre); setedit({})} }     className='   absolute       text-red-500 text-[2vw] hover:scale-105   top-[4.4rem] right-[8vw]'><i class="ri-add-circle-line"></i></div>







</div> </>
  )
}

export default Createsubcateg