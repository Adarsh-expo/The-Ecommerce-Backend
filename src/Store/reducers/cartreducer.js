import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"carts",
    initialState:{
        value:[],
        subtotal:0,
        sumtotal:0,
        totalincart:0,
        selectedproduct:[]
    },
    reducers:{


moredetails:(state,action)=>{



console.log(action.payload)
if(action.payload){const sumtotal=action.payload.reduce((acc,curval)=>     acc+curval.price*curval.choosenquantity,0)
const subtotal=action.payload.reduce((acc,curval)=>acc+curval.choosenquantity,0)


state.subtotal=subtotal;
state.sumtotal=sumtotal;
}
//to count total product in cart
console.log(state.value)
const cartintotal=state.value?.reduce((acc,curval)=>acc+curval.choosenquantity,0)
state.totalincart=cartintotal
console.log(cartintotal)

//to initialse with the selected product value so i could use it in other component specially during checkout
state.selectedproduct=action.payload;



}









,
        Inserttocart:(state,action)=>{
console.log(action.payload)
            state.value=action.payload



        },



       


        
    }
})
export const {Inserttocart,Deletefromcart,sequentialdelete,moredetails}=cartslice.actions;
export default cartslice.reducer;