import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";
import { HiXMark } from "react-icons/hi2";
import IconButton from "../../ui/IconButton";
import { FaImage } from "react-icons/fa6";
import { useMyProfile } from "../users/useMyProfile";
import { useRef, useState } from "react";

function PostEditor({ onCloseModal }) {
  const postImageRef = useRef();
  const [postImage, setPostImage] = useState(null);
  const { user: { profileImageUrl } = {} } = useMyProfile();

  function onPostImageChanged(e) {
    const file = e.target.files[0];
    setPostImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      postImageRef.current.src = this.result;
    };
  }

  return (
    <div className="p-8 space-y-4">
      <IconButton className="absolute top-5 right-5" onClick={onCloseModal}>
        <HiXMark />
      </IconButton>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar size={12} avatar={profileImageUrl} />
          <h3 className="text-lg">Sean Huvaya</h3>
        </div>
      </div>
      <textarea
        className="w-full p-2 text-xl mt-8 resize-none outline-none"
        placeholder="What do you want to talk about?"
        rows={`${postImage ? 5 : 10}`}
      ></textarea>
      {postImage && (
        <div className="relative w-52 rounded-lg bg-gray-400">
          <img ref={postImageRef} className="object-cover" />
          <IconButton
            className="absolute top-1 right-1"
            onClick={() => {
              postImageRef.current.src = "";
              setPostImage(null);
            }}
          >
            <HiXMark />
          </IconButton>
        </div>
      )}
      {!postImage && (
        <label
          htmlFor="media"
          className="flex items-center justify-center cursor-pointer w-16 h-16 bg-stone-200 hover:bg-stone-300 text-gray-600 p-2 rounded-full transition-colors duration-100"
        >
          <input
            id="media"
            hidden
            type="file"
            onChange={onPostImageChanged}
            accept=".png,.jpg,.jpeg,.svg"
          />
          <FaImage size={20} />
        </label>
      )}
      <hr />
      <div className="flex items-center justify-end">
        <Button type="primary" rounded={true} disabled={true}>
          Post
        </Button>
      </div>
    </div>
  );
}

export default PostEditor;
