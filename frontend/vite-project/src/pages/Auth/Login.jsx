import React, {useState} from 'react'
import AuthLayout from '../../components/layouts/authLayout'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState("");
  const [passward,setPassward]=useState("");
  const [error,setError]=useState(null);

  const nevigate=useNavigate();
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to log in
        </p>

       <form onSubmit={handleLogin}>

       </form>


      </div>
    </AuthLayout>
  )
}

export default Login