import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {

  const movies=useSelector(store=> store.movie)

  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
       <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
       <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Top rated Movies"} movies={movies.topRatedMovies}/>
       <MovieList title={"Upcoming Movies"} movies={movies. upcomingMovies}/>
      </div>

    </div>
  )
}

export default MovieContainer
