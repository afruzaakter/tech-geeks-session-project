import React from 'react';
import './Blog.css'
import Indicator from "../../Assets/Image/indicator.svg";
import { useNavigate } from 'react-router-dom';

const Blog = (props) => {
    const {imageURL,title,admin,blog: blogBody, _id} = props.blog;
    const navigate = useNavigate();
    
    return (
        <div className='blog-container'>
            {/* <button onClick={() => navigate("/login") }>This is login page</button> */}
            <div className='blog-image-container'>
               <img src={imageURL} alt="" />
            </div>
            <div className='blog-content'>
                <div>
                <h1>{title}</h1>
                <div className='author-name'>
                    <img src={Indicator} alt="" />
                    <p>{admin}</p>
                </div>
                </div>
            
            <p className='blog-preview'>
                {
                    blogBody.length < 400 ? blogBody.length : blogBody.slice(0,400)
                }
                <span className='read-more' onClick={() => navigate(`/blog/${_id}`)}> 
                    ...Read More
                </span>
            </p>
        </div>
        </div>
    );
};

export default Blog;