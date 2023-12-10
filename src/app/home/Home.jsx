import { Outlet } from 'react-router-dom'

import Menuhome from '../components/navbar/Menuhome'
import ListaCliente from '../components/listacliente/ListaCliente'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Menuhome />

      <div className="container-fluid">
        <h1 className="title">Cadastro de cliente</h1>

        <ListaCliente />
      </div>

      <Outlet />
    </div>
  )
}
