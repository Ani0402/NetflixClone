import { useDispatch} from 'react-redux'
import { Now_Playing_Movie,options } from '../utils/constants'
import { getNowPlayingMovies } from '../redux/movieSlice'
import axios from 'axios'

const useNowPlayingMovies=async()=>{
    const dispatch=useDispatch()
    try{
       const res=await axios.get(Now_Playing_Movie,options)
       dispatch(getNowPlayingMovies(res.data.results))
       
    }
    catch(error){
      console.log(error)
    }
}

export default useNowPlayingMovies;