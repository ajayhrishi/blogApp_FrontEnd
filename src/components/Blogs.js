// container of blogs
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Blog from './Blog'

const Blogs = () => {
  const [blogs,setBlogs]= useState();
  const [data, setData]=useState();
  const sendRequest = async ()=>{
    const res = await axios.get('http://127.0.0.1:5000/api/blogs').catch(err=>console.log(err));
    const data = await res.data;
    return data;
  }

  useEffect(()=>{
    sendRequest().then((data)=>setBlogs(data.blogs)).catch(err=>{console.log(err)});
  },[]);
  
  return (
    <div>
     {blogs && blogs.map((blog,index)=>{
     
      
     return <Blog 
      isUser = {localStorage.getItem('userId')===blog.user}
       title={blog.title} 
       image={blog.image} 
       user={blog.user} 
       description={blog.description}  
       key={index} 
       blogId = {blog._id}
       name={'Un Known'}/>
  })}
     </div>
  )
}

export default Blogs
