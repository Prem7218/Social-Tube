// App.jsx
import React from "react";
import Header from "./component/1_header/Header";
import Body from "./component/2_body/Body"
import appStore from "./utils/1_store/appStore"
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainBody from "./component/2_body/maincontainer/MainBody";
import Watch from "./component/2_body/Watch";
import VideoSuggestions from "./component/2_body/searchsuggest/VideoSuggestions";

const isMenuOpen = appStore.getState().app.isMenuOpen;
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: 
        <div className={`main-body-container ${isMenuOpen ? "w-4/5" : "w-full"}`}>
          <MainBody />
        </div>,
    },
    {
      path: "/watch",
      element: <Watch />
    },
    {
      path: "/searchSuggestion&v=value",
      element: <VideoSuggestions />
    }
  ]
}])

function App() {
  return (
    <Provider store={appStore}>
      <div className="app-container">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;