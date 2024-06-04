import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import Img from '../Images/SparkImg.png';
function NavigationBar() {
  return (
    <Navbar expand="lg" className=" bg-body" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Row>
            <img style={{ maxWidth: 80 }} src={Img} />
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between ">
          <Nav>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Spark">Spark</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="" href="/Login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
