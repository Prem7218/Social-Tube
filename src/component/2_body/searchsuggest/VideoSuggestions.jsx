import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SUGGEST_DATAS, SUGGEST_SEARCH } from "../../../utils/youtube_SVG/tab_and_svg";
import { useParams } from "react-router-dom";
import { suggestData } from "../../../utils/2_slice/suggestSlice";

const VideoSuggestions = () => {
  const MainsuggestData = useSelector((store) => store.suggestS);
  const { value } = useParams();
  const paramData = decodeURIComponent(value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const mainData = await fetch(SUGGEST_SEARCH + paramData + SUGGEST_DATAS);
        const resp = await mainData.json();
        dispatch(suggestData(resp.items));
      } catch (e) {
        console.error("Error fetching suggestions: ", e);
      }
    };

    fetchSuggestions();
  }, [dispatch, paramData]);

  if (!MainsuggestData || MainsuggestData.length === 0) {
    return <p className="text-center text-gray-500">No suggestions found. Try searching for another topic!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Search Results for "{paramData}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MainsuggestData.map((item) => {
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
              className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={medium.url}
                  alt={title}
                />
              </a>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 truncate group-hover:text-red-600">
                  {title}
                </h3>
                <p className="text-xs text-gray-500 truncate">{channelTitle}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(publishTime).toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoSuggestions;
