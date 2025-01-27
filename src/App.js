// App.jsx
import React from 'react';
import './index.css';
import Body from './component/2_body/Body';
import MainBody from './component/2_body/maincontainer/MainBody';
import Watch from './component/3_watching/1_Watch';
import VideoSuggestions from './component/2_body/searchsuggest/VideoSuggestions';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appStore from './utils/1_store/appStore';
import { Provider } from 'react-redux';
import Header from './component/1_header/Header';
import DemoMemoHook from './component/demo_Memo Hook/DemoMemoHook';
import Demo2 from './component/demo_Memo Hook/2_Demo';

  const isMenuOpen = appStore.getState().app.isMenuOpen;
  
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: 
            <>
              <div className="app-container">
                <Header />
              </div>
              <Body />
            </>,
        children:
        [
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
            path: "/searchSuggestion/:value",
            element: <VideoSuggestions />
          },
          {
            path: "/demo",
            element: 
              <>
                <DemoMemoHook/>
                <Demo2 />  
              </>
          }
        ]
      }
    ]
  )

  function App() {
    return (
      <Provider store={appStore}>
        <RouterProvider router={appRouter}>
        </RouterProvider>
      </Provider>
    );
  }

export default App;