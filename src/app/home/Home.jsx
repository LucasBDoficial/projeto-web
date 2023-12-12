import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './../config/firebase'

import ListaCliente from '../components/listacliente/ListaCliente'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

export default function Home() {
  const [clientes, setClientes] = useState([])
  const [busca, setBusca] = useState('')

  const buscaLower = busca.toLowerCase()
  const teams = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(buscaLower),
  )

  useEffect(() => {
    const getUsers = async () => {
      const userCollectionRef = collection(db, 'clientes')
      const data = await getDocs(userCollectionRef)

      setClientes(
        data.docs.map((doc) => ({
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
    <div>
      <div className="container-fluid">
        <h1 className="title">- Lista de clientes -</h1>

        <div className="crm-box">
          <div className="crm-single1">
            <Link to="/app/home/novocliente">
              <Button className="crm-button" variant="primary" type="button">
                <iconify-icon icon="pepicons-pop:plus"></iconify-icon> Clientes
              </Button>
            </Link>
          </div>

          <div className="crm-single2">
            <InputGroup
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="mb-3 crm-input"
            >
              <Form.Control
                className="crm-font"
                placeholder="Pesquisar por nome"
                aria-describedby="basic-addon2"
              />

              <Button className="crm-font" variant="primary" id="button-addon2">
                <iconify-icon icon="iconamoon:search"></iconify-icon>
                <p>Pesquisar</p>
              </Button>
            </InputGroup>
          </div>
        </div>

        <ListaCliente arrayClientes={teams} />
      </div>
    </div>
  )
}
