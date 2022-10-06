import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import blogData from '../../data/BlogData';

const BlogPost = () => {

  const navigate = useNavigate();

  const returnToBlog = () => {
    navigate('/blog'); // navigate(-1) 'solo va hacia atrás'
  }

  const { slug } = useParams();
  const blogPost = blogData.find(post => post.slug === slug)

  return (
    <>
      <h2>{blogPost.title}</h2>
      <button onClick={returnToBlog} >Volver al Blog</button>
      <p>{blogPost.author}</p>
      <p>{blogPost.content}</p>
    </>
  );
}

export default BlogPost;
