import React from 'react'
import { profile } from '../../utils/header_image/image'

const CommentContainer = () => {

    const commentData = [
        {   id: 1,
            name: "1-John Doe",
            comment: "1-This is top-level comment",
            replies: [
                {
                    id: "1A",
                    name: "A-Jane Doe",
                    comment: "A-This is a reply1 to the top-level comment",
                    replies: [
                        {
                            id: "1B",
                            name: "B-John Doe",
                            comment: "B-This is a reply2 to the reply1",
                            replies: [
                                {
                                    id: "1C",
                                    name: "C-Jane Doe",
                                    comment: "C-This is a reply to the reply2",
                                    replies: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "2-Jane Doe",
            comment: "2-This is top-level comment",
            replies: [
                {
                    id: "2A",
                    name: "A-John Doe",
                    comment: "A-This is a reply1 to the top-level comment",
                    replies: []
                }
            ]
        },
        {
            id: 3,
            name: "3-John Doe",
            comment: "3-This is top-level comment",
            replies: [
                {
                    id: "3A",
                    name: "A-Jane Doe",
                    comment: "A-This is a reply1 to the top-level comment",
                    replies: [
                        {
                            id: "3B",
                            name: "B-John Doe",
                            comment: "B-This is a reply2 to the reply1",
                            replies: []
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "4-Jane Doe",
            comment: "4-This is top-level comment",
            replies: []
        },
        {
            id: 5,
            name: "5-John Doe",
            comment: "5-This is top-level comment",
            replies: []
        },
        {
            id: 6,
            name: "6-Jane Doe",
            comment: "6-This is top-level comment",
            replies: []
        }
    ]

    const RenderComment = ({ comment }) => {
        return (
            <div className='bg-gray-100 outline-2 p-2'>
                <div className='flex'>
                    <img className='h-10 w-10 rounded-full' alt='Profile' src={`${profile}`} />
                    <p className='ml-[2%] mt-[.5%] font-bold'>Name: {comment.name}</p>
                </div>
                <div className='ml-[6%]'>
                    <p>Comment: {comment.comment}</p>
                </div>
    
                {/* Render replies if they exist */}
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
        );
    };    

    return (
        <div className='ml-10'>
            {/* Render the first comment, and its replies */}
            {commentData.map((comment, index) => (
                <RenderComment key={index} comment={comment} />
            ))}
        </div>
    );
}

export default CommentContainer;







/* 
    */