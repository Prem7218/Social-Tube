// Shimmer.js
import React from "react";
import { useSelector } from "react-redux";

const Shimmer = () => {
    const cards = [];
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    // Create 12 shimmer cards
    for (let i = 0; i <= 11; i++) {
        cards.push(
            <div 
                key={i} 
                className="bg-white my-2 shadow-lg w-[95%] rounded-lg transform transition duration-300 hover:rounded-none hover:scale-105 hover:shadow-2xl hover:shadow-slate-600 h-[300px]"
            >
                {/* Placeholder for Restaurant Image */}
                <div className="overflow-hidden">
                    <div className="shimmer-image h-48 bg-gray-300 animate-pulse hover:rounded-none rounded-lg mb-4"></div> {/* Increased height for image */}
                </div>
                
                {/* Placeholder for Restaurant Title */}
                <div className="p-4 text-left font-bold text-gray-800 text-lg transition duration-300">
                    <div className="shimmer-text bg-gray-300 h-6 rounded mb-3 animate-pulse w-3/4 "></div> {/* Increased margin */}
                </div>

                {/* Placeholder for Restaurant Description */}
                <div className="py-1 text-gray-600 text-sm">
                    <div className="shimmer-text bg-gray-300 h-4 rounded mb-3 animate-pulse w-2/4 ml-[5%]"></div> {/* Increased margin */}
                </div>

                {/* Placeholder for Ratings and Time Info
                <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600 font-medium">
                    <div className="shimmer-text bg-gray-300 h-4 rounded animate-pulse w-1/4"></div>
                    <div className="shimmer-text bg-gray-300 h-4 rounded animate-pulse w-1/4"></div>
                </div> */}
            </div>
        );
    }

    return (
        <div className={`video-container grid gap-2 mx-auto ${
        isMenuOpen ? "grid-cols-3" : "grid-cols-4"
      }`} >
            {cards}
        </div>
    );
};

export default Shimmer;
