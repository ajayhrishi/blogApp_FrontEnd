// container of blogs
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'

const Blogs = () => {
  const [blogs,setBlogs]= useState();

  const sendRequest = async ()=>{
    const res = await axios.get('http://127.0.0.1:5000/api/blogs').catch(err=>console.log(err));
    const data = await res.data.blogs;
    return data;
  }

  useEffect(()=>{
    sendRequest().then((data)=>setBlogs(data));
  },[]);
  console.log(blogs);
  return (
    <div>
     {blogs && blogs.map((blog,index)=>
      <Blog/>
     )}
     </div>
  )
}

export default Blogs
