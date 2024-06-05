"use client";
import { useEffect, useState } from "react";
import AllPosts from "../Components/AllPosts";
import data from "../SampleBlogs.json";
import { sortDates } from "../util/helperfunctions";

const page = () => {
  const [blogData, setBlogData] = useState(data);

  const handleSort = (e) => {
    const newBlogData = sortDates(
      data,
      e.target.value === "newest" ? "dsc" : "asc"
    );
    setBlogData([...newBlogData]);
  };

  return (
    <>
      <section className="flex mt-3 mb-1 md:mt-[2.5rem] md:mb-[0.5rem] justify-between items-center">
        <h3 className="text-lg  md:text-[25px]">All Blog Posts</h3>
        <span className="">
          <label htmlFor="sort">Sort by:</label>
          <select
            name="sort"
            id="sort"
            className="bg-transparent border dark:text-white p-1 rounded-xl ms-3"
            onChange={handleSort}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </span>
      </section>
      <AllPosts data={blogData} />
    </>
  );
};

export default page;
