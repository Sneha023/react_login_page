import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const SignupForm=({setIsLoggedIn})=>{
    const navigate =useNavigate();
    const[accountType,setAccountType]=useState("student");
    const[showPassword,setShowPassword]=useState(false);


    const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""});
    function changeHandler(event){
        setFormData((prevData)=>(
            {...prevData,
            [event.target.name]:event.target.value
        }
        ))
}
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const AccountData={
            ...formData
        };
        console.log("Printingaccountdata:");
        console.log(AccountData);
        navigate("/dashboard");

    }
    return(
        <div>
            {/* intructor ad student tabs */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                className= {`${accountType==='student'?"bg-richblack-900 text-richblack-5 ": "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("student")} >Student</button>
                <button
                 className= {`${accountType==='instructor'?"bg-richblack-900 text-richblack-5 ": "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                  onClick={()=> setAccountType("instructor")}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                {/* firstandlast name */}
                <div className='flex justify-between mt-[20px]'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup>*</sup></p>
                        <input required type="text" value={formData.firstName} name="firstName" onChange={changeHandler} placeholder="Enter First Name"
                        className='bg-richblack-800 rounded-[0.5rem] text-richlack-5 w-full p-[12px]'/>

                    </label>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup>*</sup></p>
                        <input required type="text" value={formData.lastName} name="lastName" onChange={changeHandler} placeholder="Enter Last Name"
                        className='bg-richblack-800 rounded-[0.5rem] text-richlack-5 w-full p-[12px]'/>

                    </label>
                </div>

                <div>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<sup>*</sup></p>
                    <input required type="email" value={formData.email} name="email" onChange={changeHandler} placeholder="Enter Email Address"
                     className='bg-richblack-800 rounded-[0.5rem] text-richlack-5 w-full p-[12px]'/>
                  

                </label >
                </div>
                <div className='w-full flex justify-between mt-[20px]'>
                <label className='relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup>*</sup></p>
                    <input required type={showPassword ? ("text"):("password")} 
                    value={formData.password} name="password" onChange={changeHandler} placeholder="Enter Password"
                    className='bg-richblack-800 rounded-[0.5rem] text-richlack-5 w-full p-[12px]'/>

                    <span className='absolute right-3 top-[38px] cursor-pointer ' onClick={()=>setShowPassword((prev)=>!prev)}>
                      {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup>*</sup></p>
                    <input required type={showPassword ? ("text"):("password")} 
                    value={formData.confirmPassword} name="confirmPassword" onChange={changeHandler} placeholder="Confirm Password"
                    className='bg-richblack-800 rounded-[0.5rem] text-richlack-5 w-full p-[12px]'/>

                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>
                      {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
                </div>
                <button className='bg-yellow-50 py-[8px] px-[12px] w-full rounded-[8px] font-medium text-richblack-900 mt-5'>Create Account</button>
            </form>
        </div>
       
    )
}
export default SignupForm;