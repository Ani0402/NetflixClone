import React,{useEffect, useState} from 'react'
import Header from './Header'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constants'
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {  setUser,setLoading } from '../redux/userSlice';


const Login = () => {

  const [isLogin,setIsLogin] =useState(true)
  const [fullname,setFullname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const isLoading=useSelector(store => store.app.isLoading)

  const loginHandler=()=>{
    setIsLogin((prev)=>prev=!prev)
  }

  const getInputData=async(e)=>{
    e.preventDefault()
    dispatch(setLoading(true))

    if(isLogin){
      try{
        const res=await axios.post(`${USER_API_END_POINT}/login`,{email,password},{
          headers:{
              'Content-Type':'application/json'
          },
          withCredentials:true
      })
       

        if(res.data.success){
          toast.success(res.data.message)
          dispatch(setUser(res.data.user))
          navigate('/browse')
        }

        else{
          toast.error("Login Error")
        }
     }
     catch(error){
        console.log("Error in login",error);
     }
     finally{
      dispatch(setLoading(false))
     }
    }

    else{
      dispatch(setLoading(true))
      try{
        const res=await axios.post(`${USER_API_END_POINT}/register`,{fullname,email,password},{
          headers:{
              'Content-Type':'application/json'
          },
          withCredentials:true
      })

        if(res.data.success){
          toast.success(res.data.message)
          setIsLogin(true)
        }
        else{
          toast.error("Register Error")
        }
     }
     catch(error){
        console.log("Error in register",error);
     }
     finally{
      dispatch(setLoading(false))
     }
    }
    setFullname("")
    setEmail("")
    setPassword("")
  }

  
  

  return (
    <div>
      <Header/>

      <div className='absolute'>
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-banner"/>
      </div>

      <form onSubmit={getInputData} className='absolute flex flex-col w-3/12 my-36  p-12 left-0 right-0 mx-auto items-center justify-center bg-black rounded-md opacity-85'>
       
        <h1 className='text-4xl font-bold text-white mb-4'>{isLogin ? "Login" : "Sign Up"}</h1>
        
        <div className='flex flex-col'>
           {isLogin ? "" : (<input type='text' placeholder='Full Name' value={fullname} className='outline-none p-3 my-2 text-white  bg-gray-800' onChange={(e)=>setFullname(e.target.value)}></input>)}

           <input type='email' value={email} placeholder='Email' className='outline-none p-3 my-2 text-white bg-gray-800' onChange={(e)=>setEmail(e.target.value)}></input>

           <input type='password' value={password} placeholder='Password' className='outline-none p-3 my-2 text-white bg-gray-800' onChange={(e)=>setPassword(e.target.value)}></input>

           <button className="bg-red-600 py-2 px-4 text-white font-medium rounded-md hover:bg-red-900 mt-3 mb-2">
           
            {isLoading? "Loading" :  (isLogin ? "Login" : "Sign Up")}
           
           </button>
           <p className='text-white'>{isLogin ? "New to netflix?" : "Already have an Account?"}<span className='text-blue-800 font-medium cursor-pointer' onClick={loginHandler}>
          { isLogin ? " Sign Up" : " Login"}
           </span></p>
        </div>
      </form>
    </div>
  )
}

export default Login
