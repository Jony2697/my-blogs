import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handleBookMark,handleMarkAsRead }) => {
    


    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <div className="author flex items-center justify-around">
                        <h2>Author:{blog.author}</h2>
                        <img src={blog.author_img} alt="" width={40} />
                        <button className='hover:bg-gray-300 p-1 rounded-2xl' onClick={()=>handleBookMark(blog)}><FaBookmark size={25}/></button>
                    </div>
                    <p className='text-blue-950'>Posted Date:{blog.posted_date}</p>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="flex">
                        {
                            blog.hashtags.map((has)=><p key={has}>{has}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)}>Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;