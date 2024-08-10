import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adminmenu from '../utils/Adminmenu';
import Header from '../utils/Header';
import axios from 'axios';
import { customToastOptions } from '../utils/Header';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Updateproduct() {

const {slug}=useParams()

const navo=useNavigate()



  document.title = "Updateproduct";
  const [subcateg, setSubcateg] = useState([]);
  const [image, setImage] = useState('');
  const [obi, setObi] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    photo: '',
    categoryid: '',
    shipping: 1
  });


useEffect(()=>{ const slugcall=async()=>{  
     const res= await axios.get(`https://ecommerce-backend-teif.onrender.com/api/v1/product/singleproduct/${slug}`)
    setObi(res.data[0])
    setImage(res.data[0].photo)
    console.log(res.data[0])
    } 
    slugcall()
    },[])




  const changeInsert = (e) => {
    setObi((prev) => ({ ...prev, [e.target.title]: e.target.value }));
  };

  useEffect(() => {
    console.log(obi);
  }, [obi]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (obi.category === "None") {
        toast.warn("Category is required");
      } else {
        
        
        const res = await axios.post(
          `https://ecommerce-backend-teif.onrender.com/api/v1/product/updateproduct/${obi._id}`,
          obi,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" }
          }
        );

       
       res.data.success ? toast.success(res.data.message, customToastOptions):toast.warn(res.data.message,customToastOptions)
        console.log(res.data.message);
      }
      
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const subcategCall = async () => {
      const res = await axios.get('https://ecommerce-backend-teif.onrender.com/api/v1/category/alltypesubcategory');
      setSubcateg(res.data.allsubcategdata);
    };
    subcategCall();
  }, []);

  return (
    <>
      <Header />
     
      <div className='flex '>
        <Adminmenu />
        
        <div className='flex flex-col items-center     z-10 basis-4/5 overflow-y-scroll  h-[88vh]   justify-center gap-[1rem] w-[80vw]'>
          <span className='text-[2vw]  font-normal mt-[10rem] '>Update Product</span>
          <form className='flex w-[40vw]   px-[8px] py-[8px] items-center flex-col gap-[30px] rounded' onSubmit={submitHandler}>
            <select onChange={changeInsert} value={obi.categoryid} title="categoryid" className='pl-[4px] font-light outline-none w-[72%] border-[2px] h-[7vmin] bg-zinc-200 text-[1.6vw] rounded-lg'>
              <option>None</option>
              {subcateg.map((ele, index) => (
                <option key={index} value={ele._id}>{ele.name}</option>
              ))}
            </select>
            <input type='file' accept='image/*' title='photo' placeholder='Image' onChange={(e) => { setObi((prev) => ({ ...prev, photo: e.target.files[0] })); setImage(URL.createObjectURL(e.target.files[0])) }} className='pl-[4px] font-light outline-none w-[72%] border-[2px] h-[7vmin] bg-zinc-200 text-[1vw] rounded-lg' />
            {image && <div className='bg-white shadow-lg'><img className='w-[11vw] h-[10vw] object-cover' src={image} alt="product" /></div>}
            <input type='text' value={obi.name} required placeholder='Name' title='name' onChange={changeInsert} className='pl-[4px] font-light outline-none w-[72%] border-[2px] h-[7vmin] bg-zinc-200 text-[1.6vw] rounded-lg' />
            <textarea value={obi.description} placeholder='Description' rows='3' cols='30' title='description' onChange={changeInsert} className='pl-[4px] font-light outline-none w-[72%] border-[2px] bg-zinc-200 text-[1.6vw] rounded-lg'></textarea>
            <input value={obi.price} type='number' placeholder='Price' title='price' onChange={changeInsert} className='pl-[4px] font-light outline-none w-[72%] border-[2px] h-[7vmin] bg-zinc-200 text-[1.6vw] rounded-lg' />
            <input value={obi.quantity} type='number' placeholder='Quantity' title='quantity' onChange={changeInsert} className='pl-[4px] font-light outline-none w-[72%] border-[2px] h-[7vmin] bg-zinc-200 text-[1.6vw] rounded-lg' />
            <select onChange={changeInsert} value={obi.shipping} title="shipping" className='pl-[4px] font-light outline-none w-[72%] border-[2px] h-[7vmin] bg-zinc-200 text-[1.6vw] rounded-lg'>
              <option value='1'>Yes</option>
              <option value='0'>No</option>
              </select>
            <input type='submit' className='bg-orange-600 h-[5vh] w-[5vw] text-[1vw] rounded' />
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Updateproduct;
