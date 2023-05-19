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
import LayoutWithoutBanner from './components/layout/LayoutWithoutBanner/LayoutWithoutBanner';
import AuthProvider from './firebase/authProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  },
  {
    path: '/login',
    element: <LayoutWithoutBanner />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
  {
    path: '/signup',
    element: <LayoutWithoutBanner />,
    children: [
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
