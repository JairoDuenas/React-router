import React from 'react';
import { Link } from 'react-router-dom';

const BlogLink = ({post}) => {
  return (
    <div>
      <li>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </li>
    </div>
  );
}

export default BlogLink;
