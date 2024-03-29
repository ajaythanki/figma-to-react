import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import searchIcon from '../assets/search-icon.svg'
import UserCard from '../components/UserCard'
import profileImage1 from "../assets/profile1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/features/user/userSlice';
import { Button, Form, Image, Nav, NavDropdown } from 'react-bootstrap';

const Header=({setSignupModalShow, setSigninModalShow})=> {

  const handleShowModal=(modal)=>{
    if (modal === "signup") {
      setSignupModalShow(true);
      setSigninModalShow(false);
    } else {
      setSigninModalShow(true);
      setSignupModalShow(false);
    }
  }
  const user = useSelector(state=>state.user.currentUser);
  const dispatch = useDispatch()
  console.log(user);
  return (
    <Navbar expand="lg" fixed="top" bg="white">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex my-3 me-md-auto ms-md-auto rounded-pill bg-body-tertiary searchform">
            <Button variant="btn">
              <Image src={searchIcon} />
            </Button>
            <Form.Control
              type="search"
              name="search"
              placeholder="Search for your favorite groups in ATG"
              className="me-2 border-0 bg-transparent shadow-none"
              aria-label="Search"
            />
          </Form>
          <div className="d-none d-lg-block">
            <Nav
              className="my-2 my-lg-0 hei"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {user && (
                <>
                  <Navbar.Text className="d-md-flex align-items-center">
                    <UserCard profileImage={profileImage1} />
                    <NavDropdown
                      title={user.firstName + " " + user.lastName}
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item onClick={() => dispatch(logout())}>
                        Log out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Navbar.Text>
                </>
              )}
              {!user && (
                <Navbar.Text className="d-md-flex align-items-center">
                  Create account.
                  <NavDropdown title="It’s free" id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={() => handleShowModal("signup")}>
                      Signup
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleShowModal("signin")}>
                      Login
                    </NavDropdown.Item>
                  </NavDropdown>
                </Navbar.Text>
              )}
            </Nav>
          </div>
          {/* Mobile Menu */}
          <div className="d-lg-none">
            {user && (
                
                    <Button variant='button' className='w-100 btn-light' onClick={() => dispatch(logout())}>
                      Log out
                    </Button>
            )}
            {!user && (
              <Navbar.Text className="d-flex overflow-scroll flex-column justify-content-center w-100 align-items-center gap-2 px-3">
                <Button variant='button' className='w-100 px-0 btn-light' onClick={() => handleShowModal("signup")}>
                  Signup
                </Button>
                <Button variant='button' className='w-100 px-0 btn-light' onClick={() => handleShowModal("signin")}>
                  Login
                </Button>
              </Navbar.Text>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;