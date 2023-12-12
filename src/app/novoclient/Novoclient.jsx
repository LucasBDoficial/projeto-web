import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './Novoclient.css'

export default function Novoclient() {
  return (
    <div className="container-fluid">
      <h1 className="title">- Novo cliente -</h1>

      <Form className="colum">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            className="form"
            type="text"
            placeholder="Insira seu nome"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            className="form"
            type="email"
            placeholder="Insira seu e-mail"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fone</Form.Label>
          <Form.Control
            className="form"
            type="text"
            placeholder="Insira seu telefone"
          />
        </Form.Group>

        <div className="box-btn">
          <Button className="btn1" variant="outline-primary" type="submit">
            Cancelar
          </Button>

          <Button className="btn2" variant="primary" type="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </div>
  )
}
