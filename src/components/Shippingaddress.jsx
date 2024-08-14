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

        const {data}=  await axios.post('http://localhost:3000/api/v1/gateway/ordercheckout',{sumtotal})
        const{data:{key}}=await axios.get('http://localhost:3000/api/v1/gateway/apikey')
        
        var options = {
          key, 
          amount: data.data.amount, 
          currency: "INR",
          name: "UPADHYAY'S APP",
          description: "PAYMENT TEST OF ECOMMERCE",
          image: "https://media.licdn.com/dms/image/D4E03AQG8Rss60QDMvA/profile-displayphoto-shrink_100_100/0/1718255966748?e=1727308800&v=beta&t=0Pr_XlS15HAz2PTFfeUCdyRWOWifwnKdiV2jG2DTF0Q",
          order_id:data.data.id  ,//This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          

handler:function(res){

axios.post('http://localhost:3000/api/v1/gateway/paymentverfication',{addressobject,res,amount:data.data.amount*1/100,selectedproduct,id:user._id})
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
    <div className="w-full flex flex-col items-center h-screen">
  {/* Header */}
  <div className="w-[95vw] border-b border-b-zinc-400 flex justify-center items-center text-[4vw] sm:text-[2.7vw] h-[12vw] sm:h-[8vw] bg-zinc-200">
    <div>Checkout</div>
  </div>

  {/* Main content area */}
  <div className="w-full flex flex-col md:flex-row h-full">
    {/* Address form section */}
    <div className="w-full md:w-2/3 overflow-y-auto flex flex-col p-4">
      <span className="text-orange-500 ml-[5vw] text-[4vw] sm:text-[2vw] font-medium">
        Enter The Shipping Address
      </span>
      <form
        noValidate
        onSubmit={checkvalidity}
        className="flex mb-8 border border-zinc-300 rounded-lg p-4 md:ml-[7vw] mt-4 w-full md:w-[75%] flex-col"
      >
        <span className="text-[4vw] sm:text-[2vw] font-semibold">
          Add a new address
        </span>
        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          Country/Region
        </label>
        <select
          value={addressobject.Country}
          name="Country"
          onChange={addressformhandler}
          className="border h-[3rem] text-[3vw] sm:text-[1.4vw] p-2 outline-none rounded border-black"
        >
          {countries
            ? countries.map((ele) => <option>{ele.name}</option>)
            : <option>None</option>}
        </select>

        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          State
        </label>
        <input
          required
          value={addressobject.State}
          placeholder="State"
          name="State"
          onChange={addressformhandler}
          className="bg-white border h-[3rem] text-[3vw] sm:text-[1.4vw] p-2 rounded outline-none border-black"
          type="text"
        />

        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          Full name
        </label>
        <input
          required
          value={addressobject.fullname}
          placeholder="Enter Full Name"
          name="fullname"
          onChange={addressformhandler}
          className="bg-white text-[3vw] sm:text-[1.4vw] p-2 border h-[3rem] rounded outline-none border-black"
          type="text"
        />

        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          City
        </label>
        <input
          required
          value={addressobject.city}
          placeholder="Enter City"
          name="city"
          onChange={addressformhandler}
          className="bg-white text-[3vw] sm:text-[1.4vw] p-2 border h-[3rem] rounded outline-none border-black"
          type="text"
        />

        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          Flat no
        </label>
        <input
          required
          value={addressobject.Flatno}
          placeholder="Flat No /House No"
          name="Flatno"
          onChange={addressformhandler}
          className="bg-white text-[3vw] sm:text-[1.4vw] p-2 border h-[3rem] rounded outline-none border-black"
          type="text"
        />

        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          Street no
        </label>
        <input
          required
          value={addressobject.streetno}
          placeholder="Street No"
          name="streetno"
          onChange={addressformhandler}
          className="bg-white text-[3vw] sm:text-[1.4vw] p-2 border h-[3rem] rounded outline-none border-black"
          type="text"
        />

        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          Landmark
        </label>
        <input
          required
          value={addressobject.Landmark}
          placeholder="Mention Landmark"
          name="Landmark"
          onChange={addressformhandler}
          className="bg-white text-[3vw] sm:text-[1.4vw] p-2 border h-[3rem] rounded outline-none border-black"
          type="text"
        />

        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          Phone No
        </label>
        <input
          required
          value={addressobject.phoneno}
          placeholder="Enter Phone no"
          name="phoneno"
          onChange={addressformhandler}
          className="bg-white text-[3vw] sm:text-[1.4vw] p-2 border h-[3rem] rounded outline-none border-black"
          type="tel"
        />

        <label className="text-[3vw] sm:text-[1.3vw] text-zinc-800 font-semibold mt-4">
          Zipcode
        </label>
        <input
          value={addressobject.Zipcode}
          placeholder="Zip code"
          name="Zipcode"
          onChange={addressformhandler}
          className="bg-white text-[3vw] sm:text-[1.4vw] p-2 border h-[3rem] rounded outline-none border-black"
          type="text"
          maxLength={6}
          inputMode="numeric"
          pattern="[0-9]{6}"
          required
        />

        <button className="bg-yellow-400 mt-4 rounded text-[4vw] sm:text-[1.5vw] font-light h-[3rem]">
          Use this address
        </button>
      </form>
    </div>

    {/* Order summary */}
    <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
      <div className="border flex flex-col border-black rounded-lg w-full h-auto p-4 bg-white">
        <span className="text-[4vw] sm:text-[1vw]">
          Choose a shipping address and payment method to calculate.
        </span>
        <hr className="my-4"/>
        <div className="text-[4vw] sm:text-[1.3vw] font-semibold">
          Order Summary
        </div>
        <div className="text-[4vw] sm:text-[1vw] mt-2">Total Items: {subtotal}</div>
        <hr className="my-4"/>
        <div className="text-[4vw] sm:text-[1.4vw] font-semibold flex justify-between text-red-800">
          <div>Order Total:</div>
          <div className="flex items-center">
            <i className="text-[6vw] sm:text-[2vw] ri-money-rupee-circle-fill"></i>
            <NumericFormat value={sumtotal} displayType="text" thousandSeparator />
          </div>
        </div>
        <button
          disabled={!addressready}
          onClick={() => { checkoutorder(sumtotal); }}
          className={`${!addressready ? "bg-yellow-200" : "bg-yellow-400"} mb-4 h-[3rem] flex justify-center items-center rounded-lg mt-4`}
        >
          Pay to Order
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Shippingaddress