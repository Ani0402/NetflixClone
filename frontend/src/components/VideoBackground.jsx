import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId,bool}) => {
  const trailer=useSelector(store => store.movie.trailerMovie)
  useMovieById(movieId)
  

  return (
    <div>
      <iframe
      className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
      src={`https://www.youtube.com/embed/${trailer?.key}?si=uHfD6z79NtqGF8c7&autoplay=1&mute=1`}
      title="YouTube video player"
      frameBorder="0"
      allowFullScreen
      allow="autoplay"
    ></iframe>
    </div>
  )
}
export default VideoBackground
