import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

import './Newlogin.css'

export default function Newlogin() {
  return (
    <div className="back">
      <div className="container">
        <Form className="form-login">
          <a href="/">
            <iconify-icon icon="logos:web-dev" />
          </a>

          <h1>Criar conta</h1>
          <br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="form-email"
              type="email"
              placeholder="E-mail"
            />
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="form-pass"
              type="password"
              placeholder="Senha"
            />
          </Form.Group>

          <Button className="form-button" variant="primary" type="submit">
            Criar conta
          </Button>

          <div className="form-link">
            <Link to="/app">Já tenho uma conta</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
