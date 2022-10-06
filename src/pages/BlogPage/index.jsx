import React from 'react';
import { Outlet } from 'react-router-dom';
import blogData from '../../data/BlogData';
import BlogLink from '../BlogLink';

const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogData.map(post => (
          <BlogLink key={post.slug} post={post}/>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default BlogPage;
