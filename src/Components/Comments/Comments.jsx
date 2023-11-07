/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Authantication/AuthProviders";
import axios from "axios";
import toast from "react-hot-toast";

const Comments = ({ data, sethituseeffect, hituseeffect }) => {
    
    const { user } = useContext(AuthContext)
    const { _id, category } = data;
    const handlesubmit = (e) => {
        e.preventDefault()

        const givencomment = e.target.comment.value;
        const commentDetails = {
            commentedUser: user?.displayName,
            commentedUserEmail: user?.email,
            commentedUserImg: user?.photoURL,
            comment: givencomment,
            blogId: _id,
            category: category,
            commentTime: Date.parse(new Date())
        }
        console.log(commentDetails);
        axios.post('http://localhost:3000/api/v1/comments', commentDetails)
            .then(res => {
                toast.success('Successfully Commented!!')
                console.log(res.data);
                e.target.comment.value = ''
                sethituseeffect(hituseeffect + 1)

            })
    }
    return (
        <div>
            <div>
                <h2 className="text-lg font-bold text-center py-5">Comment your thought with free mind</h2>

                <form onSubmit={handlesubmit}>
                    <div className="flex justify-center items-center">
                        <textarea disabled={!user?.email} name="comment" className="textarea textarea-bordered w-[300px] sm:w-[500px] h-[150px] font-medium" placeholder={`${user?.email? 'Write your comment': 'Please, Log in first.......'}`} required></textarea>
                    </div>
                    <div className="text-center py-3">
                        <button disabled={!user?.email} className="btn btn-neutral bg-black font-bold text-sm">Send Comment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comments;