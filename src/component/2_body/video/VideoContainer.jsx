import React from "react";
import VideoCard, { PromotionAd } from "./VideoCard";
import useFetchVideoData from "../../../hooks/useFetchVideoData";
import { useSelector } from "react-redux";
import Shimmer from "../../../Shimmer";
import { Link } from "react-router-dom";
import "../../../App.css";

const VideoContainer = () => {
  const videoData = useFetchVideoData();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const video = {
    id: "250PpepPRCw",
    snippet: {
      thumbnails: {
        medium: {
          url: "https://i.ytimg.com/vi/250PpepPRCw/mqdefault.jpg",
        },
      },
      channelTitle: "CodeWheelr",
      title: "React JS Course for Beginners",
    },
    statistics: {
      viewCount: "151",
    },
  }

  return (videoData.length === 0) ? <div className="mx-5"><Shimmer /></div> : (
    <div
      className={`scrol video-container overflow-y-auto h-[600px] grid gap-2 mx-5 ${
        isMenuOpen ? "grid-cols-3" : "grid-cols-4"
      }`}
    > {/* https://www.youtube.com/@CodeWheelr */}
      <Link key={video.id} to={`/`}><PromotionAd video={video} /></Link>
      {videoData.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard video={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
