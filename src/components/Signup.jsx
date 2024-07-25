import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../app/context.jsx';

export default function Signup() {
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
    const toastId = toast.loading("Signing up...");
    value.setLoading(true);

    await axios.post('/api/auth/signup', data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        value.setLoading(false);
        value.setIsAuthenticated(true);
        toast.update(toastId, {
          render: "Signup successful!",
          type: "success",
          isLoading: false,
          autoClose: 2000
        });
        return navigate('/');
      }).catch((err) => {
        value.setLoading(false);
        value.setIsAuthenticated(false);
        toast.update(toastId, {
          render: err.message,
          type: "error",
          isLoading: false,
          autoClose: 2000
        });
      });
  };

  return (
    <div className='container flex flex-col gap-4 w-full md:w-[40rem] mx-auto my-4'>
      <h1 className='mt-1 text-3xl font-bold text-blue-800'>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='relative'>
        {[
          { type: "text", name: "first_name" },
          { type: "text", name: "last_name" },
          { type: "email", name: "email" },
          { type: "number", name: "mobile" }
        ].map((e) => (
          <div key={e.name} className='my-1'>
            <label htmlFor={e.name} className='font-bold capitalize'>{e.name.replace('_', ' ')}</label>
            <input
              id={e.name}
              className='text-lg border-[1px] border-black w-full p-2 rounded-md'
              type={e.type}
              placeholder={e.name.replace('_', ' ')}
              {...register(e.name, { required: true })}
            />
            {errors[e.name] && (<span className="text-red-600">This Field is required</span>)}
          </div>
        ))}
        <div className='my-1 relative'>
          <label htmlFor="password" className='font-bold'>Password</label>
          <Eye setOpen={setOpen} open={open} />
          <input
            id='password'
            className='text-lg border-[1px] border-black w-full p-2 rounded-md'
            type={open ? 'text' : 'password'}
            placeholder='password'
            {...register("password", {
              required: { value: true, message: "This Field is required" },
              minLength: { value: 8, message: "Password should be at least 8 characters long" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must contain at least 1 capital letter, 1 small letter, 1 numeric digit, and 1 special character"
              }
            })}
          />
          {errors.password && (<span className="text-red-600">{errors.password.message}</span>)}
        </div>
        <input type="submit" className='rounded-md w-full my-1 p-2 font-bold cursor-pointer bg-blue-500 text-white hover:bg-blue-700' />
      </form>
      <p>Already have an account? <Link to='/login' className='text-blue-800'>Login</Link></p>
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
