import React from 'react'
import {useTable,useSortBy,usePagination} from 'react-table'




function Reactable({columns,data}) {
     const { getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,previousPage,nextPage,canPreviousPage,canNextPage,state:{pageIndex},pageCount}=useTable({columns,data,initialState:{

            pageSize:6,
        }},useSortBy,usePagination)


  return (<>
  
<table {...getTableProps()} className=' w-[85%] h-[50%] shadow-lg '>
<thead   className=''>
    {headerGroups.map((headerGroups)=>(<tr {...headerGroups.getHeaderGroupProps()}>
        {headerGroups.headers.map((column)=>(<th className='  text-[1.3vw] font-light' {...column.getHeaderProps(column.getSortByToggleProps())}>
            {column.render("Header")}
            
            {
                column.isSorted && <span>{column.isSortedDesc ?' ⬇️':' ⬆️'}</span>
            }
            
            </th>))}
    </tr>))}
</thead>
<tbody  {...getTableBodyProps()}>

{page.map((row)=>{
    prepareRow(row)
    return (


        <tr  className='border-b border-zinc-300 
         '  {...row.getRowProps()}>

{row.cells.map((cell)=>(

    <td className='text-center pt-[0.5rem] pb-[0.5rem]  text-[1.1vw]    font-normal ' {...cell.getCellProps()}>{cell.render("Cell")}</td>
))}

        </tr>
        
    )
})}

</tbody>

</table>
<div className='  flex justify-center  mt-[2rem] gap-[1rem]'>
<button  className='bg-black flex  items-center justify-center text-white   disabled:bg-white disabled:text-zinc-500  disabled:cursor-not-allowed px-[0.4rem] pt-[0.1rem] pb-[0.1rem]    rounded-lg'       disabled={!canPreviousPage}   onClick={previousPage}>pre</button>
<span>{pageIndex+1} of {pageCount}</span>


<button  className='bg-black  flex items-center justify-center text-white px-[0.5rem]  disabled:bg-white disabled:text-zinc-500 disabled:cursor-not-allowed     py-[0.1rem]    rounded-lg'   disabled={!canNextPage}    onClick={nextPage}>next</button>
</div>

</>
  )
}

export default Reactable