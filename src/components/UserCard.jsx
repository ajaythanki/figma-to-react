import { Image } from "react-bootstrap"

const UserCard = ({profileImage, title, buttonLabel}) => {
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
      {buttonLabel && (
        <button
          className={`btn ${
            buttonLabel === "Follow" ? "btn-light" : "btn-dark"
          } rounded-pill`}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default UserCard