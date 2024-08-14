import React from 'react'
import Usermenu from '../utils/Usermenu'
import Header from '../utils/Header'
function Profile() {
    document.title="Your Profile"



    const[size,setsize]=useState(window.innerWidth)

    useEffect(()=>{
    window.addEventListener('resize',()=>{
    
      const sizewidth=window.innerWidth
      setsize(sizewidth)
    })
    
    
    },[])



  return (<div> 
    
    <Header/>
    
     <div className='flex '>
    
    <Usermenu  size={size} setsize={setsize}/>
  <div>profile</div>

</div> </div>
  
  )
}

export default Profile