import React, { useEffect } from "react";
import { appLogo, hamBurger, profile } from "../../utils/header_image/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/2_slice/appSlice";
import { SUGGETION_URL } from "../../utils/youtube_SVG/tab_and_svg";
import { cacheResults } from "../../utils/2_slice/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {

  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  const dispatch = useDispatch();
  const suggestionData = useSelector((store) => store.sSlice);

  const handleClick = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    
    const handleSuggestion = async () => {
      try {
        const suggestData =await fetch(SUGGETION_URL + searchQuery);
        const suggestJson = await suggestData.json();
        setSearchData(suggestJson[1]);
        dispatch(cacheResults({
          [searchQuery]: suggestJson[1],
        }));
      } catch(e) {
        console.log("\n\t [*] Error is : ", e);
      }
    }

    const timeOutId = setTimeout(() => {
      if(suggestionData[searchQuery]) {
        setSearchData(suggestionData[searchQuery]);
      } else {
        handleSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timeOutId);
    }

  },[searchQuery, dispatch, suggestionData]);

  return (
    <div className="grid grid-flow-col bg-gray-100 p-2 justify-between items-center">
      <div className="flex items-center ml-2">
        <img
          onClick={() => handleClick()}
          className="lg:h-12 md:h-10 sm:h-8 rounded-lg"
          src={hamBurger}
          alt="SideBar-Logo"
        />
        <img
          className="ml-[5%] px-2 lg:h-12 md:h-10 sm:h-8 rounded-lg"
          src={appLogo}
          alt="App-Logo"
        />
      </div>

      <div>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className="lg:w-[40rem] md:w-[30rem] rounded-l-full p-2"
          type="text"
          placeholder="Search"
        />
        <Link to={`/searchSuggestion/${encodeURIComponent(searchQuery)}`}>
          <button 
            className="lg:w-16 md:w-14 rounded-r-full bg-gray-300 p-2">
            <b>🔍</b>
          </button>
        </Link>

        {searchQuery ? <div className="z-10 fixed bg-white w-96 flex flex-col justify-center lg:w-[40rem] md:w-[30rem] rounded-lg p-3 mt-2 hover:shadow-lg">
          {
            searchData.map((data, index) => {
              return (
                <Link key={index} to={`/searchSuggestion/${encodeURIComponent(data)}`}>
                  <button className="flex w-full my-2 hover:bg-gray-100 hover:cursor-grab p-2 rounded-lg">
                    🔍 {data}
                  </button>
                </Link>
              );
            })
          }
        </div> : ""}
      </div>

      <div>
        <img className="lg:h-12 md:h-10 sm:h-8 rounded-full" src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Header;
