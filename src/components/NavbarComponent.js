
import {Navbar,Nav,NavDropdown ,FormControl,Button,Form} from 'react-bootstrap';
function NavbarComponent()
{
    return(
        <div>
          
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Foody</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Contact Us</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            </Nav>
            
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}
export default NavbarComponent;