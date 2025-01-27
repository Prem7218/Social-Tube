import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./2_CommentContainer";
import LiveChat from "./3_LiveChat";
import { useSelector } from "react-redux";
import { commentData } from '../../utils/data/data';

const Watch = () => {
  const [videoId] = useSearchParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`md:ml-[2%] md:w-[85%] lg:w-full p-4 ${isMenuOpen ? "" : "ml-5"}`}>
      {/* Responsive Container */}
      
      {/* Video Section */}
      <div className={`lg:w-[65%]`}>
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId.get("v")}?autoplay=1`}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>
      </div>

      {/* Live Chat Section */}
      <div className={`h-[28rem] lg:absolute lg:mt-0 md:mt-5 ${isMenuOpen ? "lg:w-[27.5%]" : "lg:w-[31%]"} right-[1%] top-20`}>
        <div className={`p-3 rounded-lg shadow-md`}>
          <h2 className="text-xl mb-4 text-gray-700 font-bold">Live Chat</h2>
          <LiveChat closeForLiveChat={true} />
        </div>
      </div>

      {/* Comments Section */}
      <div className="md:mt-[18%] lg:mt-[1%] lg:w-[65%] bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Comments</h1>
        <CommentContainer commentData={commentData} />
      </div>
    </div>
  );
};

export default Watch;
