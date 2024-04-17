import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {  HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import HomeDatails from './components/HomeDatails.jsx';
import Register from './components/Register.jsx';
import UpdateProfile from './components/UpdateProfile.jsx';
import RegalHouse from './components/RegalHouse.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import UserProfile from './components/UserProfile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1 className='font-bold text-2xl text-center'>Page Not found!</h1>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/homeDetails/:id',
        element: <PrivateRoute><HomeDatails></HomeDatails></PrivateRoute>
      },
      {
        path: '/regalHouse',
        element: <PrivateRoute><RegalHouse></RegalHouse></PrivateRoute>
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
      }
     
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>  
     </AuthProvider>
  </React.StrictMode>,
)
