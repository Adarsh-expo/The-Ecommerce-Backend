import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from '../utils/Header';
import { customToastOptions } from '../utils/Header';

function Signin() {
  const [detailobject, setdetailobject] = useState({
    username: '',
    email: '',
    password: '',
    avatar: '',
    address: '',
    phone: ''
  });

  const Navo = useNavigate();

  const changeinsert = (e) => {
    const title = e.target.title;
    const val = e.target.value;
    setdetailobject((pre) => ({ ...pre, [title]: val }));
  };

  const submithandler = async (e) => {
    e.preventDefault();

    const passwordinput = e.target.querySelector('.passinput')
    const userinput = e.target.querySelector('.userinput')

    passwordinput.setCustomValidity("")
    userinput.setCustomValidity("")

    if (passwordinput.value.trim() === '') {
      passwordinput.setCustomValidity("Password can't be empty")
    }
    if (userinput.value.trim() === '') {
      userinput.setCustomValidity("Username can't be empty")
    }
    if(userinput.value.trim().length<5){

      userinput.setCustomValidity("At least 5 character required")
    }
    if (!passwordinput.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {
      passwordinput.setCustomValidity("Password must be at least 6 characters long and include a number, an uppercase letter, and a lowercase letter.")
    }

    const check = e.target.checkValidity();
    if (!check) {
      e.target.reportValidity()
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/v1/user/register',
        detailobject, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      console.log(res.data.message)

      if (!res.data.status) {
        toast.warn(res.data.message, customToastOptions)
      } else {
        await toast.success(res.data.message, customToastOptions)
        setTimeout(() => { Navo('/signup') }, 5000)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(detailobject)
  }, [detailobject])

  return (
    <>
      <Header />
      <div className='w-full h-full flex flex-col items-center justify-center py-8 gap-6'>
        <div className='text-2xl md:text-4xl font-normal'>Register Account</div>
        <div>
          <form noValidate onSubmit={submithandler} className='flex w-full max-w-lg p-4 items-center flex-col gap-6 rounded'>
            <input
              type='text'
              required
              placeholder='Username'
              title='username'
              onChange={changeinsert}
              className='pl-2 userinput font-light outline-none w-full  h-12 bg-white border-[1px] border-zinc-400    text-sm md:text-base rounded-lg'
            />
            <input
              type='email'
              required
              placeholder='Email'
              title='email'
              onChange={changeinsert}
              className='pl-2 font-light outline-none w-full  h-12 bg-white border-[1px]   border-zinc-400   text-sm md:text-base rounded-lg'
            />
            <input
              type='tel'
              required
              placeholder='Phone'
              maxLength={10}
              pattern='[0-9]{10}'
              title='phone'
              onChange={changeinsert}
              className='pl-2 font-light outline-none w-full  h-12 bg-white border-[1px] border-zinc-400    text-sm md:text-base rounded-lg'
            />
            <input
              type='text'
              required
              placeholder='Address'
              title='address'
              onChange={changeinsert}
              className='pl-2 font-light outline-none w-full  h-12 bg-white border-[1px] border-zinc-400  text-sm md:text-base rounded-lg'
            />
            <input
              type='password'
              placeholder='Password'
              title='password'
              minLength={6}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              onChange={changeinsert}
              className='pl-2 passinput font-light outline-none w-full h-12 bg-white border-[1px] border-zinc-400   text-sm md:text-base rounded-lg'
            />
            <input
              type='file'
              accept='image/*'
              title='avatar'
              placeholder='Image'
              onChange={(e) => { setdetailobject((pre) => ({ ...pre, avatar: e.target.files[0] })); }}
              className='pl-2 font-light outline-none w-full  h-12 bg-white border-[1px] text-xs  border-zinc-400    md:text-sm rounded-lg'
            />
            <input
              type='submit'
              className='bg-blue-500 h-10 w-full md:w-1/4 text-xs md:text-sm text-white rounded'
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin;
