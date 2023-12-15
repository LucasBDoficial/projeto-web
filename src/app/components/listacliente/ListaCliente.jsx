/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

import './ListaCliente.css'

export default function ListaCliente(props) {
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
                <Link
                  className="one"
                  to={'/app/home/editarcliente/' + cliente.id}
                >
                  <iconify-icon icon="bxs:edit"></iconify-icon>
                </Link>

                <Link onClick={() => props.clickDelete(cliente.id)}>
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
