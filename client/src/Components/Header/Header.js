import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation} from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png';

function Header() {
  const location = useLocation();

  const handleActiveNavLink = () => {

  }
  return (
    <Navbar id="custom-nav" collapseOnSelect expand="lg" variant="light" className="py-0">
      <Container>
        <Navbar.Brand href="#home" className="py-0"><img className="navbar-logo" src={Logo} alt="logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">Home</Link>
            <Link className={`nav-link ${location.pathname === "/about-us" && "active"}`} to="/about-us">
              About
            </Link>
            <Link className={`nav-link ${location.pathname === "/contact-us" && "active"}`} to="/">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;