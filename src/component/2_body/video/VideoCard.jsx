import React from "react";

const VideoCard = ({ video, isPromote }) => {
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div
      className={`video-card w-[95%] md:w-[90%] my-2 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 ${
        isPromote ? "hover:shadow-red-400" : "hover:shadow-slate-600"
      } p-2`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className={`video-thumbnail rounded-t-lg lg:w-full md:w-[16rem] lg:h-44 md:h-36 object-cover`}
      />

      {/* Video Info */}
      <div className="video-info p-3">
        {isPromote && (
          <div className="absolute top-[76%] left-[32%] promote-badge text-white bg-red-500 px-2 py-1 rounded-full text-xs font-bold inline-block mb-2">
            Promoted
          </div>
        )}
        <h3 className="video-title text-lg font-semibold truncate text-gray-800 hover:text-blue-600 cursor-pointer">
          {title}
        </h3>
        <p className="video-channel text-sm text-gray-500 mt-1">
          {channelTitle}
        </p>
        <p className="video-stats text-sm text-gray-600 mt-2">
          <span className="font-medium">
            {parseInt(statistics.viewCount).toLocaleString()}
          </span>{" "}
          views
        </p>
      </div>
    </div>
  );
};

export const PromotionAd = ({ video }) => {
  return (
    <div className="flex justify-center">
      <VideoCard video={video} isPromote={true} />
    </div>
  );
};

export default VideoCard;
