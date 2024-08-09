import React from 'react'
import Adminmenu from '../utils/Adminmenu'
import Header from '../utils/Header'
function Users() {
  document.title="Users"
  return (
    <> <Header/>  <div className='flex '>
    
    <Adminmenu/>
 <div>users</div>

</div> </>
 
  )
}

export default Users