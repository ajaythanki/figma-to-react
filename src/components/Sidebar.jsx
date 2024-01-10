import { Form, Image, Row } from "react-bootstrap";
import LocationIcon from './../assets/location-icon.svg'
import EditIcon from './../assets/edit-icon.svg'
import ErrorIcon from './../assets/error-icon.svg'
import RecommendedUsers from "./RecommendedUsers";
import { useSelector } from "react-redux";


const Sidebar = () => {
  const user = useSelector(state=> state.user.currentUser)
  return (
    <Row className="gap-5 justify-content-end w-75">
      <Form
        className="d-flex"
        style={{
          borderBottom: "1px solid lightgray",
        }}
      >
        <Image src={LocationIcon} />

        <Form.Control
          type="text"
          name="location"
          defaultValue={"Noida, India"}
          className="me-2 border-0 bg-transparent shadow-none"
        />
        <Image src={EditIcon} />
      </Form>
      <div className="d-flex gap-2">
        <Image src={ErrorIcon} />
        <p className="location-warning">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
      {
        user &&
      <RecommendedUsers/>
      }
    </Row>
  );
}

export default Sidebar