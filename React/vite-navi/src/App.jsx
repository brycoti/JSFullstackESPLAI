import './App.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/llista" className='nav-link'>Llista</Link>
              <Link to="/p1" className='nav-link'>P1</Link>
              <Link to="/p2" className='nav-link'>P2</Link>
              <Link to="/p3" className='nav-link'>P3</Link>
              <NavDropdown title="Fotos" id="fotos-dropdown">
                
                <Link className='dropdown-item' to="/foto/moto">Moto</Link>
                <Link className='dropdown-item' to="/foto/bici">Bici</Link>
                <Link className='dropdown-item' to="/foto/cotxe">Cotxe</Link>
                <Link className='dropdown-item' to="/foto/taxi">Taxi</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      <Link to="/p1" className='nav-link'>ENLACE A P1</Link>

      <Container style={{backgroundColor: "yellow"}}>
        <Outlet />
      </Container>



    </>
  )
}

export default App
