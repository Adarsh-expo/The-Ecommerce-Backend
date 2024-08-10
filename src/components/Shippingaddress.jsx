import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios'
function Shippingaddress() {

const {subtotal,sumtotal}=useSelector((state)=>state.Cart)
const {username,email,phone}=useSelector((state)=>state.User.value)
console.log(phone)
const[countries,setcountries]=useState([])
const [addressobject,setaddressobject]=useState({

    fullname:'',
    city:'',
    phoneno:'',
    Zipcode:'',
    State:'',
    Flatno:'',
    Landmark:'',
    Country:'India',
    streetno:''
})
const[addressready,setaddressready]=useState(false)


useEffect(()=>{
const countrycall=async()=>{
    const {data:{data}}=await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')

const country=data.splice(0,100)
setcountries(country)
}
countrycall()

},[])


useEffect(()=>{console.log(addressobject)},[addressobject])











const addressformhandler=(e)=>{
e.preventDefault();
setaddressobject((pre)=>({...pre,[e.target.name]:e.target.value}))


}

const selectedproduct=useSelector((state)=>state.Cart.selectedproduct)
console.log(selectedproduct)
const user=useSelector((state)=>state.User.value)
console.log(user)



    const checkoutorder=async(sumtotal)=>{

        console.log(addressobject)

        const {data}=  await axios.post('https://ecommerce-backend-teif.onrender.com/api/v1/gateway/ordercheckout',{sumtotal})
        const{data:{key}}=await axios.get('https://ecommerce-backend-teif.onrender.com/api/v1/gateway/apikey')
        
        var options = {
          key, 
          amount: data.data.amount, 
          currency: "INR",
          name: "UPADHYAY'S APP",
          description: "PAYMENT TEST OF ECOMMERCE",
          image: "https://media.licdn.com/dms/image/D4E03AQG8Rss60QDMvA/profile-displayphoto-shrink_100_100/0/1718255966748?e=1727308800&v=beta&t=0Pr_XlS15HAz2PTFfeUCdyRWOWifwnKdiV2jG2DTF0Q",
          order_id:data.data.id  ,//This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          

handler:function(res){

axios.post('https://ecommerce-backend-teif.onrender.com/api/v1/gateway/paymentverfication',{addressobject,res,amount:data.data.amount*1/100,selectedproduct,id:user._id})
.then((res)=>{console.log(res.data.message)
if(res.data.orderid){window.location.href=`/Paymentsuccessfull/?reference_id=${res.data.orderid}`}



}).
catch((err)=>{
    console.log(err)
})

}
,



          
          prefill: {
              name: username,
              email: email,
              contact: phone
          },
         " notes": {
              address: "kkkkmm"
          },
          theme: {
              color: "#FB923C"
          }
        };
        const razor = new window.Razorpay(options);
        const pay=razor.open();
        
        
        }



        const checkvalidity= (e)=>{e.preventDefault();
            const form=e.target;
            const res=form.checkValidity() ;
            console.log(res)
            if(!res){form.reportValidity()}
              
            else{

                setaddressready(true)
            }
            
            }
            


  return (
    <div className='w-[100vw] flex flex-col items-center h-[100vh]'>
<div className='w-[95vw] border-b-[1px] border-b-zinc-400 flex justify-center items-center text-[2.7vw]  h-[8vw] bg-zinc-200'>
     <div className=''>Checkout  </div>

</div>
{/* div containg both form and payment option */}
<div className=' w-[100%]  flex  h-[84vh]'>
    {/* section of address form */}
<div className='w-[70%] addresection overflow-y-auto flex flex-col'>
<span className='text-orange-500 ml-[5vw]  text-[2vw] font-medium '>Enter The shipping address</span>
<form  noValidate onSubmit={checkvalidity}   className='flex mb-[2rem] border-zinc-300 rounded-lg border-[1px] px-[2rem]  ml-[7vw] mt-[1rem]  w-[75%] flex-col'>
<span className='text-[2vw] font-semibold' >Add a new address</span>
<label className='text-[1.3vw] text-zinc-800   font-semibold'>Country/Region</label>
<select  value={addressobject.Country}  name='Country' onChange={addressformhandler} className=' border-[1px] h-[2.6rem] text-[1.4vw] pl-[0.7rem]   outline-offset-4 outline-[2rem]    outline-[#037386] rounded border-black'>
{countries? countries.map((ele)=><option>{ele.name}</option>):<option>None</option>}
    
</select>

<label     className='text-[1.3vw] text-zinc-800    mt-[1rem] font-semibold'>State</label>
<input  required   value={addressobject.State}   placeholder='State' name='State' onChange={addressformhandler}    className='  bg-white border-[1px] h-[2.6rem]  text-[1.4vw] pl-[0.7rem]  rounded outline-yellow-700 border-black' type='text'/>
<label     className='text-[1.3vw] text-zinc-800    mt-[1rem] font-semibold'>Full name</label>
<input  required  value={addressobject.fullname}   placeholder='Ener Full Name' name='fullname' onChange={addressformhandler}    className=' bg-white    text-[1.4vw] pl-[0.7rem] border-[1px] h-[2.6rem]     outline-yellow-700 rounded border-black' type='text'/>
<label                         className='text-[1.3vw] text-zinc-800  font-semibold    mt-[1rem]'  >City</label>
<input     required   value={addressobject.city}   placeholder='Enter city'     name='city'  onChange={addressformhandler}      className=' bg-white   text-[1.4vw] pl-[0.7rem] border-[1px] h-[2.6rem]     outline-yellow-700 rounded border-black'              text='text'/>
<label className='text-[1.3vw] text-zinc-800  font-semibold    mt-[1rem]'    >Flat no</label>
<input     required   value={addressobject.Flatno}   placeholder=' Flat No /House No'    name='Flatno'  onChange={addressformhandler}         className='  bg-white  border-[1px] h-[2.6rem] text-[1.4vw] pl-[0.7rem]    outline-yellow-700 rounded border-black' type='text'/>
<label className='text-[1.3vw] text-zinc-800  font-semibold  mt-[1rem]'        >Street no</label>
<input   required     value={addressobject.streetno}  placeholder='Street No'  name='streetno'   onChange={addressformhandler}        className='bg-white  border-[1px] h-[2.6rem] text-[1.4vw] pl-[0.7rem]    outline-yellow-700 rounded border-black'    type='text'/>
<label className='text-[1.3vw] text-zinc-800  font-semibold    mt-[1rem]'   >Landmark</label>
<input  required  value={addressobject.Landmark}   placeholder='Mention Landmark'   name='Landmark'    onChange={addressformhandler}      className='bg-white  border-[1px] h-[2.6rem] text-[1.4vw] pl-[0.7rem]    outline-yellow-700 rounded border-black'    type='text'/>

<label className='text-[1.3vw] text-zinc-800  font-semibold    mt-[1rem]'  >Phone No</label>
<input    required  value={addressobject.phoneno}  placeholder='Enter Phone no'   name='phoneno'  onChange={addressformhandler}        className=' bg-white border-[1px] h-[2.6rem] text-[1.4vw] pl-[0.7rem]    outline-yellow-700 rounded border-black' type='tel'/>
<label className='text-[1.3vw] text-zinc-800  font-semibold    mt-[1rem]'    >Zipcode</label>
<input value={addressobject.Zipcode}   placeholder='Zip code'       name='Zipcode' onChange={addressformhandler}      className='bg-white  border-[1px] h-[2.6rem] text-[1.4vw] pl-[0.7rem]   outline-yellow-700 rounded border-black'    type='text' maxLength={6} inputMode='numeric'  pattern="[0-9]{6}"   required />




<button    className='bg-yellow-400 mb-[2rem] mt-[1rem] rounded text-[1.5vw] font-light h-[2.5rem]'  >Use this address</button>

</form>

</div>

{/* //order summary */}
<div className='smallbox w-[30%]  pl-[3vw] h-[30vw]'>

<div className='border-[1px] flex  px-3  flex-col border-black mt-4 rounded-lg w-[75%] h-[80%]'>

<span  className='text-[1vw]'>Choose a shipping address and payment method to calculate.</span>
<hr/>
<div className='  text-[1.3vw]  font-semibold mt-[1rem]'>Order Summary</div>
<div className='text-[1vw] mt-2'>Total Items:{subtotal}</div>
<hr className='my-3'/>
<div className='text-[1.4vw]   font-semibold flex  justify-between  text-red-800'><div>OrderTotal:</div><div className='items-center flex '><i class=" text-[2vw] ri-money-rupee-circle-fill"></i>
<NumericFormat value={sumtotal} displayType='text'   thousandSeparator/></div> </div>
<button  disabled={!addressready}     onClick={()=>{checkoutorder(sumtotal)}} className={`${!addressready?"bg-yellow-200":"bg-yellow-400"}   mb-[10%] h-[2rem] flex justify-center items-center rounded-lg mt-[5%]`}>Pay to Order</button>

</div>

</div>

</div>




    </div>
  )
}

export default Shippingaddress