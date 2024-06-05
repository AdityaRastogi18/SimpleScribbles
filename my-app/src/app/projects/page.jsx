"use client"
import { useState } from "react";
import AllProjects from "../Components/AllProjects";
import { sortDates } from "../util/helperfunctions";
import data from "../Projects.json";

const Page = () => {
  const [projectData, setProjectData] = useState(data);

  const handleSort = (e) => {
    const newProjectData = sortDates(
      data,
      e.target.value === "newest" ? "dsc" : "asc"
    );
    setProjectData([...newProjectData]);
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
            <option value="">Select</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </span>
      </section>
      <AllProjects data={projectData}/>
    </>
  );
};

export default Page;
