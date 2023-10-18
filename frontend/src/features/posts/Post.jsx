import Card from "../../ui/Card";
import Avatar from "../../ui/Avatar";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import Button from "../../ui/Button";

function Post({
  post: {
    text,
    imageUrl,
    postedBy: { firstName, lastName, profileImageUrl },
  },
}) {
  return (
    <li>
      <Card className="space-y-2 py-2">
        <div className="flex items-center px-4 gap-1">
          <Avatar size={16} avatar={profileImageUrl} />
          <div>
            <h3 className="text-sm font-semibold">
              {firstName} {lastName}
            </h3>
            <p className="text-sm">Java Backend Developer</p>
          </div>
        </div>
        <div>
          <p className="text-sm px-4 py-2">{text}</p>
          {imageUrl && <img src={imageUrl} alt="post"></img>}
          <div className="flex items-center justify-between px-2 pt-1">
            <span className="flex items-center gap-1">
              <AiFillLike className="text-blue-500" />
              <span className="text-sm">3</span>
            </span>
            <span className="text-sm">2 comments</span>
          </div>
        </div>
        <hr className="mx-1" />
        <div className="grid grid-cols-2 p-1">
          <Button>
            <AiOutlineLike />
            <span>Like</span>
          </Button>
          <Button>
            <FaRegCommentDots />
            <span>Comment</span>
          </Button>
        </div>
      </Card>
    </li>
  );
}

export default Post;
