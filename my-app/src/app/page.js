import Image from "next/image";
import RecentPosts from "./Components/RecentPosts";
import data from "./SampleBlogs.json";
import AllPosts from "./Components/AllPosts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="text-[50px] md:text-[92px] text-center lg:text-[130px] xl:text-[194px] text-clip border-b xl:tracking-[0.1em]">
        THE BLOG
      </header>
      <section className="">
        <h3 className="mt-4 mb-2 text-lg md:mt-[2.5rem] md:text-[25px]">Recent Blog Posts</h3>
        <RecentPosts {...data[0]} />        
      </section>
      <section className="">
        <h3 className="mt-3 text-lg md:mt-[4.5rem] md:text-[25px]">All Blog Posts</h3>
        <AllPosts />
      </section>
    </main>
  );
}