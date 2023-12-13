import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import searchIcon from '../assets/search-icon.svg'
import { Button, Form, Image, Nav } from 'react-bootstrap';

const Header=()=> {
  return (
    <Navbar fixed="top" expand="lg" bg='white'>
      <Container>
      <Navbar.Brand href="#home">
        <Image src={logo} alt="logo" width={120} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="navbarSupportedContent">
        <Form class="d-flex mx-auto my-2 px-3 rounded-pill border bg-light border-2 w-25">
          <Image alt="search" src={searchIcon} className='mr-n5' />
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 px-3 rounded-pill border-0 shadow-none bg-transparent"
            aria-label="Search"
          />
        </Form>
        <Nav>
          <Nav.Item>
            <Navbar.Text className='' >
              Create account. <a href="#signup">It’s free!</a>
            </Navbar.Text>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;