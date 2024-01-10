import { Toaster } from "react-hot-toast";
import Header from "./Header";
import { Container, NavLink } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Toaster position="top-center" />
      <Container
      >
        {children}
      </Container>
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
