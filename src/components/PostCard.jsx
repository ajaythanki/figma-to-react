import { Button, Card, Image } from "react-bootstrap";
import ReadMoreIcon from "../assets/more-icon.svg";
import VisibilityIcon from "../assets/visibility-icon.svg";
import ShareIcon from "../assets/share-icon.svg";
import BagIcon from "../assets/bag-icon.svg";
import CalenderIcon from "../assets/calender-icon.svg";
import LocationIcon from "../assets/location-icon.svg";

const PostCard = ({
  category,
  title,
  subtitle,
  imgURL,
  authorName,
  authorImgURL,
  date,
  location,
  companyName,
  buttonURL,
  buttonLabel,
}) => {
  const categoryIcons = {
    event: "🗓️",
    education: "🔬️",
    article: "✍️",
    job: "💼️",
  };

  return (
    <Card className="p-0">
        {category !== "job" && (
      <Card.Header className="p-0" style={{ height: 220 }}>
          <Card.Img
            src={imgURL}
            style={{
              height: "100%",
              objectFit: "cover",
            }}
          />
      </Card.Header>
        )}
      <Card.Body>
        <Card.Text className="text-capitalize">
          {categoryIcons[category]} {category}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Title tag="h5">{title}</Card.Title>
          <span
            style={{
              cursor: "pointer",
            }}
          >
            <Image src={ReadMoreIcon} />
          </span>
        </div>
        {(category === "education" || category === "article") && (
          <Card.Subtitle>{subtitle}</Card.Subtitle>
        )}
        {(category === "event" || category === "job") && (
          <>
            <div className="d-flex gap-5">
              <Card.Text>
                <Image src={category === "event" ? CalenderIcon : BagIcon} />{" "}
                {category === "event" ? date : companyName}
              </Card.Text>
              <Card.Text>
                <Image src={LocationIcon} /> {location}
              </Card.Text>
            </div>
            <Button
              variant="link"
              className="btn btn-light w-100 text-decoration-none fw-semibold border py-2 border-1"
              style={{ color: category === "event" ? "#E56135" : "#02B875" }}
              href={buttonURL}
            >
              {buttonLabel}
            </Button>
          </>
        )}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center p-1 bg-transparent border-0 p-3">
        <div className="auther-wrapper d-flex align-items-center gap-3">
          <Image
            src={authorImgURL}
            className="rounded-circle object-fit-cover"
            width={48}
            height={48}
          />
          <p className="mb-0 fw-bold">{authorName}</p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="likes d-flex gap-2">
            <Image src={VisibilityIcon} />
            1.4k views
          </div>
          <div className="share px-3 py-2 bg-body-secondary">
            <Image src={ShareIcon} />
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;