import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import CartIcon from '../icon/CartIcon';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Codercommerce-Lopez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/Nintendo">Nintendo</NavDropdown.Item>
              <NavDropdown.Item href="/category/Playstation">Playstation</NavDropdown.Item>
              <NavDropdown.Item href="/category/Xbox">Xbox</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Ver todo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartIcon />
      </Container>
    </Navbar>
  )
}

export default NavBar;