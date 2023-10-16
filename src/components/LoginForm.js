import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from 'react-hot-toast';

const LoginForm=({setIsLoggedIn})=>{
    const navigate=useNavigate();

    const [formData,setFormData]=useState({email:"",password:""});

    const [showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        setFormData((prevData)=>(
            {...prevData,
            [event.target.name]:event.target.value
        }
        ))
}
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
    return(
       <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-5">
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
        
        <input required type="text" name="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id"
        className='bg-richblack-800 rounded-[0.5rem] text-richlack-5 w-full p-[12px]'></input>
       
        </label>
        <label className='relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
        
        <input required type={showPassword ?("text"):("password")} 
        name="password" value={formData.password} onChange={changeHandler} placeholder="Enter Password"
        className='bg-richblack-800 relative rounded-[0.5rem] text-richlack-5 w-full p-[12px]'></input>
      
       <span className="absolute right-3 top-[38px] cursor-pointer " onClick={()=>setShowPassword((prev)=>!prev)} >
        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
       </span>
       <Link to ="#">
        <p className='text-x5 mt-1 text-blue-100 max-w-max ml-auto'>Forget Password</p>
       </Link>
        </label>
        <button className='bg-yellow-50 py-[8px] px-[12px] rounded-[8px] font-medium text-richblack-900 mt-5'>Sign in</button>
        </form>
    )
}
export default LoginForm;