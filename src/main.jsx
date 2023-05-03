import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Blog from './Components/Blog/Blog.jsx';
import ChefInfo from './Components/ChefInfo/ChefInfo.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import PrivateRoute from './Components/Route/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children :[


      {
        path: "/",
        element:<Home></Home>,

      },
      {
        path: "/login",
        element: <Login></Login>

      },
      {
        path: "/Blog",
        element: <Blog></Blog>

      },
    
      {
        path: "/register",
        element:<Register></Register>

      },
      {
        path: "/chefInfo/:id",
        element:<PrivateRoute><ChefInfo></ChefInfo></PrivateRoute>,
        loader :({params})=>fetch(`http://localhost:5000/chefInfo/${params.id}`)

      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
