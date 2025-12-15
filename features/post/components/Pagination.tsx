"use client";

import ReactPaginate from "react-paginate";
import { useSearchParams, useRouter } from "next/navigation";

type Props = {
  page: number;
  totalPages: number;
};

export const Pagination = ({ page, totalPages }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`?${params.toString()}`, { scroll: false });
    if (typeof window !== "undefined") {
      const anchor = document.getElementById("posts-top");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="mt-6 flex justify-center w-full">
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel="..."
        pageCount={totalPages}
        forcePage={page - 1}
        marginPagesDisplayed={1} // pages at start/end
        pageRangeDisplayed={2} // pages around current
        onPageChange={handlePageChange}
        containerClassName="flex flex-wrap justify-center gap-2"
        pageClassName="px-3 py-1 border rounded-md cursor-pointer bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        activeClassName="bg-blue-600 border-blue-600 text-gray-700"
        previousClassName="px-3 py-1 border rounded-md cursor-pointer bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        nextClassName="px-3 py-1 border rounded-md cursor-pointer bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        breakClassName="px-3 py-1 border rounded-md cursor-default bg-gray-200 dark:bg-gray-700 text-gray-500"
      />
    </div>
  );
};
