import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SUGGEST_DATAS, SUGGEST_SEARCH } from "../../../utils/youtube_SVG/tab_and_svg";
import { Link, useParams } from "react-router-dom";
import { suggestData } from "../../../utils/2_slice/suggestSlice";
import VideoCardSuggest from "./VideoCard";
import { toggleMenu } from "../../../utils/2_slice/appSlice";

const VideoSuggestions = () => {
  const MainsuggestData = useSelector((store) => store.suggestS);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { value } = useParams();
  const paramData = decodeURIComponent(value);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!isMenuOpen) {
      dispatch(toggleMenu());
    }
  }, [dispatch, isMenuOpen]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const mainData = await fetch("https://cors-anywhere.herokuapp.com/" + SUGGEST_SEARCH + paramData + SUGGEST_DATAS);
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
    <div className="md:w-[80%] lg:w-full flex flex-col items-center">
      <div className="m-5 w-[90%]">
        <h2 className="text-2xl font-bold mb-6 text-black">
          Search Results for "<span className="text-red-400">{paramData}</span>"
        </h2>
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
            <Link 
            key={videoId}
            to={`/watch?v=${videoId}`}>
              <VideoCardSuggest
                key={videoId}
                videoId={videoId}
                title={title}
                channelTitle={channelTitle}
                thumbnail={medium.url}
                publishTime={publishTime}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );  
};

export default VideoSuggestions;
