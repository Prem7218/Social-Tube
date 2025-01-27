import React, { useEffect, useRef } from 'react';
import RenderComment from './2a_RenderComment';

const CommentContainer = ({ commentData, closeForLiveChat }) => {
  const scrollRef = useRef(null);

  // Function to scroll to the bottom of the container
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // Automatically scroll to the bottom when `commentData` changes
  useEffect(() => {
    scrollToBottom();
  }, [commentData]);

  return (
    <div
      ref={scrollRef}
      className="overflow-y-auto rounded-lg shadow-inner"
    >
      {/* Render each comment along with its replies */}
      {commentData.map((comment, index) => (
        <RenderComment
          key={comment.id || index}
          comment={comment}
          closeForLiveChat={closeForLiveChat}
        />
      ))}
    </div>
  );
};

export default CommentContainer;
