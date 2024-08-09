import { createSlice } from "@reduxjs/toolkit";




const userslice=createSlice({
name:"User",
initialState:{
    value:{},
},
reducers:{
userchange:(state,action)=>{
state.value=action.payload;
}
,
insertdata:(state,action)=>{
state.value=action.payload

}

}


})
export const {userchange,insertdata}=userslice.actions
export default userslice.reducer