"use client";

const RecentPosts = ({ author, date, title, tags, media, content }) => {
  return (
    <>
      <div className="grid grid-rows-2 lg:grid-flow-col gap-5 mt-5">
        <div className="row-span-2 col-span-1 flex xs:flex-col lg:flex-col gap-5">
          <img src={media} alt={title} className="w-full h-auto" />
          <div className="flex flex-col gap-6">
            <p>{date}</p>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col md:flex-row  gap-5 h-full">
          <img
            src={media}
            alt={title}
            height="auto"
            className="w-full md:w-[250px]"
          />
          <div className="flex flex-col gap-6">
            <p>{date}</p>
            <h4>{title}</h4>
            <p className="line-clamp-4">{content}</p>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col md:flex-row  gap-5 h-full">
          <img
            src={media}
            alt={title}
            height="auto"
            className="w-full md:w-[250px]"
          />
          <div className="flex flex-col gap-6">
            <p>{date}</p>
            <h4>{title}</h4>
            <p className="line-clamp-4">{content}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex xs:flex-col gap-5">
        <img src={media} alt={title} className="w-full h-auto md:h-[200px] object-cover" />
        <div className="flex flex-col gap-6">
          <p>{date}</p>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
