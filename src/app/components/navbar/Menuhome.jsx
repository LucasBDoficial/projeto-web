import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Menuhome.css'

export default function Menuhome() {
  return (
    <Navbar expand="lg" className="container-home">
      <Container fluid>
        <Navbar.Brand href="/">
          <iconify-icon icon="logos:web-dev" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-home"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/app/home">Home</Link>

            <Link to="/app/home/novoclient">Novo cliente</Link>

            <Link to="/">Sair</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
