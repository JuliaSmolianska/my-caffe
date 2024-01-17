import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home1
            </Link>
            <Link to="/home2" className="nav-link">
              Home2
            </Link>
            <Nav.Link href="#home3">Home3</Nav.Link>
            <Nav.Link href="#home4">Home4</Nav.Link>
            <Nav.Link href="#home5">Home5</Nav.Link>
            <Nav.Link href="#home6">Home6</Nav.Link>
            <Nav.Link href="#home7">Home7</Nav.Link>
            <Nav.Link href="#home8">Home8</Nav.Link>
            <Nav.Link href="#home9">Home9</Nav.Link>
            <Nav.Link href="#home10">Home10</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navmenu;
