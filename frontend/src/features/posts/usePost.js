import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostApi } from "../../services/posts.service";
import toast from "react-hot-toast";

export function usePost() {
  const queryClient = useQueryClient();

  const { isLoading: isPosting, mutate: createPost } = useMutation({
    mutationFn: createPostApi,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isPosting, createPost };
}
