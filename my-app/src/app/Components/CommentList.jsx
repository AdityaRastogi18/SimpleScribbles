"use client";

import React, { useState } from "react";
import Comments from "../SampleComments.json";

const Comment = ({ name, profilePic, comment, replies, setReplyingTo }) => {
  const [showReplies, setShowReplies] = useState(false);
  const handleReplies = () => {
    setShowReplies(!showReplies);
  };

  const checkReplyCount = (replies) => {
    return replies.length > 1 ? "replies" : "reply";
  };

  return (
    <div className="py-2">
      <div className="flex gap-3 items-start">
        <img
          src={profilePic}
          alt="avatar"
          className="w-[40px] h-[40px] rounded-full"
        />
        <div className="w-full">
          <h3>{name}</h3>
          <p>{comment}</p>

          <button className="py-2 text-slate-500" onClick={() => setReplyingTo(name)}>Reply</button>
          <br />
          {showReplies && (
            <>
              {replies.map((reply, index) => (
                <Comment key={index} {...reply} setReplyingTo={setReplyingTo}/>
              ))}
            </>
          )}
          {replies.length > 0 && (
            <button
              onClick={() => handleReplies()}
              className="text-center w-full text-slate-600 dark:text-slate-400 text-sm pb-2 dark:opacity-75"
            >
              {showReplies
                ? `Hide ${checkReplyCount(replies)}`
                : `View ${replies.length} more ${checkReplyCount(replies)}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CommentList = ({setReplyingTo}) => {
  return (
    <div className="comment-list p-4">
      {Comments.map((comment, index) => (
        <React.Fragment key={index}>
          <Comment {...comment} setReplyingTo={setReplyingTo}/>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CommentList;
