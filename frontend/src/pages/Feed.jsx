import Avatar from "../ui/Avatar";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import Card from "../ui/Card";
import Post from "../features/posts/Post";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CreatePost from "../features/posts/CreatePost";
import ProfileCard from "../ui/ProfileCard";

function Feed() {
  useEffect(() => {
    document.title = "Feed | LinkedIn";
  }, []);

  return (
    <div className="grid grid-cols-8 gap-6 py-6">
      <div className="col-span-2">
        <ProfileCard />
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
