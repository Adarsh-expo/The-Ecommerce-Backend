//https://ecommerce-backend-teif.onrender.com/api/v1/category/allcategory'

import { updatecategories } from "../reducers/categoriesreducer"; 
import axios from "axios";

const allcategcall=()=>async(dispatch)=>{

    const data=await axios .get('https://ecommerce-backend-teif.onrender.com/api/v1/category/allcategory')
    console.log(data.data)
dispatch(updatecategories(data.data.categoriesall))

}
export default allcategcall;

