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
    <Container className="position-static bottom-0">
      <h6
        className="text-secondary text-align-center"
      >
        {"Copyright © "}
        <NavLink
          href="https://github.com/ajaythanki/"
          target="_blank"
        >
          Ajay Thanki
        </NavLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </h6>
    </Container>
  );
}
