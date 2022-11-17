import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png';

function Header() {
  return (
    <Navbar id="custom-nav" collapseOnSelect expand="lg" bg="light" variant="light" className="py-0">
      <Container>
        <Navbar.Brand href="#home" className="py-0"><img className="navbar-logo" src={Logo} alt="logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link className='nav-link active' to="/">Home</Link>
            <Link className='nav-link' to="/">
              About
            </Link>
            <Link className='nav-link' to="/">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;