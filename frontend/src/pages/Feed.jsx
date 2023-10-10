import Avatar from "../ui/Avatar";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import Card from "../ui/Card";
import Post from "../features/posts/Post";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CreatePost from "../features/posts/CreatePost";

function Feed() {
  useEffect(() => {
    document.title = "Feed | LinkedIn";
  }, []);

  return (
    <div className="grid grid-cols-8 gap-6 py-6">
      <div className="col-span-2">
        <Card className="flex flex-col items-center px-8 py-4 gap-1">
          <Link to="myprofile" className="group flex flex-col items-center">
            <Avatar size={80} />
            <h3 className="text-lg font-semibold group-hover:underline ">
              Sean Huvaya
            </h3>
          </Link>
          <p className="text-sm text-center">
            Full-Stack Java Developer - Java | Spring Boot | JavaScript | Vue.JS
          </p>
        </Card>
      </div>
      <div className="col-span-4">
        <div className="space-y-8">
          <CreatePost />
          <hr />
          <ul className="space-y-4">
            {new Array(10).fill(0).map((_, i) => (
              <Post key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Feed;
