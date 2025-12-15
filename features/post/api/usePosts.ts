import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./fetchPosts";

type usePostsParams = {
  page: number;
  limit: number;
};

export const usePosts = ({ page, limit }: usePostsParams) => {
  return useQuery({
    queryKey: ["posts", page, limit],
    queryFn: () => fetchPosts({ page, limit }),
    placeholderData: (prev) => prev,
  });
};
