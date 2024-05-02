import { useDispatch} from 'react-redux'
import {Upcoming_Movies,options } from '../utils/constants'
import {getUpcomingMovies } from '../redux/movieSlice'
import axios from 'axios'

const useUpcomingMovies=async()=>{
    const dispatch=useDispatch()
    try{
       const res=await axios.get(Upcoming_Movies,options)
       dispatch(getUpcomingMovies(res.data.results))
       
    }
    catch(error){
      console.log(error)
    }
}

export default useUpcomingMovies;