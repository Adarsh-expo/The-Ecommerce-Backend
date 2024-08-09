import { productInsert } from "../reducers/productreducer"
import axios from "axios"
const Productcall=()=>async(dispatch)=>{

try{
    const res=await axios.get('http://localhost:3000/api/v1/product/allproduct')

dispatch(productInsert(res.data))
}
catch(err){
    console.log(err.message)
}




}
export default Productcall;