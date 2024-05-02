import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { Toaster } from 'react-hot-toast'

const Body = () => {

  const appRouter=createBrowserRouter([
     {
      path:"/",
      element:<Login/>
     },
     {
      path:"/browse",
      element:<Browse/>
     }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
      <Toaster/>
    </div>
  )
}

export default Body
