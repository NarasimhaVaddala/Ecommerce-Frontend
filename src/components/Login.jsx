import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';



export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setopen] = useState(false);
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const toastId = toast.loading("Logging in...");
    axios.post('https://ecommerce-backend-ecru-mu.vercel.app/auth/login', data)
    .then((res) => {
      localStorage.setItem('token' , res.data.token)
      localStorage.setItem('cart' , JSON.stringify(res.data.user.cart))
        toast.update(toastId, {
          render: "Login successful!",
          type: "success",
          isLoading: false,
          autoClose: 2000
        });
      })
      return navigate('/')
      
      .catch((err) => {
        

        toast.update(toastId, {
          render: err.message=="Request failed with status code 401"?"Invalid Credentials":"Something Went Wrong",
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
          <label htmlFor="email" className='font-bold'>Email or Mobile</label>
          <input
            id='email'
            className='text-lg border-[1px] border-black w-full p-2 rounded-md '
            type="text"
            placeholder='enter email or mobile number'
            {...register("userid" , {required :{value:true , message:"This is a Required Field"}})}
          />
          {errors.userid && (<span className="text-red-600">{errors.userid.message}</span>)}
        </div>

        <div className='my-1 relative'>
          <label htmlFor="password" className='font-bold'>Password</label>
          <Eye setopen={setopen} open={open} />
          <input
            id='password'
            className='text-lg border-[1px] border-black w-full p-2 rounded-md '
            type={open ? 'text' : 'password'}
            placeholder='password'
            {...register("password" , {required :{value:true , message:"This is a Required Field"}})}
          />
          {errors.password && (<span className="text-red-600">{errors.password.message}</span>)}
        </div>

        <input type="submit" className=' rounded-md  w-full my-1 p-2 font-bold cursor-pointer bg-blue-500 text-white hover:bg-blue-700' />
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
