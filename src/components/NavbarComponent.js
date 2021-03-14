import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar,Nav,NavDropdown ,FormControl,Button,Form} from 'react-bootstrap';
function NavbarComponent()
{
  const MyActiveClass=(path)=>
  {
    if(window.location.pathname ===(path))
    {
      return"text-danger";
    }
    else
    {
      return "text-black";
    }
  }
    return(
        <div>
          
          <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/">MY SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Link className="nav-link" to="/"> Home </Link> */}
            <Link className={"nav-link "+ MyActiveClass("/")} to="/">Home</Link>
            <Link className={"nav-link " + MyActiveClass("/Mycart")} to="/Mycart">My Cart</Link>
            <Link className={"nav-link " + MyActiveClass("/login")} to="/login">Login</Link>
            <Link className={"nav-link "  + MyActiveClass("/register")} to="register">Register</Link>
            <Link className={"nav-link "   + MyActiveClass("/About")} to="/About">About Us</Link>
            <Link className={"nav-link "  + MyActiveClass("/contact")} to="/contact">Contact Us</Link>
            <Link className={"nav-link "  + MyActiveClass("/register_second")} to="/register_second">Register Next</Link>
            </Nav>
            
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}
export default NavbarComponent;