
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login'
import AddBlog from './components/AddBlog'
import Blogs from './components/Blogs'
import BlogDetails from './components/BlogDetails'
import UserBlogs from './components/UserBlogs'
import { useSelector } from 'react-redux';


function App() {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  return (
    <div>
      <header>
      <Header/>
      </header>
      <main style={{ marginTop: '80px' }}>
      <Routes>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/blogs" element={<Blogs/>}/> 
        <Route path="/myBlogs/:id" element={<BlogDetails/>}/> 
        <Route path="/myBlogs" element={<UserBlogs/>}/>
        <Route path="/addBlog" element={<AddBlog/>}/> 
      </Routes>
      </main>
    </div>
  );
}

export default App;
