import React from 'react'
import Adminmenu from '../utils/Adminmenu'
import Header, { customToastOptions } from '../utils/Header'
import Reactable from '../utils/Reacttable'
import { Select } from 'antd';
import axios from 'axios'
import { useEffect,useState } from 'react'
import moment from 'moment'
import {Table} from 'antd'
import Orderboxcart from '../utils/Orderboxcart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Adminorder() {




const[Allorders,setallorder]=useState([])
const[status,setstatus]=useState('Not process')


useEffect(()=>{

    const allorder=async()=>{
        try{
            const res=await axios.get('http://localhost:3000/api/v1/detail/getallorderdetail',{withCredentials:true})
setallorder(res.data.orders)
console.log(res.data.orders)


}
catch(err){
    console.log(err.message)
}


    }


allorder()

},[])

const handlechange=async(value,orderid)=>{


  try{const updatestatus=await axios.put(`http://localhost:3000/api/v1/detail/updateorder?order=${orderid}&status=${value}`,{},{

withCredentials:true,

})

if(updatestatus.data.success){

toast.success(updatestatus.data.status,customToastOptions)
}
else{
  toast.success(updatestatus.data.status)
}


}
catch(err){
  console.log(err.message)
 
}



}









    const column=[{ title: 'Buyer',
    dataIndex: 'buyer',
    key: 'buyer',},{ title: 'Date',
    dataIndex: 'date',
    key: 'date',},{ title: 'Payment',
    dataIndex: 'payment',
    key: 'payment'},{ title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity'},{ title: 'Status',
    dataIndex: 'status',
    key: 'status',}
    ]
  return (
    <div>
<Header/>
<div className='flex'>
<Adminmenu/>
<div className='w-[75vw]'>
{Allorders.length>0 && Allorders.map((ele,index)=>

<>

<Table     pagination={{
          position: ['none'],
        }}    dataSource={[{buyer:ele.buyer.username,date:moment(ele.createdAt).fromNow(),payment:ele.payment.amount,quantity:ele.quantity,

status:<Select  onChange={(value)=>{handlechange(value,ele.payment.razorpayorderid)}}    options={[
    {
      value: 'Not process',
      label: 'Not process',
    },
    {
      value: 'Processing',
      label: 'Processing',
    },
    {
      value: 'shipped',
      label: 'Shipped',
    },
    {
      value: 'delivered',
      label: 'Delivered',
      
    },
    {
        value: 'cancel',
        label: 'Cancel',
        
      },
  ]}    defaultValue={ele.status}
/>}]} columns={column} />
<div className='mb-[8vw]'><Orderboxcart  key={index} wholedata={ele} /></div>

</>



)



}
    
</div>



</div>


    </div>
  )
}

export default Adminorder