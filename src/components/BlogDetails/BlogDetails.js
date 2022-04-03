// import React, { useContext} from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { BlogContext } from "../../App";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
// import { BsChevronLeft } from "react-icons/bs";

const BlogDetails = () => {
  // const param = useParams()
  // console.log(param.id);
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
//   const [blogs] = useContext(BlogContext);

const [blog, setBlog] = useState({});
console.log(blog);
useEffect(()=>{
  fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
  .then(res=>res.json())
  .then(data => setBlog(data))
},[id])

//   const blog = blogs.find((blog) => blog._id === id);

  return (
    <>
      <div className='header-gradient' />
    
      <div>
       <button className='back-button' onClick={() => navigate('/')}> 
        <FontAwesomeIcon icon={faAngleLeft}/>
           <p>Back</p>
        </button>
  
         <div className='blog-details'>
           <div className='blog-image'>
             <img src={blog?.imageURL} alt='' />
           </div>
           <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>  
      </div>
    </>
  );
};

export default BlogDetails;