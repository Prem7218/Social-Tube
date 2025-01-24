import React from 'react';
import { useSelector } from 'react-redux';

const VideoSuggestions = () => {

  const suggestData = useSelector((store) => store.suggestS); 

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {suggestData.items.map((item) => {
        const {
          id: { videoId },
          snippet: {
            title,
            channelTitle,
            thumbnails: { medium },
            publishTime,
          },
        } = item;

        return (
          <div
            key={videoId}
            className="border rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-52 object-cover"
                src={medium.url}
                alt={title}
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg font-bold truncate">{title}</h3>
              <p className="text-sm text-gray-600">{channelTitle}</p>
              <p className="text-sm text-gray-500">{new Date(publishTime).toDateString()}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoSuggestions;
