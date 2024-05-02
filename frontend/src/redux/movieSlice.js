import { createSlice } from "@reduxjs/toolkit";
import { Upcoming_Movies } from "../utils/constants";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovie:null,
        open:false,
        id:""
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        getPopularMovies:(state,action)=>{
          state.popularMovies=action.payload
        },
        getTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        setToggleState:(state,action)=>{
            state.toggle=!state.toggle
        },
        getTrailerMovies:(state,action)=>{
            state.trailerMovie=action.payload
        },
        setOpen:(state,action)=>{
            state.open=action.payload
        },
        setId:(state,action)=>{
            state.id=action.payload
        }
    }
})

export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies,setToggleState,getTrailerMovies,setOpen,setId}=movieSlice.actions

export default movieSlice.reducer