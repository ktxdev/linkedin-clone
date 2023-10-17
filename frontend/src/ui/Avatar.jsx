import { forwardRef } from "react";

const Avatar = forwardRef(function Avatar({ size, avatar, bordered }, ref) {
  return (
    <img
      ref={ref}
      className={`rounded-full object-cover w-${size} h-${size} ${
        bordered && "border-4 border-stone-50"
      }`}
      src={avatar || "./default-user.svg"}
      alt="Avatar"
    />
  );
});

export default Avatar;
