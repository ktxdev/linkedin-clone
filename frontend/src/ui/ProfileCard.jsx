import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useMyProfile } from "../features/users/useMyProfile";

function ProfileCard() {
  const { user = {} } = useMyProfile();
  return (
    <div className="flex flex-col items-center bg-white shadow rounded-md px-8 py-4 gap-1">
      <Link
        to="/my-profile"
        className="group flex flex-col items-center gap-y-4"
      >
        <Avatar size={40} avatar={user.profileImageUrl} />
        <h3 className="text-lg font-semibold group-hover:underline ">
          {user.firstName} {user.lastName}
        </h3>
      </Link>
      <p className="text-sm text-center">
        Full-Stack Java Developer - Java | Spring Boot | JavaScript | Vue.JS
      </p>
    </div>
  );
}

export default ProfileCard;
