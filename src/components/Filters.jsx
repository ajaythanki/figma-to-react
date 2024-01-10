import { Col, Image, Row } from "react-bootstrap"
import DropdownIcon from "../assets/dropdown-icon.svg";
import addIcon from "../assets/add-icon.png";
import exitIcon from "../assets/exit-icon.svg";
import { useSelector } from "react-redux";

const Filters = () => {
  const user = useSelector(state=> state.user.currentUser)

  return (
    <Row className="my-4 border-bottom">
      <Col sm={8}>
        <ul className="d-flex p-0 gap-3">
          <li className="p-0 list-unstyled">
            <a href="" className="text-decoration-none text-black">
              All Posts(32)
            </a>
          </li>
          <li className="p-0 list-unstyled">
            <a href="" className="text-decoration-none text-black">
              Article
            </a>
          </li>
          <li className="p-0 list-unstyled">
            <a href="" className="text-decoration-none text-black">
              Event
            </a>
          </li>
          <li className="p-0 list-unstyled">
            <a href="" className="text-decoration-none text-black">
              Education
            </a>
          </li>
          <li className="p-0 list-unstyled">
            <a href="" className="text-decoration-none text-black">
              Job
            </a>
          </li>
        </ul>
      </Col>
      <Col sm={4} className="d-flex justify-content-end">
        <button className="btn btn-light">
          Write a Post <Image src={DropdownIcon} />
        </button>
        {user ? (
          <button className="btn btn-light bg-white border border-1">
            <Image src={exitIcon} /> Leave Group
          </button>
        ) : (
          <button className="btn btn-primary">
            <Image src={addIcon} /> Join Group
          </button>
        )}
      </Col>
    </Row>
  );
}

export default Filters