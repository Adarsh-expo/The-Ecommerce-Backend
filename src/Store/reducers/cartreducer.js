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
const cartintotal=state.value.reduce((acc,curval)=>acc+curval.choosenquantity,0)
state.totalincart=cartintotal


//to initialse with the selected product value so i could use it in other component specially during checkout
state.selectedproduct=action.payload;



}









,
        Inserttocart:(state,action)=>{

            const index=state.value.findIndex((ele)=>ele._id===action.payload._id)
            console.log(index)
            if(index<0){
                

                state.value.push(action.payload)

            }
            else{
                if(state.value[index].choosenquantity<state.value[index].quantity)
                state.value[index].choosenquantity+=1;
            }



        },

sequentialdelete:(state,action)=>{
console.log(action.payload)
    
    if(action.payload.choosenquantity>0)
    {
        const findindex=state.value.findIndex((ele)=>ele._id===action.payload._id)

        state.value[findindex].choosenquantity-=1;
    
    }


    
}
,

        Deletefromcart:(state,action)=>{

            state.value=state.value.filter((ele)=>ele._id!==action.payload._id)
         
        }


        
    }
})
export const {Inserttocart,Deletefromcart,sequentialdelete,moredetails}=cartslice.actions;
export default cartslice.reducer;