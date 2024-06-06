import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Idform from './Idform/Idform.jsx';
import Login from './Signup/Login.jsx';
import NotFound from './components/NotFound.jsx';
import Idfind from './find/Idfind.jsx';
import Pwmodify from './find/Pwmodify.jsx';
import ChatbotMain from './Pages/Chatbotmain.jsx';
import Imageanalysis from './Pages/Imageanalysis.jsx';
import Home from './Home/Home.jsx';
import Mypage from './Pages/Mypage.jsx';
import Community from './Community/Community.jsx';
import Communitywrite from './Community/Communitywrite.jsx';

const router = createHashRouter([
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
    path: '/chat',
    element: <ChatbotMain />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Imageanalysis',
    element: <Imageanalysis />
  },
  {
    path: '/Mypage',
    element: <Mypage />
  },
  {
    path: '/community',
    element: <Community />
  },
  {
    path: '/communitywrite',
    element: <Communitywrite />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
