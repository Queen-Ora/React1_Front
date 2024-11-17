import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup/Signup'

export default function App() {
  const route = createBrowserRouter([

{
  path: '/',
  element: <Signup />,
},{
  path: '/about',
  element: <h1>About Page</h1>,
}



  ])
  return (
    <div>
    <RouterProvider router={route} />
    </div>
  )
}
