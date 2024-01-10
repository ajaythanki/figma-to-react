import { Col, Row } from "react-bootstrap";
import BlogImage1 from "../assets/blog-1.jpg";
import BlogImage2 from "../assets/blog-2.jpg";
import BlogImage3 from "../assets/blog-3.jpg";
import profileImage1 from "../assets/profile3.jpg";
import profileImage2 from "../assets/profile2.jpg";
import profileImage3 from "../assets/profile1.jpg";
import profileImage4 from "../assets/profile4.jpg";
import BlogCard from "./BlogCard";

const BlogCards = () => {
  return (
    <Row className="gap-2">
      <Col sm={12}>
        <BlogCard
          category={"article"}
          title={"What if famous brands had regular fonts? Meet RegulaBrands!"}
          subtitle={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
          imgURL={BlogImage1}
          authorName={"Sarthak Kamra"}
          authorImgURL={profileImage1}
        />
      </Col>
      <Col sm={12}>
        <BlogCard
          category={"education"}
          title={"Tax Benefits for Investment under National Pension Scheme launched by Government"}
          subtitle={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
          imgURL={BlogImage2}
          authorName={"Sarah West"}
          authorImgURL={profileImage2}
        />
      </Col>
      <Col sm={12}>
        <BlogCard
          category={"meetup"}
          title={"Finance & Investment Elite Social Mixer @Lujiazui"}
          subtitle={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
          imgURL={BlogImage3}
          authorName={"Ronal Jones"}
          authorImgURL={profileImage3}
          date={'Fri, 12 Oct, 2018'}
          location={'Ahmedabad, India'}
          buttonLabel={'Visit Website'}
          buttonURL={'#'}
        />
      </Col>
      <Col sm={12}>
        <BlogCard
          category={"job"}
          title={"Software Developer"}
          companyName={'Innovaccer Analytics Private Ltd.'}
          imgURL={BlogImage2}
          authorName={"Joseph Gray"}
          authorImgURL={profileImage4}
          location={'Noida, India'}
          buttonLabel={'Apply on Timesjobs'}
          buttonURL={'#'}
        />
      </Col>
    </Row>
  );
};

export default BlogCards;
