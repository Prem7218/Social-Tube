import React, { useState } from "react";
import { profile } from "../../utils/header_image/image";

const RenderComment = ({ comment, closeForLiveChat }) => {

    const [openMessage, setOpenMessage] = useState(false);

    const handleMessageBox = () => {
        setOpenMessage(!openMessage);
    }

    return (
        <div className='scrol bg-gray-100 outline-2 p-2 overflow-x-scroll rounded-lg mt-1'>
            <div className='flex'>
                <img className='h-10 w-10 rounded-full' alt='Profile' src={`${profile}`} />
                <p className='ml-[2%] mt-[.5%] font-bold'>Name: {comment.name}</p>
            </div>
            <div className='ml-[6%] text-wrap'>
                <p>{closeForLiveChat ? "API-Polling: " : "Comment: "} {comment.comment}</p>
            </div>

            {closeForLiveChat || comment.replies.length === 0 ? "" : 
                <button 
                    className={`${openMessage ? "bg-red-200" : "bg-blue-200"}`}
                    onClick={() => handleMessageBox()}>{openMessage ? "Close" : "Open"}
                </button>
            }

            <div className={`${openMessage ? "block" : "hidden"}`}>
                {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-6 mt-4">
                        <button className="bg-gray-300 rounded-full px-4 py-1 text-sm">
                            Reply
                        </button>
                        <div className="mt-3">
                            {comment.replies.map((reply, index) => (
                                <RenderComment key={index} comment={reply} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};    

export default RenderComment;