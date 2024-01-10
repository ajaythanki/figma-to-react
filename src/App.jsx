import { Col, Container, Row } from "react-bootstrap";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Filters from "./components/Filters";
import PostCards from "./components/PostCards";
import Sidebar from "./components/Sidebar";

const App = () => {

  return (
    <Layout>
      <Hero
        title={"Computer Engineering"}
        subTitle={"142,765 Computer Engineers follow this"}
      />
      <section className="d-flex">
        <Container>
          <Filters />
          <Row>
            <Col sm={8}>
              <PostCards />
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-end align-items-start"
            >
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default App;