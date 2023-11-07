import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../img/logoPokeBuy.png"
import "./navbar.css"
function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
      <img className="w-10" src={logo} alt="" />
        <Container>
          <Navbar.Brand href="#home">PokeBuy</Navbar.Brand>
          <Nav className="me-auto w-100">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Produtos</Nav.Link>
            <Nav.Link href="#pricing">Contatos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;