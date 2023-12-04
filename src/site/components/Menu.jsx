import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function Menu() {
  return (
    <Navbar expand="lg" className="container-nav">
      <Container fluid>
        <Navbar.Brand href="/">
          <iconify-icon icon="logos:web-dev" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <a className="tag" href="#banner">
              Home
            </a>
            <a className="tag" href="#features">
              Features
            </a>
            <a className="tag" href="#testemunho">
              Clientes
            </a>
            <a className="tag" href="#planos">
              Planos e Preços
            </a>
            <a className="tag" href="#footer">
              Contato
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
