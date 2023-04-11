// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavComponent({ currentpage, handlePageChange }) {
  console.log(currentpage)
  return (
    <Navbar style={{color:"white", backgroundColor:"black"}} expand="lg">
      {/* <Container> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: "white"}}onClick={() => handlePageChange('home')} href="#home">Home</Nav.Link>
            <Nav.Link style={{color: "white"}}onClick={() =>handlePageChange('projects')} href="#projects">Projects</Nav.Link>
            <Nav.Link style={{color: "white"}}onClick={() =>handlePageChange('contact')} href="#contact">Contact</Nav.Link>
            <Nav.Link style={{color: "white"}}onClick={() =>handlePageChange('resume')} href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  )
}
export default NavComponent;