import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivateRoute from './app/context/Provider'
import { AuthProvider } from './app/context/Context'

import App from './app'
import ErrorPage from './router/ErrorPage'
import Site from './site/Site'
import Login from './app/login/Login'
import Newlogin from './app/newlogin/Newlogin'
import Resetsenha from './app/resetsenha/Resetsenha'
import Home from './app/home/Home'
import Novoclient from './app/novoclient/Novoclient'
import Menuhome from './app/components/navbar/Menuhome'
import EditarCliente from './app/editarcliente/EditarCliente'

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
    ],
  },
  {
    element: (
      <PrivateRoute>
        <Menuhome />
      </PrivateRoute>
    ),

    children: [
      {
        path: '/app/home',
        element: <Home />,
      },
      {
        path: '/app/home/novocliente',
        element: <Novoclient />,
      },
      {
        path: '/app/home/editarcliente/:id',
        element: <EditarCliente />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
