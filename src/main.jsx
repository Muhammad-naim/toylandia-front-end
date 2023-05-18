import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; import './index.css'
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import ErrorPage from './components/pages/errorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }, 
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup', 
        element: <Signup/>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />  </React.StrictMode>,
)
