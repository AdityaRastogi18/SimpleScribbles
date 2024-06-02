"use client";
import data from "../../SampleBlogs.json";
import tagColorPicker from "@/app/util/helperfunctions";

const page = ({params}) => {
  const { blogId } = params;
  console.log(blogId);
  const article = data.find((post) => post._id == blogId);
  console.log("article", article);
  return (
    <main className="mt-3 pt-5">
      <img
        src={article.media}
        alt={article.title}
        className="w-full h-auto md:h-[400px] object-cover"
      />
      <div className="flex flex-col gap-6 pt-5">
        <h2 className="text-3xl text-black dark:text-teal-300">{article.title}</h2>
        <section className="">
          <p className="text-sm text-slate-500 dark:text-teal-600">{article.date}</p>
          <p className="text-sm text-slate-400">{article.author}</p>
        </section>
        <p className="">{article.content}</p>
        <div className="flex flex-row gap-5 mb-4">
          {article.tags.map((tag, index) => (
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
      </div>
    </main>
  );
};

export default page;
