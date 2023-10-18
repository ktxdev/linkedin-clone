import { useQuery } from "@tanstack/react-query";
import { getPosts as getPostsApi } from "../../services/posts.service";

export function usePosts() {
  const { isLoading, data: { data: { content: posts } = {} } = {} } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsApi,
  });

  return { isLoading, posts };
}
