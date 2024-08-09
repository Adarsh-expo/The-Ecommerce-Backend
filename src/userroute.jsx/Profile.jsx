import React from 'react'
import Usermenu from '../utils/Usermenu'
import Header from '../utils/Header'
function Profile() {
    document.title="Your Profile"
  return (<div> 
    
    <Header/>
    
     <div className='flex '>
    
    <Usermenu/>
  <div>profile</div>

</div> </div>
  
  )
}

export default Profile