import React from 'react'
import Adminmenu from '../utils/Adminmenu'
import {useTable} from "react-table"
import Reactable from '../utils/Reacttable'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Categoryform from '../utils/Categoryform'
import Header from '../utils/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customToastOptions } from '../utils/Header'
import { useSelector,useDispatch } from 'react-redux'
import { updatecategories } from '../Store/reducers/categoriesreducer'
import allcategcall from '../Store/actions/categoriecallaction'


function Createcategory() {

//this i am creating in order to hide unhide  category form
const [hide ,sethide]=useState(false);
const [hide1 ,sethide1]=useState(false);
const [category,setcategory]=useState([])

  //state variable in order to pass selected category so that any operation could be performed on that
  const [Editdata ,setedit]=useState({})


const categoriesdata=useSelector((state)=>state.Categories.value)
console.log(categoriesdata)

const des=useDispatch();






  document.title="Createcategory"
  const column=[{Header:'id',accessor:'_id'}
  ,{Header:'Name',accessor:'name'},
  {Header:'Action',accessor:'action'}
  
  ]

 





 //we are using useeffect for getting all category on compinent mount
  useEffect(()=>{

 des(allcategcall())


  },[hide,hide1])


 console.log('ccccc')
//delete the specific category


const deletecategory=async(ele)=>{
  try{const res=await axios.delete(`https://ecommerce-backend-teif.onrender.com/api/v1/category/deletecategory/${ele._id}`,{withCredentials:true})

toast(res.data.message,customToastOptions)

setTimeout(()=>{sethide1((pre)=>!pre)},2500)




 }



catch(err){
  console.log(err.message)
}


}







const array=categoriesdata.map((ele,index)=>({...ele,action:<div key={index}><Link to={`/dashboard/admin/create-category/subcategory/${ele.slug}`}><button className='text-red-700 ml-[12px] '>Subcateg</button></Link><Link  to=''><button  onClick={()=>{sethide((pre)=>!pre);setedit(ele)}}   
  className='text-green-700 ml-[12px]'>Edit</button>
  </Link>
  <Link ><button  onClick={()=>{deletecategory(ele)}} className='text-red-700 ml-[12px] '>Delete</button></Link></div>}))

  
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-hidden'><Header/>
    <div className='flex relative '>
    
    <Adminmenu/>
 <div className='w-[80vw] flex flex-col items-center 80vh overflow-y-auto gap-[3rem] pt-[3rem]'>
<span className='mt-[2rem] text-[2vw] flex justify-center gap-[2rem]   items-center ml-[0.5rem]'> Create Category  {hide&&<Categoryform  data={[Editdata,setedit]}        set={[hide,sethide]}   />}</span>
  <Reactable columns={column} data={array}/>
  </div>
<div onClick={()=>{sethide((pre)=>!pre); setedit({})} }     className='   absolute       text-red-500 text-[2vw] hover:scale-105   top-[4.4rem] right-[8vw]'><i class="ri-add-circle-line"></i></div>







</div> </div>
  )
}

export default Createcategory