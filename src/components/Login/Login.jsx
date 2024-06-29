import React from 'react'
import "./Login.css"
import { useForm } from "react-hook-form"
import { Link, Route, Routes } from 'react-router-dom'


export default function Login() {



  const onSubmit = (data) => {

    console.log(data)
  }

  return (

    <div className='container login-box'>
      <Routes>
        <Route path='' element={<Loginpage />} />
        <Route path='login' element={<Loginpage />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

function Loginpage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='form-field'>

        <label htmlFor="email">Email Id</label>
        <input type="email" id='email' placeholder='enter your email' {...register("email", { required: { value: true, message: "This is a Required field" } })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>


      <div className='form-field'>
         <label htmlFor="Password">Password</label>
        <input type="password" id='password' placeholder='enter your password' {...register("password", { required: { value: true, message: "This is a Required field" }, maxLength: { value: 10, message: "Password length Should be less than or equal to 10 charecters" }, minLength: { value: 4, message: "Password should be atleast 4 charecters long" } })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>


      <input type="submit" value="Submit" className='cart-btn' />
      <p>Do not have account ? <Link to="signup">Signup !</Link></p>
    </form>



  )
}


function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='form-field'>
        <label htmlFor="firstname">First Name</label>
        <input type="text" id='firstname' placeholder='enter your firstname' {...register("fname", { required: { value: true, message: "This is a Required field"}, minLength:{value:3 , message:"First Name Should be atleast 3 letters long"}  })} />
        {errors.fname && <span>{errors.fname.message}</span>}
      </div>

      <div className='form-field'>

        <label htmlFor="firstname">Last Name</label>
        <input type="text" id='lastname' placeholder='enter your lastname' {...register("lname", { required: { value: true, message: "This is a Required field"}, minLength:{value:3 , message:"First Name Should be atleast 3 letters long"} } )} />
        {errors.lname && <span>{errors.lname.message}</span>}
      </div>

      <div className='form-field'>

        <label htmlFor="email">Email Id</label>
        <input type="email" id='email' placeholder='enter your email' {...register("email", { required: { value: true, message: "This is a Required field" } })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className='form-field'>

        <label htmlFor="mobile">Mobile</label>
        <input type="number" id='mobile' placeholder='enter your mobile number' {...register("mobile", { required: { value: true, message: "This is a Required field"}, minLength:{value:10 , message:"Mobile Number Should be 10 charecters long"} , maxLength:{value:10 , message:"Mobile Number Should be 10 charecters long"}  })} />
        {errors.mobile && <span>{errors.mobile.message}</span>}
      </div>


      <div className='form-field'>


        <label htmlFor="Password">Password</label>
        <input type="password" id='password' placeholder='enter your password' {...register("password", { required: { value: true, message: "This is a Required field" }, maxLength: { value: 10, message: "Password length Should be less than or equal to 10 charecters" }, minLength: { value: 4, message: "Password should be atleast 4 charecters long" } })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>


      <input type="submit" value="Submit" className='cart-btn' />
      <p>Already have an account ? <Link to="/login">Login !</Link></p>
    </form>





  )
}
