import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { insertdata } from '../Store/reducers/userreducer';

function Signup() {
  const navo = useNavigate();
  const [logininfo, setlogininfo] = useState({
    username: '',
    password: ''
  });
  const [eye, seteye] = useState(false);

  const des = useDispatch();

  function changehandler(e) {
    setlogininfo((pre) => ({ ...pre, [e.target.title]: e.target.value }));
  }

  async function submithandler(e) {
    e.preventDefault();
    const form = e.target;
    const userinput = form.querySelector('.signupuser');
    const passwordinput = form.querySelector('.signuppassword');

    userinput.setCustomValidity('');
    passwordinput.setCustomValidity('');

    if (userinput.value.trim() === '') {
      userinput.setCustomValidity("User can't be empty");
    }
    if (passwordinput.value.trim() === '') {
      passwordinput.setCustomValidity('Password can not be empty');
    }
   
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    try {
      const res = await axios.post(
        'http://localhost:3000/api/v1/user/login',
        logininfo,
        { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
      );

      if (res.data.userdata) {
        des(insertdata(res.data.userdata));
      }

      if (!res.data.status) {
        toast.warn(res.data.message);
      } else {
        toast.success(res.data.message);
        setTimeout(() => {
          navo('/');
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5 p-4 sm:p-6 md:p-8">
      <div className="text-3xl font-semibold sm:text-4xl">Login In</div>
      <div className="w-full max-w-lg">
        <form
          noValidate
          onSubmit={submithandler}
          className="flex flex-col items-center gap-4 p-4 bg-white border rounded-lg sm:p-6"
        >
          <div className="flex items-center w-full bg-white border lg:h-[3.6rem] border-gray-300 rounded-lg">
            <i className="ri-user-6-line text-lg sm:text-xl"></i>
            <input
              type="text"
              required
              minLength={5}
              placeholder="Username"
              title="username"
              onChange={changehandler}
              className="flex-1 p-2 text-sm lg:h-[95%] signupuser  bg-transparent outline-none sm:text-base"
            />
          </div>

          <div className="flex items-center w-full      lg:h-[3.6rem] bg-white border border-gray-300 rounded-lg">
            <i className="ri-key-2-fill text-lg sm:text-xl"></i>
            <input
              required
              minLength={6}
              maxLength={20}
              placeholder="Password"
              className="flex-1 p-2 text-sm bg-transparent  signuppassword  lg:h-[95%] outline-none sm:text-base"
              type={eye ? 'text' : 'password'}
              title="password"
              onChange={changehandler}
            />
            <i
              onClick={() => seteye((pre) => !pre)}
              className={`ri-eye-line cursor-pointer ${eye ? 'text-blue-500' : 'text-gray-500'} text-lg sm:text-xl`}
            ></i>
          </div>

          <button
            className="w-full p-2 text-sm text-white bg-blue-500 rounded-lg sm:text-base hover:bg-blue-600"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
      <div className="text-sm sm:text-base">
        Don't have an account? <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
