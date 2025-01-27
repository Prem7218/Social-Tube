import React from "react";

const VideoCardSuggest = ({ videoId, title, channelTitle, thumbnail, publishTime }) => {
  return (
    <div key={videoId} className="flex mb-4 text-black bg-gray-200 rounded-lg p-2 transition-all">
      {/* Thumbnail */}
      <div>
        <img
          className="video-card my-2 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105"
          src={thumbnail}
          alt={title}
        />
      </div>
      {/* Content */}
      <div className="ml-4 flex-1">
        <h1 className="block text-wrap font-bold text-black hover:text-red-400 truncate">
          {title}
        </h1>
        <p className="text-sm text-gray-400 truncate">{channelTitle}</p>
        <p className="text-xs text-gray-500">
          {new Date(publishTime).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default VideoCardSuggest;
