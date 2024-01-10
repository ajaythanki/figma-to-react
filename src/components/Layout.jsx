import { Toaster } from "react-hot-toast";
import Header from "./Header";
import { Container, NavLink } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { useState } from "react";

const Layout = ({ children }) => {
  const [signUpModalShow, setSignupModalShow] = useState(false);
  const [signinModalShow, setSigninModalShow] = useState(true);

  return (
    <>
      <Header signUpModalShow={signUpModalShow} setSignupModalShow={setSignupModalShow} signinModalShow={signinModalShow} setSigninModalShow={setSigninModalShow} />
      <Toaster position="top-center" />
      <main style={{marginTop:64}}>
        {children}
      </main>
      <SignUpModal show={signUpModalShow} onHide={() => setSignupModalShow(false)} />
      <SignInModal show={signinModalShow} onHide={() => setSigninModalShow(false)} />

      <Footer />
    </>
  );
};

export default Layout;

function Footer() {
  return (
    <Container className="position-static z-1 bottom-0 justify-content-center align-items-center py-5">

      <h6
        className="d-flex text-secondary text-center justify-content-center"
      >
        {"Copyright © "}
        <NavLink
          href="https://github.com/ajaythanki/"
          target="_blank"
        >
          Ajay Thanki&nbsp;{" "}
        </NavLink>
        {new Date().getFullYear()}
        {"."}
      </h6>
    </Container>
  );
}
