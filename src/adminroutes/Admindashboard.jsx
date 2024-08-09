import React from 'react'
import Adminmenu from '../utils/Adminmenu'
import {useTable} from "react-table"
import Reactable from '../utils/Reacttable'
import { Link } from 'react-router-dom'
import Header from '../utils/Header'

function Admindashboard() {
    document.title="Admindashboard"

    
  const column=[{Header:'id',accessor:'id'}
  ,{Header:'Quantity',accessor:'quantity'},
  {Header:'Discount',accessor:'discount'},
  {Header:'Amount',accessor:'amount'},
  {Header:'Status',accessor:'status'},
  {Header:'Action',accessor:'action'},
  ]
  const data=[{id:123,quantity:4,discount:7,amount:1234,status:<span className='text-red-600'>processing</span>,action:<Link className=' w-[1rem] rounded bg-blue-400' to='/orders/123'>view</Link>},{id:123,quantity:4,discount:7,amount:1234,status:<span className='text-red-600'>processing</span>,
  action:<Link className=' w-[1rem] rounded bg-blue-400' to='/orders/123'>view</Link>},{id:123,quantity:4,discount:7,amount:1234,status:<span className='text-red-600'>processing</span>,action:<Link className=' w-[1rem] rounded bg-blue-400' to='/orders/123'>view</Link>},{id:123,quantity:4,discount:7,amount:1234,status:<span className='text-red-600'>processing</span>,action:
  <Link className=' w-[1rem] rounded bg-blue-400' to='/orders/123'>view</Link>},{id:123,quantity:4,discount:7,amount:1234,status:<span className='text-red-600'>processing</span>,action:<Link className=' w-[1rem] rounded bg-blue-400' to='/orders/123'>view</Link>},{id:123,quantity:4,discount:7,amount:1234,status:<span className='text-red-600'>processing</span>,action:<Link className=' w-[1rem] rounded bg-blue-400' to='/orders/123'>view</Link>},{id:123,quantity:4,discount:7,amount:1234,status:<span className='text-red-600'>processing</span>,action:<Link className=' w-[1rem] rounded bg-blue-400' to='/orders/123'>view</Link>}]
  
  
  
  return (
    <> <Header/> <div className='flex '>
    
    <Adminmenu/>
 <div className='w-[80vw] flex flex-col items-center gap-[3rem] pt-[3rem]'>
<span className='mt-[2rem] text-[2vw]  ml-[0.5rem]'> Create Category</span>
  <Reactable columns={column} data={data}/>
  </div>

</div> </>
  
  )
  
}

export default Admindashboard