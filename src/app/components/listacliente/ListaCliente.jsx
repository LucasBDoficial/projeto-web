import Table from 'react-bootstrap/Table'

import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'

import './ListaCliente.css'

export default function ListaCliente() {
  // const [nome, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [fone, setFone] = useState('')
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const userCollectionRef = collection(db, 'clientes')
      const data = await getDocs(userCollectionRef)
      setClientes(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          nome: doc.data().nome,
          email: doc.data().email,
          fone: doc.data().fone,
        })),
      )
    }
    getUsers()
  }, [])

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
        {clientes.map((cliente) => {
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
