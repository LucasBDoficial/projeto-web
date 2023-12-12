/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

import './ListaCliente.css'

export default function ListaCliente(props) {
  function deleteUser(id) {
    alert('excluir' + id)
  }

  return (
    <Table striped bordered hover>
      <thead className="top">
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Config.</th>
        </tr>
      </thead>
      <tbody className="boot">
        {props.arrayClientes.map((cliente) => {
          return (
            <tr key={cliente.id}>
              <th>
                <p>Código:</p>
                {cliente.id}
              </th>
              <td>
                <p>Nome:</p>
                {cliente.nome}
              </td>
              <td>
                <p>E-mail:</p>
                {cliente.email}
              </td>
              <td>
                <p>Telefone:</p>
                {cliente.fone}
              </td>
              <td className="link">
                <Link className="one" to="#">
                  <iconify-icon icon="bxs:edit"></iconify-icon>
                </Link>

                <Link to="#" onClick={() => deleteUser(cliente.id)}>
                  <iconify-icon icon="material-symbols:delete-rounded"></iconify-icon>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
