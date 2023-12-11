/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table'

import './ListaCliente.css'

export default function ListaCliente(props) {
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
        {props.arrayClientes.map((cliente) => {
          return (
            <tr key={cliente.id}>
              <th>{cliente.id}</th>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.fone}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
