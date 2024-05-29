import projects from "../Projects.json";
import tagColorPicker from "../util/helperfunctions";
import HoverReadMore from "./HoverReadMore";

const AllProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-8 gap-5">
      {projects.map((project, index) => (
        <HoverReadMore key={project.name} link={`/projects/${[project._id]}`}>
          <div className="flex flex-col my-7 md:my-0 gap-5">
            <img
              src={project.media}
              alt={project.name}
              className="w-full h-auto md:h-[200px] object-cover"
            />
            <div className="flex flex-col gap-6">
              <h4 className="text-2xl lg:text-3xl font-semibold">{project.name}</h4>
              <p className="line-clamp-3 lg:text-xl leading-6">{project.description}</p>
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
