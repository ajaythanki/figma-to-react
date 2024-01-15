import { Button, Col, Image, Row } from "react-bootstrap"
import DropdownIcon from "../assets/dropdown-icon.svg";
import addIcon from "../assets/add-icon.png";
import exitIcon from "../assets/exit-icon.svg";
import { useSelector } from "react-redux";

const Filters = ({setFilter, totalPosts}) => {
  const user = useSelector(state=> state.user.currentUser)

  const handleFilter = (category) => {
    setFilter(category);
  }

  return (
    <Row className="my-4 border-bottom">
      <Col sm={8}>
        <ul className="d-flex p-0 gap-3">
          <li className="p-0 list-unstyled">
            <Button variant="button" onClick={()=>handleFilter("all")} className="text-decoration-none text-black">
              All Posts({totalPosts})
            </Button>
          </li>
          <li className="p-0 list-unstyled">
            <Button variant="button" onClick={()=>handleFilter("article")} className="text-decoration-none text-black">
              Article
            </Button>
          </li>
          <li className="p-0 list-unstyled">
            <Button variant="button" onClick={()=>handleFilter("event")} className="text-decoration-none text-black">
              Event
            </Button>
          </li>
          <li className="p-0 list-unstyled">
            <Button variant="button" onClick={()=>handleFilter("education")} className="text-decoration-none text-black">
              Education
            </Button>
          </li>
          <li className="p-0 list-unstyled">
            <Button variant="button" onClick={()=>handleFilter("job")} className="text-decoration-none text-black">
              Job
            </Button>
          </li>
        </ul>
      </Col>
      <Col sm={4} className="text-end">
        <Button variant="button" className="btn btn-light me-3">
          Write a Post <Image src={DropdownIcon} />
        </Button>
        {user ? (
          <Button variant="button" className="btn btn-light bg-white border border-1">
            <Image src={exitIcon} /> Leave Group
          </Button>
        ) : (
          <Button variant="button" className="btn btn-primary">
            <Image src={addIcon} /> Join Group
          </Button>
        )}
      </Col>
    </Row>
  );
}

export default Filters