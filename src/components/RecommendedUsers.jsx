import { Col, Image, NavLink } from 'react-bootstrap'
import ThumbIcon from './../assets/thumb-icon.svg'
import UserCard from './UserCard'
import profileImage2 from "../assets/profile2.jpg";
import profileImage3 from "../assets/profile3.jpg";
import profileImage4 from "../assets/profile4.jpg";
import profileImage5 from "../assets/profile5.jpg";

const RecommendedUsers = () => {
  return (
    <div>
        <h2 className="recommended-title d-flex gap-2">
          <Image src={ThumbIcon} />
          Recommended Groups
        </h2>
        <Col>
          <UserCard profileImage={profileImage2} title={'Leisure'}/>
          <UserCard profileImage={profileImage3} title={'Activism'}/>
          <UserCard profileImage={profileImage4} title={'MBA'}/>
          <UserCard profileImage={profileImage5} title={'Philosophy'}/>

          <NavLink className='link-btn'>See More...</NavLink>


        </Col>
      </div>
  )
}

export default RecommendedUsers