//http://localhost:3000/api/v1/category/allcategory'

import { updatecategories } from "../reducers/categoriesreducer"; 
import axios from "axios";

const allcategcall=()=>async(dispatch)=>{

    const data=await axios .get('http://localhost:3000/api/v1/category/allcategory')
    console.log(data.data)
dispatch(updatecategories(data.data.categoriesall))

}
export default allcategcall;

