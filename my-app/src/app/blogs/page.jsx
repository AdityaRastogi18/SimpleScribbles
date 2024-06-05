import AllPosts from "../Components/AllPosts";

const page = () => {
  return (
    <>
      <section className="flex mt-3 mb-1 md:mt-[2.5rem] md:mb-[0.5rem] justify-between items-center">
        <h3 className="text-lg  md:text-[25px]">
          All Blog Posts
        </h3>
        <span className="">
          <label htmlFor="sort">Sort by:</label>
          <select name="sort" id="sort" className="bg-transparent border dark:text-white p-1 rounded-xl ms-3">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </span>
      </section>
      <AllPosts />
    </>
  );
};

export default page;
