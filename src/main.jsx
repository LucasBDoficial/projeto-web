import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './app'
import ErrorPage from './router/ErrorPage'
import Site from './site/Site'
import Login from './app/login/Login'
import Newlogin from './app/newlogin/Newlogin'
import Resetsenha from './app/resetsenha/Resetsenha'
import Home from './app/home/Home'
import Novoclient from './app/novoclient/Novoclient'

import './Global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Site />,
      },
      {
        path: '/app',
        element: <Login />,
      },
      {
        path: '/app/newlogin',
        element: <Newlogin />,
      },
      {
        path: '/app/resetsenha',
        element: <Resetsenha />,
      },
      {
        path: '/app/home',
        element: <Home />,
        children: [
          {
            path: '/app/home/novoclient',
            element: <Novoclient />,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
