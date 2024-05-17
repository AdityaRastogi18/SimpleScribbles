"use client";
import { useParams } from "next/navigation";
import data from "../../Projects.json";
import tagColorPicker from "@/app/util/helperfunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const page = () => {
  const { projectId } = useParams();
  const project = data.find((project) => project._id == projectId);

  return (
    <main className="mt-3 pt-5 flex flex-col xl:flex-row gap-8">
      <section className="w-full xl:w-6/12">
        <div className=" mb-4">
          <img src={project.media} className="h-[200px] md:h-[430px] w-full" alt="test" />
        </div>
        <section className="overflow-x-auto">
          <div className="flex flex-row  gap-4 w-full min-w-[33%] snap-x snap-mandatory">
            {/* <div className="z-20 absolute flex justify-between items-center w-[45%]">
              <button className="" onClick={handleScrollLeft}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="" onClick={handleScrollRight}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div> */}
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="snap-center w-full min-w-[33%] max-h-[150px] overflow-hidden"
              >
                <img
                  src={project.media}
                  alt={`test-${index}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </section>
      <article className="w-full xl:w-6/12 flex flex-col gap-4 lg:gap-8">
        <h2 className="text-[2rem] lg:text-[4rem]">{project.name}</h2>
        <p className="leading-8 lg:leading-[3rem] lg:text-xl">{project.description}</p>
        <div className="flex flex-row gap-5 mb-4">
          {project.tags.map((tag, index) => (
            <div
              key={`${tag}-${index}`}
              className={`rounded-full flex items-center text-center ${
                tagColorPicker(tag).bgColor
              } ${tagColorPicker(tag).fontColor} p-2`}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            href={project.source_code_link}
            target="_blank"
            className="rounded-full border p-2 xl:p-3 hover:bg-slate-400 hover:text-yellow-50"
            type="link"
          >
            Source Code{" "}
            <FontAwesomeIcon className="ps-2 text-xl" icon={faArrowUpRightFromSquare} />
          </Link>
          <Link
            href={project.source_code_link}
            target="_blank"
            className="rounded-full border p-2 xl:p-3  hover:bg-slate-400 hover:text-yellow-50"
            type="link"
          >
            Live Link{" "}
            <FontAwesomeIcon className="ps-2 text-xl" icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
      </article>
    </main>
  );
};

export default page;
