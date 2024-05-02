import React from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {USER_API_END_POINT} from "../utils/constants"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {  setUser } from '../redux/userSlice';
import { setToggleState } from '../redux/movieSlice';

const Header = () => {

  const user=useSelector((store)=>store.app.user);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const toggle=useSelector((store)=>store.movie.toggle)
   
  const logoutHandler = async()=>{
    try{
        const res=await axios.get(`${USER_API_END_POINT}/logout`)
         
        dispatch(setUser(null))

        if(res.data.success){
          toast.success(res.data.message)
          navigate('/')
        }

    }
    catch(error){
      console.log(error);
    }
  }

  const toggleHandler=()=>[
     dispatch(setToggleState())
  ]

  return (
    <div className="absolute flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black z-10">

      <img className="w-56" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo"/>

      {
        user && (
        <div className='flex items-center'>
          <ArrowDropDownCircleIcon color='white'/>
          <h1 className="text-lg font-medium text-white">{user.fullname}</h1>

          <div className='ml-3'>
            <button className="bg-red-600 py-2 px-4 text-white font-medium" onClick={logoutHandler}>Logout</button>
            <button className="bg-red-600 py-2 px-4 text-white ml-2 font-medium" onClick={toggleHandler}>{toggle ? "Home" : "Search Movie"} </button>
          </div>

        </div>
         )
      }
      
    </div>
  )
}

export default Header
