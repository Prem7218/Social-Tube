import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const Watch = () => {
  const [videoId] = useSearchParams();

  return (
    <div>
      <div>
        <iframe
          className="ml-5 w-[900px] h-[450px]"
          src={`https://www.youtube.com/embed/${videoId.get("v")}?autoplay=1`}
          title="Movie Trailer"
        ></iframe>
      </div>

      <div className="bg-slate-50">
        <h1 className="text-2xl font-bold ml-5 mt-5">Comments: </h1>
        <CommentContainer />
      </div>
    </div>
  );
};

export default Watch;
