import { createSlice } from "@reduxjs/toolkit";


const categoriesslice=createSlice({

name:"Categories",
initialState:{
value:[]

},
reducers:{
updatecategories:(state,action)=>{


    state.value=action.payload;
}




}

})
   export const{updatecategories}=categoriesslice.actions;
   export default categoriesslice.reducer;