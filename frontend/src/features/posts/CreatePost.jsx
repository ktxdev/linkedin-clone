import Card from "../../ui/Card";
import Avatar from "../../ui/Avatar";
import Modal from "../../ui/Modal";
import PostEditor from "./PostEditor";
import { useMyProfile } from "../users/useMyProfile";

function CreatePost() {
  const { user: { profileImageUrl } = {} } = useMyProfile();
  return (
    <Card className="p-4">
      <Modal>
        <div className="flex gap-1">
          <Avatar size={12} avatar={profileImageUrl} />
          <Modal.Open opens="createPost">
            <div className="border-2 hover:cursor-pointer hover:bg-stone-100 border-stone-200 rounded-3xl w-full py-3 px-4 transition-all duration-300">
              Start a post
            </div>
          </Modal.Open>
        </div>

        <Modal.Window name="createPost">
          <PostEditor />
        </Modal.Window>
      </Modal>
    </Card>
  );
}

export default CreatePost;
