import React from 'react';
import blogData from '../../data/BlogData';
import BlogLink from '../BlogLink';

const BlogPage = () => {
  return (
    <div>
      <h1>BlogPage</h1>
      <ul>
        {blogData.map(post => (
          <BlogLink post={post}/>
        ))}
      </ul>
    </div>
  );
}

export default BlogPage;
