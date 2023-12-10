import Table from 'react-bootstrap/Table'
import { Clientes } from '../../assets/Clientes'

import './ListaCliente.css'

export default function ListaCliente() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {Clientes.map((cliente) => (
          <tr key={cliente.id}>
            <th>{cliente.id}</th>
            <td>{cliente.name}</td>
            <td>{cliente.email}</td>
            <td>{cliente.fone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

// {Clientes.map(function (cliente) {
//   return (
//     <tr key={cliente}>
//       <th>{cliente.id}</th>
//       <td>{cliente.name}</td>
//       <td>{cliente.email}</td>
//       <td>{cliente.fone}</td>
//     </tr>
//   )
// })}
