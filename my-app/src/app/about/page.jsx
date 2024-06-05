"use client";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const page = () => {
  return (
    <div className="h-[77.5vh] md:h-[75vh] px-8 overflow-y-scroll snap-y snap-mandatory">
      <section className="h-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center snap-start">
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="text-3xl lg:text-[4.5rem] font-bold">
            Hi, I&apos;m{" "}
            <Link
              href="https://3-d-portfolio-snowy.vercel.app"
              target="_blank"
              className="hover:text-slate-500 hover:dark:text-teal-300 hover:italic hover:underline"
            >
              Aditya!
            </Link>
          </div>
          <p className="text-lg lg:text-2xl">
            a passionate developer with an entrepreneurial heart, and this is my
            personal blog -{" "}
            <ReactTyped
              className="text-slate-500 dark:text-teal-300 italic"
              strings={["Simple Scribbles"]}
              typeSpeed={30}
              backSpeed={40}
            />
            .
          </p>
        </div>
        <img
          src="/images/developer.png"
          className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
          alt="Developer"
        />
      </section>

      <section className="h-full flex flex-col-reverse md:flex-row-reverse justify-center md:justify-between items-center snap-start">
        <div className="flex  flex-col gap-5 md:gap-10">
          <div className="text-3xl lg:text-[4.5rem] font-bold lg:leading-[5rem]">
            What is Simple Scribbles?
          </div>
          <p className="text-md text-justify lg:text-2xl">
            A way to document my journey, share my knowledge, and connect with
            like-minded individuals & land a job.
            <br />
            My goal is to provide valuable content that can help, inspire, and
            entertain my readers.
          </p>
        </div>
        <img
          src="/images/developer.png"
          className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
          alt="Developer"
        />
      </section>

      <section className="h-full flex flex-col justify-center items-center snap-start gap-8">
        <div className="text-4xl lg:text-[4.5rem] font-bold lg:leading-[5rem]">
          Subscribe for more!
        </div>
        <div className="relative mt-2 rounded-md shadow-sm w-full lg:w-9/12">
          <input
            type="text"
            name="email"
            id="email"
            className="block w-full rounded-md border border-black dark:border-0 py-1.5 pl-4 pr-20 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-10"
            placeholder="@your_email"
          />
          <div className="absolute inset-y-0 right-0 flex items-center z-2 rounded-md ">
            <button className="text-black hover:text-white bg-slate-500 dark:bg-teal-300 w-full px-2 lg:p-3 lg:px-4 h-full rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
