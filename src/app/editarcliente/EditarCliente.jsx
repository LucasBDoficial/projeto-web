import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, updateDoc, getDocs } from 'firebase/firestore'

import './EditarCliente.css'

export default function EditarCliente(props) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [fone, setFone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const { id } = useParams()
  const setUser = useNavigate()
  const data = collection(db, 'clientes')

  useEffect(() => {
    const getEdit = async () => {
      const set = getDocs(props, { nome, email, fone })
      set.then((resultado) => {
        setNome(resultado.data().nome)
      })
    }
    getEdit()
  }, [])

  function alterarCliente() {
    if (nome.length === 0) {
      setMensagem('Informe seu nome')
    } else if (email.length === 0) {
      setMensagem('Informe seu e-mail')
    } else if (fone.length === 0) {
      setMensagem('Informe seu numero')
    } else {
      updateDoc(data, {
        nome,
        email,
        fone,
      })
        .then(() => {
          setMensagem('')
          setUser('/app/home')
        })
        .catch((error) => {
          setMensagem(error.message)
        })
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="title">- Editar Cliente -</h1>

      <Form className="colum">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Código</Form.Label>
          <Form.Control value={id} className="form" type="text" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form"
            type="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fone</Form.Label>
          <Form.Control
            value={fone}
            onChange={(e) => setFone(e.target.value)}
            className="form"
            type="text"
          />
        </Form.Group>

        <div className="box-btn">
          <Link to="/app/home" className="btn1">
            Cancelar
          </Link>

          <Link onClick={alterarCliente} className="btn2">
            Salvar
          </Link>

          {mensagem.length > 0 ? (
            <Alert className="alert-newClient">{mensagem}</Alert>
          ) : null}
        </div>
      </Form>
    </div>
  )
}
