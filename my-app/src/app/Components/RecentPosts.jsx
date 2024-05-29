"use client";

import HoverReadMore from "./HoverReadMore";
import data from "../SampleBlogs.json";
import tagColorPicker from "../util/helperfunctions";

const RecentPosts = () => {
  return (
    <>
      <div className="grid grid-rows-2 xl:grid-flow-col gap-5 mb-4">
        <div className="row-span-2 col-span-1">
          <HoverReadMore link={`/blogs/${data[0]._id}`}>
            <div className="flex xs:flex-col xl:flex-col gap-5 p-3 px-0">
              <img
                src={data[0].media}
                alt={data[0].title}
                className="w-full h-auto"
              />
              <div className="flex flex-col gap-6">
                <p>{data[0].date}</p>
                <h4>{data[0].title}</h4>
                <p>{data[0].content}</p>
                <div className="flex flex-row gap-5">
                  {data[0].tags.map((tag, index) => (
                    <div
                      key={`${tag}-${index}`}
                      className={`rounded-full flex items-center text-center ${
                        tagColorPicker(tag).bgColor
                      } ${tagColorPicker(tag).fontColor} p-2 text-sm`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </HoverReadMore>
        </div>
        <div className="col-span-1 row-span-1">
          <HoverReadMore link={`/blogs/${data[1]._id}`}>
            <div className="flex flex-col md:flex-row  gap-5 h-full p-3 px-0">
              <img
                src={data[1].media}
                alt={data[1].title}
                height="auto"
                className="w-full md:w-[250px]"
              />
              <div className="flex flex-col gap-6">
                <p>{data[1].date}</p>
                <h4>{data[1].title}</h4>
                <p className="line-clamp-4">{data[1].content}</p>
                <div className="flex flex-row gap-5">
                  {data[1].tags.map((tag, index) => (
                    <div
                      key={`${tag}-${index}`}
                      className={`rounded-full flex items-center text-center ${
                        tagColorPicker(tag).bgColor
                      } ${tagColorPicker(tag).fontColor} p-2 text-sm`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </HoverReadMore>
        </div>
        <div className="col-span-1 row-span-1">
          <HoverReadMore link={`/blogs/${data[2]._id}`}>
            <div className="flex flex-col md:flex-row  gap-5 h-full p-3 px-0">
              <img
                src={data[2].media}
                alt={data[2].title}
                height="auto"
                className="w-full md:w-[250px]"
              />
              <div className="flex flex-col gap-6">
                <p>{data[2].date}</p>
                <h4>{data[2].title}</h4>
                <p className="line-clamp-4">{data[2].content}</p>
                <div className="flex flex-row gap-5">
                  {data[2].tags.map((tag, index) => (
                    <div
                      key={`${tag}-${index}`}
                      className={`rounded-full flex items-center text-center ${
                        tagColorPicker(tag).bgColor
                      } ${tagColorPicker(tag).fontColor} p-2 text-sm`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </HoverReadMore>
        </div>
      </div>
      <HoverReadMore link={`/blogs/${data[3]._id}`}>
        <div className=" flex xs:flex-col gap-5 p-3 px-0">
          <img
            src={data[3].media}
            alt={data[3].title}
            className="w-full h-auto md:h-[200px] object-cover"
          />
          <div className="flex flex-col gap-6">
            <p>{data[3].date}</p>
            <h4>{data[3].title}</h4>
            <p>{data[3].content}</p>
            <div className="flex flex-row gap-5">
              {data[3].tags.map((tag, index) => (
                <div
                  key={`${tag}-${index}`}
                  className={`rounded-full flex items-center text-center ${
                    tagColorPicker(tag).bgColor
                  } ${tagColorPicker(tag).fontColor} p-2 text-sm`}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </HoverReadMore>
    </>
  );
};

export default RecentPosts;
