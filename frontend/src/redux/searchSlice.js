import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState:{
        moviename:null,
        searchedMovie:null
    },
    reducers:{
        setSearchMovieDetails:(state,action)=>{
           const {searchMovie,movies}=action.payload
           state.moviename=searchMovie,
           state.searchedMovie=movies
        },
    }
})

export const {setSearchMovieDetails} = searchSlice.actions

export default searchSlice.reducer