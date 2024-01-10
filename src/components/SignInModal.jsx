import {CloseButton, Form, Image, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import SignupIllustration from '../assets/signup-illustration.png'
import ShowPasswordIcon from "../assets/eye.png";
import HidePasswordIcon from "../assets/eye-slash.png";
import GoogleIcon from '../assets/google-icon.svg'
import FBIcon from '../assets/fb-icon.png'
import { authLogin } from '../redux/features/userSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const SignInModal = (props) => {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const dispatch=useDispatch()
  const handleSignin = (e)=>{
    e.preventDefault();

    toast.loading('Signing In...', {id:"signin"})
    dispatch(authLogin(email, password));
    props.onHide();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="position-relative">
        <CloseButton onClick={props.onHide} />
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Let&apos;s learn, share & inspire each other with our passion for
            computer engineering. Sign In now 🤘🏼
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={6}>
                <Row>
                  <h2>Sign In</h2>
                </Row>
                <Form onSubmit={handleSignin}>
                  <div className="signup-form">
                    <Row className="gap-0">
                      <Col sm={12}>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={email}
                          onChange={({ target }) => setEmail(target.value)}
                        />
                      </Col>
                      <Col sm={12}>
                        <div className="input-password">
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="border-0"
                            required
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                          />
                          <Image
                            src={
                              showPassword ? HidePasswordIcon : ShowPasswordIcon
                            }
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: "pointer", height: 20 }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button
                          type="submit"
                          size="lg"
                          name="signup"
                          variant="primary"
                          className="w-100 mt-4 rounded-pill btn-signup"
                        >
                          Sign In
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Form>
                <Row>
                  <Col>
                    <Button
                      type="button"
                      size="lg"
                      variant="light"
                      className="w-100 mt-4 btn-social-login"
                    >
                      <Image src={FBIcon} />
                      Sign In with Facebook
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="light"
                      className="w-100 mt-2 btn-social-login"
                    >
                      <Image src={GoogleIcon} />
                      Sign In with Google
                    </Button>
                    <Button variant="link forgot-password-link">
                      Forgot Password?
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={6}>
                <Row>
                  <p className="signin-text">
                    Don’t have an account yet? <span>Create new for free!</span>
                  </p>
                </Row>
                <Row className="flex-column justify-content-between">
                  <Image
                    src={SignupIllustration}
                    className="d-block me-auto ms-auto"
                    style={{
                      padding: 30,
                    }}
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default SignInModal;