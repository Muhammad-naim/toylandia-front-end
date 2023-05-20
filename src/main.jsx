import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import '@smastrom/react-rating/style.css'
import Layout from './components/layout/Layout';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import ErrorPage from './components/pages/errorPage/ErrorPage';
import AuthProvider from './firebase/authProvider/AuthProvider';
import HomeLayout from './components/layout/homeLayout/HomeLayout';
import AllToysPage from './components/pages/allToysPage/AllToysPage';
import Blogs from './components/pages/blogPage/Blogs';
import AddNewToy from './components/pages/addNewToy/AddNewToy';
import Mytoys from './components/pages/myToys/Mytoys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeLayout />
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup/>,
      },
      {
        path: "/toys",
        element: <AllToysPage />,
        loader: ()=> fetch('https://toylandia-server.vercel.app/toys')
      },
      {
        path: '/newitem',
        element: <AddNewToy/>
      },
      {
        path: '/blog',
        element: <Blogs/>
      },
      {
        path: '/mytoys',
        element: <Mytoys/>
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
