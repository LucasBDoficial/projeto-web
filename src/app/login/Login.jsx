import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './../config/firebase'

import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setUser = useNavigate()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        console.log(user)
        setUser('/app/home')
      })
      .catch((error) => {
        const errorMessage = error.message

        console.log(errorMessage)
      })
  }

  function alterarEmail(event) {
    setEmail(event.target.value)
  }

  function alterarPassword(event) {
    setPassword(event.target.value)
  }

  return (
    <div className="back">
      <div className="container">
        <Form className="form-login">
          <a href="/">
            <iconify-icon icon="logos:web-dev" />
          </a>
          <h1>Login</h1>
          <br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={alterarEmail}
              className="form-email"
              type="email"
              placeholder="E-mail"
            />
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={alterarPassword}
              className="form-pass"
              type="password"
              placeholder="Senha"
            />
          </Form.Group>

          <Button
            onClick={handleLogin}
            className="form-button"
            variant="primary"
            type="button"
          >
            Entrar
          </Button>

          <div className="form-link">
            <Link to="/app/resetsenha">Esqueci minha senha</Link>
            <Link to="/app/newlogin">Criar uma conta</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}
