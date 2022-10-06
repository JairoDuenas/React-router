import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import blogData from '../../data/BlogData';
import { useAuth } from '../../auth';

function BlogPost(){
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();
  const blogPost = blogData.find(post => post.slug === slug)
  
  const canDelete = auth.user?.isAdmin || blogPost.author === auth.user?.username;

  const returnToBlog = () => {
    navigate('/blog'); // navigate(-1) 'solo va hacia atrás'
  }

  return (
    <>
      <h2>{blogPost.title}</h2>
      <button onClick={returnToBlog} >Volver al Blog</button>
      <p>{blogPost.author}</p>
      <p>{blogPost.content}</p>
      {canDelete && (
        <button>Eliminar blogpost</button>
      )}
    </>
  );
}

export default BlogPost;
