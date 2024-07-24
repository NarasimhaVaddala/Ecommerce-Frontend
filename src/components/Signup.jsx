import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [open, setopen] = useState(false);
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const toastId = toast.loading("Logging in...");
    console.log(toastId);
    axios.post('https://ecommerce-backend-ecru-mu.vercel.app/auth/signup', data)
      .then((res) => {
        console.log(res.data);
        
      localStorage.setItem('token' , res.data.token)
      localStorage.setItem('cart' , JSON.stringify(res.data.user.cart))

      
      toast.update(toastId, {
        render: "Signup successful!",
        type: "success",
        isLoading: false,
        autoClose: 2000
      });
      return navigate('/')
      })

      .catch((err) => {
       
         toast.update(toastId, {
          render: err.message=="Request failed with status code 409"?"User already exists please login":"Something Went Wrong",
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


{
        [
            {type:"text" , name:"first_name"},
            {type:"text" , name:"last_name"},
            {type:"email" , name:"email"},
            {type:"number" , name:"mobile"},
            

        ].map((e)=>{
                return <div key={e.name} className='my-1'>
                <label htmlFor={e.name} className='font-bold capitalize'>{e.name.replace('_',' ')}</label>
                
                <input
                  id={e.name}
                  className='text-lg border-[1px] border-black w-full p-2 rounded-md'
                  type={e.type}
                  placeholder={e.name.replace('_',' ')}
                  {...register(`${e.name}`, { required: true })}
                />
                {errors[e.name] && (<span className="text-red-600">This Field is required</span>)}
              </div>
        })
}
        <div className='my-1 relative'>
          <label htmlFor="password" className='font-bold'>Password</label>
          <Eye setopen={setopen} open={open} />
          <input
            id='password'
            className='text-lg border-[1px] border-black w-full p-2 rounded-md'
            type={open ? 'text' : 'password'}
            placeholder='password'
            {...register("password", { required: {value:true , message:"This Field is required"} , minLength:{value:8 , message:"Pasword should be atleast 8 charecters Long" , minLength:{value:8, message:"Password must be atleast 8 charecters Long" ,

              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must contain at least 1 capital letter, 1 small letter, 1 numeric digit, and 1 special character"
              }

             } } })}
          />
          {errors.password && (<span className="text-red-600">{errors.password.message}</span>)}
        </div>



        

    

        <input type="submit" className='rounded-md w-full my-1 p-2 font-bold cursor-pointer bg-blue-500 text-white hover:bg-blue-700' />
      </form>
      <p>Already have an account ? <Link to='/login' className='text-blue-800'>Login</Link></p>

      <ToastContainer />
    </div>
  );
}

function Eye({ open, setopen }) {
  return (
    <button type='button' className='relative top-9 left-[30rem]' onClick={() => setopen(!open)}>
      {open ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
    </button>
  );
}
