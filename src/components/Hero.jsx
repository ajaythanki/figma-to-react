import { Container} from "react-bootstrap";

const Hero = ({ title, subTitle }) => {
  return (
    <section className="hero-section">
        <Container>
          <div
            className="d-flex justify-content-end  flex-column"
            style={{
              paddingBottom: 40,
              height:440
            }}
          >
            <h1 className="hero-title">{title}</h1>
            <h2 className="hero-sub-title">{subTitle}</h2>
          </div>
        </Container>
    </section>
  );
};

export default Hero;