// to list out the blogs that only belongs to the user. 
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blog from './Blog';

const UserBlogs = () => {
  // console.log('userBlogs component has been triggered.');
  const id = localStorage.getItem('userId');
  const [blogs,setBlogs]= useState();
  const [user, setUser]=useState();
  // console.log('user id of the user logged in is ', id);
  const sendRequest = async ()=>{ 
    const res = await axios.get(`https://blogapp-backend-694a.onrender.com/api/blogs/user/${id}`).catch(err=>console.log(err));
    const data = await res.data;
    return data;
    
  }
  useEffect(()=>{
    sendRequest().then((data)=>{
      setBlogs(data.blogs.blogs);
      setUser(data.blogs.name);
    })
  },[]);

    
  return (
    <div>
      {blogs && blogs.map((blog,index)=>
      <Blog  
      isUser = {true}
       title={blog.title} 
       image={blog.image} 
       user={blog.user} 
       description={blog.description}  
       key={index} 
       blogId = {blog._id}
       name={user}
      
      />
     )}
     </div>
  )
}

export default UserBlogs
