import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './Login.css'

export default function Login() {
  return (
    <div className="back">
      <div className="container">
        <Form className="form-login">
          <iconify-icon icon="logos:web-dev" />
          <h1>Login</h1>
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
            <a href="">Esqueci minha senha</a>
            <a href="">Criar uma conta</a>
          </div>
        </Form>
      </div>
    </div>
  )
}
