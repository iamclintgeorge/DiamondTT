import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {Router} />
  </React.StrictMode>,
)