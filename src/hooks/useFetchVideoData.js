import { useEffect, useState } from "react";
import { API_URL } from "../utils/youtube_SVG/tab_and_svg";

const useFetchVideoData = () => {
  const [video, setVideo] = useState([]);

    useEffect(() => {
        handleVideos();
    }, []);

    const handleVideos = async () => {
        try {
            const data = await fetch("AIzaSyCDd5CMy4Zl-aC2Tz2x3EiYDt1AN2b52SA");
            const resp = await data.json();
            setVideo(resp.items);
        } catch (e) {
            console.log(e);
        }
    };

    return video;
};

export default useFetchVideoData;
