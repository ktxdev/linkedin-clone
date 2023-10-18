import Post from "../features/posts/Post";
import { useEffect } from "react";
import CreatePost from "../features/posts/CreatePost";
import ProfileCard from "../ui/ProfileCard";
import { usePosts } from "../features/posts/usePosts";

function Feed() {
  useEffect(() => {
    document.title = "Feed | LinkedIn";
  }, []);

  const { isLoading, posts } = usePosts();

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
            {posts && posts.map((post) => <Post key={post.id} post={post} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Feed;
