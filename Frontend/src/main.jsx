import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Hello from './Pages/Hello.jsx'
import ErrorPage from './Pages/errorPage.jsx'
import Rome from './Pages/rome.jsx'
import PrivateRoute from './Components/privateRoute.jsx'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/hello",
    element: <Hello />,
  },
  {
    path: "/rome",
    element: <PrivateRoute Component={Rome}/>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {Router} />
  </React.StrictMode>,
)