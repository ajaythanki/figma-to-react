import { CloseButton, Form, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import SignupIllustration from "../assets/signup-illustration.png";
import ShowPasswordIcon from "../assets/eye.png";
import HidePasswordIcon from "../assets/eye-slash.png";
import GoogleIcon from "../assets/google-icon.svg";
import FBIcon from "../assets/fb-icon.png";
import { useState } from "react";
import toast from "react-hot-toast";
import { register } from "../redux/features/user/userSlice";
import { useDispatch } from "react-redux";
const SignUpModal = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleSignup = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return toast.error("All fields are required...", { id: "signup" });
    }
    if (confirmPassword !== password) {
      return toast.error("Password and Confirm Password should be equal...", {
        id: "signup",
      });
    }
    dispatch(register({ firstName, lastName, email, password }));
    toast.success("Signed up Successfully...", { id: "signup" });
    props.onHide();
  };
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
            computer engineering. Sign up now 🤘🏼
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={12} lg={6}>
                <Row>
                  <h2>Create Account</h2>
                </Row>
                <Form onSubmit={handleSignup}>
                  <div className="signup-form">
                    <Row className="gap-0">
                      <Col sm={12} md={6} className="pe-md-0">
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          required
                          value={firstName}
                          onChange={({ target }) => {
                            setFirstName(target.value);
                          }}
                        />
                      </Col>
                      <Col sm={12} md={6} className="ps-md-0">
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          required
                          value={lastName}
                          onChange={({ target }) => {
                            setLastName(target.value);
                          }}
                        />
                      </Col>
                      <Col sm={12}>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={email}
                          onChange={({ target }) => {
                            setEmail(target.value);
                          }}
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
                            onChange={({ target }) => {
                              setPassword(target.value);
                            }}
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
                      <Col sm={12}>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          required
                          value={confirmPassword}
                          onChange={({ target }) => {
                            setConfirmPassword(target.value);
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col>
                      <Button
                        type="submit"
                        size="lg"
                        name="signup"
                        variant="primary"
                        className="w-100 mt-4 rounded-pill btn-signup"
                      >
                        Create Account
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <Row>
                  <Col>
                    <Button
                      type="button"
                      size="lg"
                      variant="light"
                      className="w-100 mt-4 btn-social-login"
                      onClick={() => {}}
                    >
                      <Image src={FBIcon} />
                      Sign up with Facebook
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="light"
                      className="w-100 mt-2 btn-social-login"
                      onClick={() => {}}
                    >
                      <Image src={GoogleIcon} />
                      Sign up with Google
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} xs={6} lg={6} className="g-3">
                <Row>
                  <p className="signin-text">
                    Already have an account? <span>Sign In</span>
                  </p>
                </Row>
                <Row className="d-none d-lg-flex flex-column justify-content-between">
                  <Image
                    src={SignupIllustration}
                    className="d-block me-auto ms-auto"
                    style={{
                      padding: 30,
                    }}
                  />
                  <p className="tnc">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default SignUpModal;
