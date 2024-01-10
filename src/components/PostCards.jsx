import { Col, Row } from "react-bootstrap";
import PostCard from "./PostCard";
import { posts } from "../posts";

const PostCards = () => {
  return (
    <Row className="gap-2">
      {posts.map((post) => (
        <Col sm={12} key={"post" + post.id}>
          <PostCard {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default PostCards;
