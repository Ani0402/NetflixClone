import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants'
import {useDispatch} from "react-redux"
import { setOpen,setId } from '../redux/movieSlice';

const MovieCard = ({posterPath,movieId}) => {

  const dispatch=useDispatch()

  if(posterPath===null) return null;

  const handleOpen = () => {
      dispatch(setId(movieId))
      dispatch(setOpen(true))
  }

  return (
    <div className="w-48 pr-2" onClick={handleOpen}>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="card-img"></img>
    </div>
  )
}

export default MovieCard
