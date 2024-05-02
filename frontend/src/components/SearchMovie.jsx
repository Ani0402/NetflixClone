import React,{useState} from 'react';
import axios from 'axios';
import { Search_Movies, options } from '../utils/constants';
import {useDispatch,useSelector} from "react-redux"
import { setSearchMovieDetails } from '../redux/searchSlice';
import {setLoading} from '../redux/userSlice'
import MovieList from './MovieList';


const SearchMovie = () => {

  const [input,setInput]=useState("")

  const dispatch=useDispatch()

  const isLoading=useSelector(store => store.app.isLoading)

  const {moviename,searchedMovie}=useSelector(store => store.searchMovie)

  const bodyStyle = {
    backgroundColor: 'black', // Replace #your-desired-color with the hex code or color name
  };

   const submitHandler = async(e) =>{
      e.preventDefault()
      dispatch(setLoading(true))
      try{
        const res=await axios.get(`${Search_Movies}${input}&include_adult=false&language=en-US&page=1`,options)
   
        const movies=res?.data?.results

        dispatch(setSearchMovieDetails({input,movies}))
      }
      catch(error){
        console.log(error)
      }
      finally{
        dispatch(setLoading(false))
      }
      setInput("")
   }

  return (
    <div style={bodyStyle}>
    <div className='flex justify-center pt-[10%] w-[100%] bg-black'>
    <form onSubmit={submitHandler} className='w-[50%]'>
      <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
        <input
          className='w-full outline-none rounded-md text-lg bg-black text-white'
          value={input}
          type="text"
          placeholder="Search Movies..."
          onChange={(e)=>setInput(e.target.value)}
        />
        <button className='bg-red-500 text-white rounded-md px-4 py-2'>
          {isLoading ? "Loading..." : "Search"}
        </button>
      </div>
    </form>
  </div>
  {
    searchedMovie ? ( <MovieList title={moviename} searchMovie={true} movies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
}
    </div>
   
  );
};

export default SearchMovie;