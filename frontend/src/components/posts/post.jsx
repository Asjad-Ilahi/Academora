import React, { useState } from "react";
import { MoreVertical, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import "./Post.css";
import Comment from "../Comments/comments"; // Import updated Comment component

export default function PostComponent() {
  const [menuVisible, setMenuVisible] = useState({});
  const [likedPosts, setLikedPosts] = useState({});
  const [expandedPosts, setExpandedPosts] = useState({});
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      id: 1,
      author: "C3 & Azhar",
      authorImage: "/author-image.jpg",
      content: "Who's excited for the upcoming events!",
      description:
        "This event is not just about looking forward; it's about celebrating the journey of preparation and the joy of coming together as a community...",
      date: "Jan 27, 2025",
      image: "/travel-image.jpg",
      video: null,
    },
    {
      id: 2,
      author: "Jane Doe",
      authorImage: "/author-image2.jpg",
      content: "Nature is the best escape.",
      description: "A glimpse into the serene beauty of untouched landscapes...",
      date: "Jan 26, 2025",
      image: null,
      video: "/nature-video.mp4",
    },
  ];

  const toggleMenu = (postId) => {
    setMenuVisible((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const toggleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          {/* Post Header */}
          <div className="post-header">
            <div className="post-author-info">
              <img
                src={post.authorImage}
                alt={`${post.author}'s profile`}
                className="author-image"
              />
              <div className="post-author">{post.author}</div>
            </div>
            <div className="post-menu">
              <span className="post-date">{post.date}</span>
              <MoreVertical
                className="menu-icon"
                onClick={() => toggleMenu(post.id)}
                aria-label="More options"
              />
              {menuVisible[post.id] && (
                <div className="menu-dropdown">
                  <div className="menu-option">View Details</div>
                  <div className="menu-option">Report</div>
                  <div className="menu-option">Share</div>
                </div>
              )}
            </div>
          </div>

          {/* Post Content */}
          <div className="post-inner-container">
            <h3 className="post-title">{post.content}</h3>
            <p className="post-description">
              {expandedPosts[post.id] ? post.description : `${post.description.slice(0, 150)}...`}
            </p>
            <button
              onClick={() => toggleExpand(post.id)}
              className="read-more"
              aria-expanded={expandedPosts[post.id]}
            >
              {expandedPosts[post.id] ? "Show Less" : "Read More"}
            </button>

            {/* Post Media (Image or Video) */}
            {post.image && <img src={post.image} alt="Post visual" className="post-image" />}
            {post.video && (
              <video
                className="post-video"
                controls
                width="100%"
                src={post.video}
                alt="Post video"
              />
            )}
          </div>

          {/* Post Actions */}
          <div className="post-actions">
            <button
              className={`action-button ${likedPosts[post.id] ? "liked" : ""}`}
              onClick={() => toggleLike(post.id)}
              aria-label="Like"
            >
              <ThumbsUp size={18} />
              Like
            </button>
            <button
              className="action-button"
              aria-label="Comment"
              onClick={() => {
                setCommentModalOpen(true);
                setActivePost(post.id);
              }}
            >
              <MessageSquare size={18} />
              Comment
            </button>
            <button className="action-button" aria-label="Share">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </article>
      ))}

      {/* Comment Modal */}
      {commentModalOpen && (
        <Comment
          isOpen={commentModalOpen}
          onClose={() => {
            setCommentModalOpen(false);
            setActivePost(null);
          }}
          postId={activePost}
        />
      )}
    </div>
  );
}
