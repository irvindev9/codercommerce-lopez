import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import CartIcon from '../icon/CartIcon';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Codercommerce-Lopez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link to="/category/Nintendo">Nintendo</Link>
              <Link to="/category/Playstation">Playstation</Link>
              <Link to="/category/Xbox">Xbox</Link>
              <NavDropdown.Divider />
              <Link to="/">Ver todo</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </Container>
    </Navbar>
  )
}

export default NavBar;