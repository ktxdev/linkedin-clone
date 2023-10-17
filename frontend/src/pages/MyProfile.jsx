import { useEffect, useRef, useState } from "react";
import { useMyProfile } from "../features/users/useMyProfile";
import Avatar from "../ui/Avatar";
import { uploadProfileImage } from "../services/users.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function MyProfile() {
  const { user } = useMyProfile();
  const navigate = useNavigate();

  const profileRef = useRef();

  useEffect(() => {
    document.title = `${user.firstName} ${user.lastName} | LinkedIn`;
  }, [user.firstName, user.lastName]);

  async function handleChange(e) {
    const file = e.target.files[0];

    const { error, isUnathorized } = await uploadProfileImage(file);

    if (isUnathorized) {
      navigate("/sign-in", { replace: true });
      return;
    }

    if (error) {
      toast.error(error);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      profileRef.current.src = this.result;
    };
  }

  return (
    <div className="grid grid-cols-8 gap-6 py-6">
      <div className="col-span-6">
        <div className="bg-white shadow rounded-xl pb-10">
          <img className="rounded-t-xl" src="profile-bg.svg"></img>
          <div className="mx-10">
            <form className="-mt-20 relative w-40 h-40">
              <label
                className="cursor-pointer w-auto max-w-min"
                htmlFor="profile"
              >
                <input
                  hidden
                  id="profile"
                  accept=".png,.svg,.jpg,.jpeg"
                  type="file"
                  onChange={handleChange}
                />
                <Avatar
                  ref={profileRef}
                  size={40}
                  avatar={user.profileImageUrl}
                  bordered
                />
              </label>
            </form>
            <h3 className="text-2xl font-semibold mt-6">
              {user.firstName} {user.lastName}
            </h3>
            <p>
              Full-Stack Java Developer - Java | Spring Boot | JavaScript |
              Vue.JS
            </p>
            <p>Harare, Zimbabwe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
