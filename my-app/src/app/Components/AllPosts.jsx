import { faEye } from "@fortawesome/free-solid-svg-icons";
import data from "../SampleBlogs.json";
import tagColorPicker from "../util/helperfunctions";
import HoverReadMore from "./HoverReadMore";

const AllPosts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 mt-5">
      {data.map((post, index) => (
        <div className="">
          <HoverReadMore link={`/blogs/${[post._id]}`} icon={faEye} text={"Read More"}>
            <div className="flex xs:flex-col gap-5">
              <img
                src={post.media}
                alt={post.title}
                className="w-full h-auto md:h-[200px] object-cover"
              />
              <div className="flex flex-col gap-6">
                <p className="text-slate-500 dark:text-teal-600">{post.date}</p>
                <h4 className="text-xl font-bold text-black dark:text-teal-300">{post.title}</h4>
                <p className="line-clamp-3">{post.content}</p>
                <div className="flex flex-row gap-5">
                  {post.tags.map((tag, index) => (
                    <div
                      key={`${tag}-${index}`}
                      className={`rounded-full flex items-center text-center p-2 text-sm ${tagColorPicker(tag).bgColor} ${tagColorPicker(tag).fontColor}`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </HoverReadMore>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
