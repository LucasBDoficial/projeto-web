import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

import './Resetsenha.css'

export default function Resetsenha() {
  return (
    <div className="back">
      <div className="container">
        <Form className="form-login">
          <a href="/">
            <iconify-icon icon="logos:web-dev" />
          </a>
          <h1>Recuperar senha</h1>
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
            Entrar
          </Button>

          <div className="form-link">
            <Link to="/app/newlogin">Criar uma conta</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
