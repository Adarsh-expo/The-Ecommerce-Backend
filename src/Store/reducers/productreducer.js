import { createSlice } from "@reduxjs/toolkit";
import { actions } from "react-table";


const productsclice=createSlice({
name:"Products",
initialState:{
    value:[]
},
reducers:{

    productInsert:(state,action)=>{

        state.value=action.payload
    }
}


})
export default productsclice.reducer
export   const{productInsert}=productsclice.actions