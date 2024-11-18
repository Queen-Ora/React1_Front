import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import OTP from './pages/OTP/OTP'
import Dashboard from './pages/Dashboard/Dashboard'

export default function App() {
  const route = createBrowserRouter([

{
  path: '/',
  element: <Signup />,
},{
  path: '/otp',
  element: <OTP />
},{
  path:'/home',
  element: <Dashboard />,
}



  ])
  return (
    <div>
    <RouterProvider router={route} />
    </div>
  )
}
