import React, { useEffect ,useState} from 'react'
import Header from '../utils/Header'
import Adminmenu from '../utils/Adminmenu'
import Productcall from '../Store/actions/productaction'
import { useDispatch,useSelector } from 'react-redux'
import Reactable from '../utils/Reacttable'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allcategcall from '../Store/actions/categoriecallaction'
import { customToastOptions } from '../utils/Header'



function Products() {



  const[allsubcateg,setallsubcateg]=useState([]);


const subcateg=async(slug)=>{
const res=await axios.get(`http://localhost:3000/api/v1/category/allsubcategory/${slug}`)
setallsubcateg(res.data.categoriesall[0].Allslugbasedcategory);
console.log(res.data.categoriesall[0].Allslugbasedcategory)

}




  //for prduct detain to fill in table
const productdata=useSelector((state)=>state.Products.value)
console.log(productdata)
//and this one for categories
const categoriesdata=useSelector((state)=>state.Categories.value )
console.log(categoriesdata)
const disp=useDispatch()


useEffect(()=>{
 // for loading fresh product data in redux
disp(Productcall())
//for loading fresh category data redux
disp(allcategcall())

},[])











const deleteproduct=async(id)=>{
try{const res=await axios.get(`http://localhost:3000/api/v1/product/deleteproduct/${id}`,{withCredentials:true})

toast.success(res.data.message,customToastOptions)
setTimeout(()=>{disp(Productcall())},2000)

}
catch(err){

  console.log(err.message)
}



}



const array=productdata.map((ele)=>({...ele,pic:<img   className='h-[3rem] ml-3 object-contain  w-[7vw]' src={ele.photo}/>,actions:<div className='flex gap-[2rem]'><Link  to={`/dashboard/admin/products/updateproduct/${ele.slug}`}><button className='bg-orange-300 rounded w-[4vw]  '>Edit</button></Link><button onClick={()=>{deleteproduct(ele._id)}} className='bg-red-300 rounded w-[6vw] '>Delete</button></div>}))



  const column=[ {Header:"Photo",accessor:"pic"},{Header:"Name",accessor:"name"}, {Header:"Productsubcategory",accessor:"productsubcategory"}
  ,{Header:"Productcategory",accessor:"productcategory"},
 ,{Header:"Action",accessor:"actions"}]



  return (
    <><Header/>
    <div className='flex relative '>
    
    <Adminmenu/>
    <div className='shadow-xl  w-[15vw] items-center  flex flex-col '>
    {categoriesdata.map((ele)=>
      <div className='flex flex-col'>
      <div    onClick={()=>{subcateg(ele.slug)}}  className='text-[1.4rem] text-center   w-[100%]  relative'>
        {ele.name} 
        </div> 
         <div className='w-[100%]'>{allsubcateg.map((ele)=><span>{ele.name}</span>)}</div>
         
         
         </div>    )} 
       
       
       
        </div>
 <div className='w-[65vw]  h-[80vh]    overflow-y-auto    flex flex-col items-center gap-[3rem] pt-[3rem]'>
<span className='mt-[1rem] text-[2vw] flex justify-center gap-[2rem]   items-center ml-[0.5rem]'> Products  </span>
   <Reactable columns={column} data={array}/> 
  </div>








</div> </>
  )
}

export default Products

