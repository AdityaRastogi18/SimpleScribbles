import { tagColorPicker } from "../util/helperfunctions";
import HoverReadMore from "./HoverReadMore";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const AllProjects = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-8 gap-x-6 gap-y-10">
      {data.map((project, index) => (
        <HoverReadMore
          key={project.name}
          link={`/projects/${[project._id]}`}
          icon={faLink}
          text={"View Full Project"}
        >
          <div className="flex flex-col my-7 md:my-0 gap-5">
            <img
              src={project.media[0]}
              alt={project.name}
              className="w-full h-auto md:h-[200px] object-cover"
            />
            <div className="flex flex-col gap-6">
              <h4 className="text-2xl lg:text-3xl font-semibold text-black dark:text-teal-300">
                {project.name}
              </h4>
              <p className="line-clamp-2 lg:text-xl leading-6">
                {project.description}
              </p>
              <div className="flex flex-row gap-5">
                {project.tags.map((tag, index) => (
                  <div
                    key={`${tag}-${index}`}
                    className={`rounded-full flex items-center justify-center p-2 text-sm ${
                      tagColorPicker(tag).bgColor
                    } ${tagColorPicker(tag).fontColor}`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </HoverReadMore>
      ))}
    </div>
  );
};

export default AllProjects;

// {
//   "name": "Xflix",
//   "description": "A video sharing platform which will host videos for the world to watch. It also feature uploading new videos by using external video links (eg: Youtube) and displaying video fetched from the link.",
//   "tags": [
//     "React.js", "Bootstrap"
//   ],
//   "media": ["/images/Xflix/Xflix-1.png", "/images/Xflix/Xflix-2.png", "/images/Xflix/Xflix-3.png"],
//   "source_code_link": "https://github.com/AdityaRastogi18/Tic-tac-toe",
//   "live_link": "",
//   "_id": "xflix"
// },
