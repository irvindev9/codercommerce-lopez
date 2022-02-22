import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import CartIcon from '../icon/CartIcon';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand >Codercommerce-Lopez</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="/">Home</Link> */}
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link className="mx-1" to="/category/Nintendo">Nintendo</Link>
              <Link className="mx-1" to="/category/Playstation">Playstation</Link>
              <Link className="mx-1" to="/category/Xbox">Xbox</Link>
              <NavDropdown.Divider />
              <Link to="/">Ver todo</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart" className="position-relative">
          <CartIcon />
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  )
}

export default NavBar;