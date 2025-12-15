import { Post } from "../types/post.types";

type Props = {
  posts?: Post[];
  isLoading?: boolean;
  skeletonCount?: number;
};

export const PostsList = ({
  posts,
  isLoading = false,
  skeletonCount = 10,
}: Props) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 dark:bg-gray-700 h-40 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {posts?.map((post) => (
        <div
          key={post.id}
          className="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {post.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {post.body.length > 100
              ? post.body.substring(0, 100) + "..."
              : post.body}
          </p>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            User ID: {post.userId}
          </div>
        </div>
      ))}
    </div>
  );
};
