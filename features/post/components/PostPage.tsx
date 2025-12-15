"use client";

import {  useLayoutEffect } from "react";
import { useSearchParams } from "next/navigation";
import { usePosts } from "../api/usePosts";
import { PostsList } from "./PostList";
import { Pagination } from "./Pagination";


const LIMIT = 10;

export default function PostsPage() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError } = usePosts({
    page,
    limit: LIMIT,
  });

  useLayoutEffect(() => {
    if (!isLoading && data?.data?.length) {
      const top = document.getElementById("posts-top");
      top?.scrollIntoView({ behavior: "smooth" });
    }
  }, [page, isLoading, data]);

  return (
    <div className="max-w-7xl mx-auto px-4" id="posts-top">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
        Blog Posts
      </h1>

      <PostsList posts={data?.data} isLoading={isLoading} />

      {!isLoading && data && (
        <Pagination page={data.meta.page} totalPages={data.meta.totalPages} />
      )}

      {isError && (
        <p className="text-center mt-10 text-red-500">Error loading posts</p>
      )}
    </div>
  );
}
