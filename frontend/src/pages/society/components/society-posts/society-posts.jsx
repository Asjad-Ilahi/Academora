import React from 'react';
import './society-posts.css';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function SocietyPosts() {
  const posts = [
    {
      id: 1,
      author: 'C3 & Azhar',
      content: "Who's excited for the upcoming events!",
      description: `This event is not just about looking forward, it's about celebrating the journey of preparation and the joy of coming together as a community.`,
      likes: 300,
      comments: 12,
      shares: 8,
      timeAgo: '1hr ago'
    },
    {
      id: 2,
      author: 'Ali',
      content: 'Trip on its way',
      description: 'A trip to the northern areas of Pakistan offers an unforgettable adventure...',
      image: '/travel-image.jpg',
      likes: 200,
      comments: 12,
      shares: 8,
      timeAgo: '6hr ago'
    }
  ];

  return (
    <section className="society-posts">
      <h2>Society <span className="highlight">Posts</span></h2>
      <div className="posts-container">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-author">{post.author}</div>
              <div className="post-time">{post.timeAgo}</div>
            </div>
            <h3 className="post-title">{post.content}</h3>
            <p className="post-description">{post.description}</p>
            {post.image && (
              <img src={post.image} alt="" className="post-image" />
            )}
            <div className="post-actions">
              <button className="action-button">
                <Heart size={18} />
                <span>{post.likes}</span>
              </button>
              <button className="action-button">
                <MessageCircle size={18} />
                <span>{post.comments}</span>
              </button>
              <button className="action-button">
                <Share2 size={18} />
                <span>{post.shares}</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

