import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const LikedBlog = ({ blogId }) => {
  let likedPost = localStorage.getItem("likedPost") ?? [];
  likedPost = JSON.parse(likedPost);
  const [liked, setLiked] = useState(!!likedPost?.find((id) => id === blogId));

  const handleLike = () => {
    setLiked(!liked);
    if (!!likedPost?.find((id) => id == blogId)) {
      likedPost?.splice(
        likedPost.indexOf(likedPost.find((id) => id == blogId)),
        1
      );
      localStorage.setItem("likedPost", JSON.stringify(likedPost));
    } else {
      likedPost.push(blogId);
      localStorage.setItem("likedPost", JSON.stringify(likedPost));
    }
  };

  return (
    <button onClick={handleLike}>
      <span
        className={`hover:text-slate-600 dark:hover:text-teal-300 text-xl lg:text-2xl ${
          liked && "text-slate-600 dark:text-teal-300"
        }`}
      >
        {liked ? 8 : 7} <FontAwesomeIcon icon={faThumbsUp} />
      </span>
    </button>
  );
};

export default LikedBlog;
