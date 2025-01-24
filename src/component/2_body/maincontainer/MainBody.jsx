// MainBody.jsx
import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "../video/VideoContainer";

const MainBody = () => {
  return (
    <div className="main-body">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainBody;