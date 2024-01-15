import { Col, Container, Row } from "react-bootstrap";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Filters from "./components/Filters";
import Sidebar from "./components/Sidebar";
import { posts } from "./posts";
import PostCard from "./components/PostCard";
import { useState } from "react";

const App = () => {

  const [filter, setFilter] = useState("all");

  const postsToShow = filter === "all" ? posts : posts.filter(post=>post.category===filter)

  return (
    <Layout>
      <Hero
        title={"Computer Engineering"}
        subTitle={"142,765 Computer Engineers follow this"}
      />
      <section className="d-flex">
        <Container>
          <Filters setFilter={setFilter} totalPosts={postsToShow.length} />
          <Row className="flex-column-reverse flex-sm-row">
            <Col sm={7} md={8}>
              <Row className="gap-2">
                {postsToShow.map((post) => (
                  <Col sm={12} key={"post" + post.id}>
                    <PostCard {...post} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col
            sm={5}
              md={4}
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