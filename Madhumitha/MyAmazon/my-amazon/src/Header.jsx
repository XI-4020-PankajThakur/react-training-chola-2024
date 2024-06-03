import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ marginLeft: '10px' }}>
        <Navbar.Brand href="#home"><b>My Amazon</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Electronics</Nav.Link>
            <Nav.Link href="#link">Dress</Nav.Link>
            <NavDropdown title="Furnitures" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sofa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bed
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Chair</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Table
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;