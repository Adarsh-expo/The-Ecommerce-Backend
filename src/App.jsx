import { useState } from 'react'
import Home from './components/Home'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Protectedroute from './protectedroute/Protectedroute'
import Cart from './components/Cart'
import About from './components/About'
import Userroute from './protectedroute/Userroute'
import Adminroute from './protectedroute/Adminroute'
import Admindashboard from './adminroutes/Admindashboard'
import Userdashboard from './userroute.jsx/Userdashboard'
import Createcategory from './adminroutes/Createcategory'
import Createproduct from './adminroutes/Createproduct'
import Users from './adminroutes/Users'
import Profile from './userroute.jsx/Profile'
import Orders from './userroute.jsx/Orders'
import Createsubcateg from './adminroutes/Createsubcateg'
import Products from './adminroutes/Products'
import Updateproduct from './adminroutes/Updateproduct'
import Productcarts from './utils/Productcarts'
import Searchproduct from './utils/Searchproduct'
import Productdetail from './components/Productdetail'
import Ordersuccessfull from './components/Ordersuccessfull'
import Shippingaddress from './components/Shippingaddress'
import Adminorder from './adminroutes/Adminorder'
import Loginsuggest from './components/Loginsuggest'





function App() {
  

  return (
  <>
  <Router>

<Routes>
  {/* general route */}
<Route path='/' element={<Home/>}/>
  <Route path='/signin' element={<Signin/>} />
  <Route path='/signup' element={<Signup/>} />
  <Route path='/products/:category' element={<Productcarts/>} />
  <Route path='/products/search/:keyword' element={<Searchproduct/>} />
  <Route path='/products/category/:subcategory' element={<Productcarts/>} />
  <Route path='/products/category/:subcategory' element={<Productcarts/>} />
  <Route path='/products/search/:subcategory/:productslug' element={<Productdetail/>} />
  <Route path='/products/:subcategory/:productslug' element={<Productdetail/>} />
  <Route path='/Bestseller/headphone/:productslug' element={<Productdetail/>} />
  <Route path='/Paymentsuccessfull' element={<Ordersuccessfull/>} />
  <Route path='/viewcart' element={<Loginsuggest/>} />




{/* who are generally logged in */}
  <Route  path='/user'   element={<Protectedroute/>}>
     <Route path='cart' element={<Cart/>}/>    
     <Route path='cart/addshippingaddress' element={<Shippingaddress/>}/>    
     <Route path='cart/orders' element={<Orders/>}/>    
     
     
     
      </Route>

  {/* //admin protected route */}
 <Route path='/dashboard'  element={<Adminroute/>}> <Route  path='admin' element={<Admindashboard/>}  />
   <Route  path='/dashboard/admin/create-category' element={<Createcategory/>}/> 
   <Route  path='/dashboard/admin/create-product' element={<Createproduct/>}/>
   <Route  path='/dashboard/admin/users' element={<Users/>}/>
   <Route  path='/dashboard/admin/adminorder' element={<Adminorder/>}/>
   <Route  path='/dashboard/admin/products' element={<Products/>}/>
   <Route  path='/dashboard/admin/products/updateproduct/:slug' element={<Updateproduct/>}/>
   <Route  path='/dashboard/admin/create-category/subcategory/:slug' element={<Createsubcateg/>}/>
   
 
 
  </Route>
  {/* //userprotectde route */}
 <Route path='/dashboard'  element={<Userroute/>}> <Route  path='user' element={<Profile/>} />  
 
 <Route   path='/dashboard/user/profile'  element={<Profile/>} />
 <Route   path='/dashboard/user/order'  element={<Orders/>} />
 
 
 
  </Route>

  <Route path='*' element={<h1>page not found</h1>} />
</Routes>


  </Router>

</>



 
  )
}

export default App
