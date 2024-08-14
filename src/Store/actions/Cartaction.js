import axios from "axios"

import { Inserttocart } from "../reducers/cartreducer"



const addtocart=()=>async(dispatch)=>{
  try{const {data:{allcart=[]}}=await axios.get('https://ecommerce-backend-teif.onrender.com/api/v1/getallcartdata',{withCredentials:true})


  console.log(allcart)
  dispatch(Inserttocart(allcart))

  }
catch(err){

    console.log(err.message)
}

}
export default addtocart;