import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data/BlogData';

const BlogPost = () => {
  const { slug } = useParams();
  const blogPost = blogData.find(post => post.slug === slug)

  return (
    <>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.author}</p>
      <p>{blogPost.content}</p>
    </>
  );
}

export default BlogPost;
