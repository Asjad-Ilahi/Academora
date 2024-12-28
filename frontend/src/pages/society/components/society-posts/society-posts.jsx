import React from 'react';
import './society-posts.css';
import Post from '../../../../components/posts/post';

export default function SocietyPosts() {

  return (
    <section className="societyPosts">
      <h2>Society <span className="highlight">Posts</span></h2>
      <Post />
    </section>
  );
}

