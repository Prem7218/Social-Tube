import React, { useEffect, useState } from 'react'
import CommentContainer from './2_CommentContainer';
import { commentData, randomMessage, randomName } from '../../utils/data/data';
import "../../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../../utils/2_slice/chatSlice';

const LiveChat = ( { closeForLiveChat } ) => {

  const messageMe = useSelector((store) => store.chatingS.messages);
  const [messages, setMessages] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const message = setInterval(() => {
      dispatch(addMessages(
        {
          id: Math.random() * (10 - 5) + 10,
          name: randomName(),
          comment: randomMessage(),
          replies: []
        }
      ));
    }, Math.random() * (3000 - 2000) + 2000);

    return () => clearInterval(message);
  }, []);

  const handleMessage = (messages) => {
    dispatch(addMessages(
      {
        id: Math.random() * (15-14) + 10,
        name: "Prem R Mahajan",
        comment: messages,
        replies: []
      }
    ));
  }

  if(!messageMe) return [];
 
  return (
    <div>
      <div className="flex flex-col-reverse md:justify-between lg:justify-between p-4 rounded-lg shadow-md w-full mx-auto mt-4 lg:h-[32rem] md:h-[28rem] mb-5">
        {/* Messages Container */}
        <CommentContainer commentData={messageMe} closeForLiveChat={closeForLiveChat} />
      </div>
      {/* Message Input Section */}
      <div className="flex gap-4 justify-center mt-[3%] items-center">
        <label className="text-lg font-medium text-gray-700 lg:block md:hidden">Message:</label>
        <input
          onChange={(e) => setMessages(e.target.value)}
          id="messageInput"
          className="md:w-[70%] p-2 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          onClick={() => handleMessage(messages)}
        >
          Send
        </button>
      </div>
    </div>
  );  
}

export default LiveChat;