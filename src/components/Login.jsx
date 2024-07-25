import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../app/context.jsx';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const value = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      return navigate('/');
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging in...");
    value.setLoading(true);

    await axios.post('https://ecommerce-backend-ecru-mu.vercel.app/auth/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        // localStorage.setItem('cart', JSON.stringify(res.data.user.cart));
        value.setLoading(false);
        value.setIsAuthenticated(true);
        toast.update(toastId, {
          render: "Login successful!",
          type: "success",
          isLoading: false,
          autoClose: 2000
        });
        return navigate('/');
      })
      .catch((err) => {
        value.setLoading(false);
        value.setIsAuthenticated(false);
        toast.update(toastId, {
          render: err.message === "Request failed with status code 401" ? "Invalid Credentials" : "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 2000
        });
      });
  };

  return (
    <div className='container flex flex-col gap-4 w-full md:w-96 mx-auto my-4'>
      <h1 className='mt-1 text-3xl font-bold text-blue-800'>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='my-1'>
          <label htmlFor="userid" className='font-bold'>Email or Mobile</label>
          <input
            id='userid'
            className='text-lg border-[1px] border-black w-full p-2 rounded-md '
            type="text"
            placeholder='Enter email or mobile number'
            {...register("userid", { required: { value: true, message: "This is a Required Field" } })}
          />
          {errors.userid && (<span className="text-red-600">{errors.userid.message}</span>)}
        </div>
        <div className='my-1 relative'>
          <label htmlFor="password" className='font-bold'>Password</label>
          <Eye setOpen={setOpen} open={open} />
          <input
            id='password'
            className='text-lg border-[1px] border-black w-full p-2 rounded-md '
            type={open ? 'text' : 'password'}
            placeholder='password'
            {...register("password", { required: { value: true, message: "This is a Required Field" } })}
          />
          {errors.password && (<span className="text-red-600">{errors.password.message}</span>)}
        </div>
        <input type="submit" className='rounded-md w-full my-1 p-2 font-bold cursor-pointer bg-blue-500 text-white hover:bg-blue-700' />
      </form>
      <p>Don't have an account? <Link to='/signup' className='text-blue-800'>Signup</Link></p>
      <ToastContainer />
    </div>
  );
}

function Eye({ open, setOpen }) {
  return (
    <button type='button' className='absolute top-10 right-4' onClick={() => setOpen(!open)}>
      {open ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
    </button>
  );
}
