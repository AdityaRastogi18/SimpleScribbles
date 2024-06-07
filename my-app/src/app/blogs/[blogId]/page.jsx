"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../SampleBlogs.json";
import { tagColorPicker } from "@/app/util/helperfunctions";
import {
  faMessage,
  faPaperPlane,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "@/app/Components/Drawer";
import { useEffect, useRef, useState } from "react";
import CommentList from "@/app/Components/CommentList";
import Comments from "../../SampleComments.json";
import dynamic from "next/dynamic";
import ShareButton from "@/app/Components/ShareButton";

const LikedBlog = dynamic(() => import("../../Components/LikedBlog"), {
  ssr: false,
});

const Page = ({ params }) => {
  const { blogId } = params;

  const inputRef = useRef(null);
  const article = data.find((post) => post._id == blogId);

  const [commentVal, setCommentVal] = useState("");
  const [replyingTo, setReplyingTo] = useState("");

  const handleComment = (e) => {
    setCommentVal(e.target.value);
  };

  useEffect(() => {
    if (replyingTo) {
      setCommentVal(`@${replyingTo} `);
      inputRef.current.focus();
    }
  }, [replyingTo]);

  return (
    <main className="mt-3 pt-5">
      <img
        src={article.media}
        alt={article.title}
        className="w-full h-auto md:h-[400px] object-cover"
      />
      <div className="flex flex-col gap-6 pt-5">
        <section className="flex items-center justify-between">
          <div className="md:w-2/3">
            <h2 className="text-3xl pb-4 text-black dark:text-teal-300">
              {article.title}
            </h2>
            <section className="flex gap-4 items-center">
              <p className="text-sm text-slate-500 dark:text-teal-600">
                {article.date}
              </p>
              &#x2022;
              <p className="text-sm text-slate-400">{article.author}</p>
            </section>
          </div>
          <ShareButton url={`http://localhost:3000/blogs/${blogId}`} />
        </section>
        <p>{article.content}</p>
        <div className="flex flex-row gap-5 mb-4">
          {article.tags.map((tag, index) => (
            <div
              key={tag + index}
              className={`rounded-full flex items-center text-center ${
                tagColorPicker(tag).bgColor
              } ${tagColorPicker(tag).fontColor} p-2`}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <section className="flex flex-row gap-4 lg:gap-8 py-5">
        <LikedBlog blogId={blogId} />
        <Drawer
          headerTitle={"Comment Section"}
          toggleBtn={
            <span className="dark:hover:text-teal-300 hover:text-slate-600 text-xl lg:text-2xl">
              {Comments?.length} <FontAwesomeIcon icon={faMessage} />
            </span>
          }
        >
          <div className="flex flex-col w-full h-full justify-between">
            <div className="h-full overflow-scroll">
              <CommentList setReplyingTo={setReplyingTo} />
            </div>
            <div className="relative my-[0.1rem] shadow-sm w-full ">
              <input
                type="text"
                id="comment-input"
                ref={inputRef}
                className={`block p-3 w-full rounded-md border border-black dark:border-0 py-1.5 pl-4 pr-20 text-gray-900 placeholder:text-gray-400 h-[45px] sm:text-sm sm:leading-10`}
                placeholder="@Comment"
                value={commentVal}
                onChange={handleComment}
              />
              <div className="absolute inset-y-0 right-0 flex items-center z-2 rounded-md">
                <button
                  className="text-black hover:text-white dark:text-black bg-slate-500 dark:bg-teal-300 p-2 px-3 mr-2 rounded-full"
                  aria-label="Send comment"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </Drawer>
      </section>
    </main>
  );
};

export default Page;
