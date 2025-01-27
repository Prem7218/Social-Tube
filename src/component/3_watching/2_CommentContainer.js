import React from 'react'
import RenderComment from './2a_RenderComment';

const CommentContainer = ({ commentData, closeForLiveChat }) => {

    return (
        <div className='overflow-y-auto'>
            {/* Render the first comment, and its replies */}
            {commentData.map((comment, index) => (
                <RenderComment key={index} comment={comment} closeForLiveChat={closeForLiveChat} />
            ))}
        </div>
    );
}

export default CommentContainer;