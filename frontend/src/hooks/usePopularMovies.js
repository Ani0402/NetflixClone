import { useDispatch} from 'react-redux'
import { Popular_Movies,options } from '../utils/constants'
import { getPopularMovies } from '../redux/movieSlice'
import axios from 'axios'

const usePopularMovies=async()=>{
    const dispatch=useDispatch()
    try{
       const res=await axios.get(Popular_Movies,options)
       dispatch(getPopularMovies(res.data.results))
       
    }
    catch(error){
      console.log(error)
    }
}

export default usePopularMovies;