import { useDispatch} from 'react-redux'
import {Top_Rated_Movies,options } from '../utils/constants'
import { getTopRatedMovies } from '../redux/movieSlice'
import axios from 'axios'

const useTopRatedMovies=async()=>{
    const dispatch=useDispatch()
    try{
       const res=await axios.get(Top_Rated_Movies,options)
       dispatch(getTopRatedMovies(res.data.results))
    }
    catch(error){
      console.log(error)
    }
}

export default useTopRatedMovies;