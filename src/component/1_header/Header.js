import React, { useEffect } from "react";
import { appLogo, hamBurger, profile } from "../../utils/header_image/image";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/2_slice/appSlice";
import { SUGGEST_DATAS, SUGGEST_SEARCH, SUGGETION_URL } from "../../utils/youtube_SVG/tab_and_svg";
import { cacheResults } from "../../utils/2_slice/searchSlice";
import { suggestData } from "../../utils/2_slice/suggestSlice";

const Header = () => {

  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  const dispatch = useDispatch();
  const suggestionData = useSelector((store) => store.sSlice);

  const handleClickSearch = async (data) => {
    try {
      const mainData = await fetch(SUGGEST_SEARCH + data + SUGGEST_DATAS);
      const resp = await mainData.json();
      console.log("DT: ", resp.items);
      dispatch(suggestData(resp.items));
    } catch(e) {
      console.log("E: ",e);
    }
  }

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
        <button 
          onClick={() => handleClickSearch(searchQuery)}
          className="lg:w-16 md:w-14 rounded-r-full bg-gray-300 p-2">
          <b>🔍</b>
        </button>

        {searchQuery ? <div className="z-10 fixed bg-white w-96 flex flex-col justify-center lg:w-[40rem] md:w-[30rem] rounded-lg p-3 mt-2 hover:shadow-lg">
          {
            searchData.map((data, index) => {
              return (
                  <div
                    onClick={() => handleClickSearch(data)}
                    key={index}
                    className="flex my-2 hover:bg-gray-50 hover:cursor-help p-2 rounded-lg">
                    🔍
                    <h1 className="ml-3">{data}</h1>
                  </div>
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
