import { Image } from "react-bootstrap"

const UserCard = ({profileImage, title, button}) => {
  return (
    <div className="d-flex justify-content-between my-3">
      <div className="auther-wrapper d-flex align-items-center gap-3">
        <Image
          src={profileImage}
          className="rounded-circle object-fit-cover"
          width={36}
          height={36}
        />
        <p className="mb-0">{title}</p>
      </div>
      {button && 
      <button className="btn btn-light rounded-pill" >Follow</button>
      // <button className="btn btn-dark rounded-pill" >Followed</button>
      }
    </div>
  );
}

export default UserCard