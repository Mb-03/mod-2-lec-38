import { NormalizedPostsResponse } from "../types/post.types";

type fetchPostsParams = {
  page: number;
  limit: number;
};

export const fetchPosts = async ({
  page,
  limit,
}: fetchPostsParams): Promise<NormalizedPostsResponse> => {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?limit=${limit}&skip=${skip}`
  );

  if (!res.ok) throw new Error("failed to fetch posts")

    const raw = await res.json()

    const totalPages = Math.ceil(raw.total / limit)

    return {
        data: raw.posts,
        meta: {
            page,
            limit,
            totalItems: raw.total,
            totalPages
        },
    }

};
