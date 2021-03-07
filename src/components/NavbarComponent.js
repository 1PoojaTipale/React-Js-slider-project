
import {Navbar,Nav,NavDropdown ,FormControl,Button,Form} from 'react-bootstrap';
function NavbarComponent()
{
    return(
        <div>
          
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">MY SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">My Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}
export default NavbarComponent;