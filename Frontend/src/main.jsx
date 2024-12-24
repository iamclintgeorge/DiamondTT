import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom'
import './index.css'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Hello from './Pages/Hello.jsx'
import ErrorPage from './Pages/errorPage.jsx'
import PrivateRoute from './Components/privateRoute.jsx'

// const ProtectedRoutes = () => {
//   return (
//     <Routes>
//       <Route path="hello" element={<Hello />} />
//     </Routes>
//   );
// };

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
  // {
  //   path: "/hello",
  //   element: (
  //     <PrivateRoute>
  //       <Hello />
  //     </PrivateRoute>
  //   ),
  // },
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