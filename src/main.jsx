import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivateRoute from './app/context/Provider'
import { AuthProvider } from './app/context/Context'

import App from './app.jsx'
import ErrorPage from './router/ErrorPage.jsx'
import Site from './site/site.jsx'
import Login from './app/login/Login.jsx'
import Newlogin from './app/newlogin/Newlogin.jsx'
import Resetsenha from './app/resetsenha/Resetsenha.jsx'
import Home from './app/home/Home.jsx'
import Novoclient from './app/novoclient/Novoclient.jsx'
import Menuhome from './app/components/navbar/Menuhome.jsx'
// import EditarCliente from './app/editarcliente/EditarCliente'

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
      // {
      //   path: '/app/home/editarcliente/:id',
      //   element: <EditarCliente />,
      // },
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
