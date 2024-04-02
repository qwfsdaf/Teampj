import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Idform from './Idform/Idform'
import Login from './Signup/Login'
import NotFound from './components/NotFound'
import Idfind from './find/Idfind'
import Pwmodify from './find/Pwmodify'
import Home from './Home/Home'

const router = createBrowserRouter([
  {
    path: '/Login',
    element: <Login />,
    errorElement: <NotFound />
  },
  {
    path: '/Signup',
    element: <Idform />
  },
  {
    path: '/Idfind',
    element: <Idfind />
  },
  {
    path: '/Pwmodify',
    element: <Pwmodify />
  },
  {
    path: 'Home',
    element: <Home />
  }
])

export default function App() {
  return <RouterProvider router={router} />;
}