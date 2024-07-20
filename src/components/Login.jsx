import axios from 'axios';
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  userid: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setopen] = useState(false);

  const onSubmit = (data) => {
    const toastId = toast.loading("Logging in...");
    console.log(toastId);
    axios.post('http://localhost:3000/auth/login', data)
      .then((res) => {
        console.log(res.data);
        toast.update(toastId, {
          render: "Login successful!",
          type: "success",
          isLoading: false,
          autoClose: 2000
        });
      })
      .catch((err) => {

        toast.update(toastId, {
          render: err.message,
          type: "error",
          isLoading: false,
          autoClose: 2000
        });
       


        
      });
  };

  return (
    <div className='container flex flex-col gap-4 w-full md:w-96 mx-auto my-4'>
      <h1 className='mt-1 text-3xl font-bold text-blue-800'>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='my-1'>
          <label htmlFor="email" className='font-bold'>Email</label>
          <input
            id='email'
            className='text-lg border-[1px] border-black w-full p-2'
            type="text"
            placeholder='email@example.com'
            {...register("userid")}
          />
          {errors.userid && (<span className="text-red-600">{errors.userid.message}</span>)}
        </div>

        <div className='my-1 relative'>
          <label htmlFor="password" className='font-bold'>Password</label>
          <Eye setopen={setopen} open={open} />
          <input
            id='password'
            className='text-lg border-[1px] border-black w-full p-2'
            type={open ? 'text' : 'password'}
            placeholder='password'
            {...register("password")}
          />
          {errors.password && (<span className="text-red-600">{errors.password.message}</span>)}
        </div>

        <input type="submit" className='border-[1px] border-black w-full my-1 p-2 font-bold cursor-pointer bg-blue-500 text-white hover:bg-blue-700' />
      </form>
      <p>Donot have an account  ? <Link to='/signup' className='text-blue-800'>Signup</Link></p>


      <ToastContainer />
    </div>
  );
}



function Eye({ open, setopen }) {
  return (
    <button type='button' className='absolute top-9 right-3' onClick={() => setopen(!open)}>
      {open ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
    </button>
  );
}
