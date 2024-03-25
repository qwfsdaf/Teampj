import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Idform from './Idform/Idform'
import Login from './Signup/Login'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  {
    path: '/Login',
    element: <Login />,
    errorElement: <NotFound />
  },
  {
    path: '/Signup',
    element: <Idform />
  }
])

export default function App() {
  return <RouterProvider router={router} />;
}