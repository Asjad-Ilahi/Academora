import React, { useState } from "react";
import "./Comment.css";
import profilePic from "../../assets/userprofilepic1.svg";

export default function CommentModal({ isOpen, onClose, post }) {
  if (!isOpen || !post) return null;

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("comment-modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="comment-modal-overlay" onClick={handleClickOutside}>
      <div className="comment-modal">
        {/* Post Section */}
        <div className="comment-modal-post">
          <div className="post-header">
            <div className="post-author-info">
              <img src={post.authorImage} alt="User" className="author-image" />
              <div className="post-author">{post.author}</div>
            </div>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-content">
            <h3>{post.content}</h3>
            <p>{post.description}</p>

            {/* Post Media */}
            {post.image && (
              <div className="post-media-container">
                <img src={post.image} alt="Post visual" />
              </div>
            )}
            {post.video && (
              <div className="post-media-container">
                <video controls src={post.video} />
              </div>
            )}
          </div>
        </div>

        {/* Comments Section */}
        <div className="comment-modal-header">
          <h3>Comments</h3>
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="comments-container">
          {/* Example comments to demonstrate scrolling */}
          {[...Array(10)].map((_, index) => (
            <div key={index} className="comment">
              <img src={profilePic} alt="User" className="comment-avatar" />
              <div className="comment-content">
                <div className="comment-author">
                  User Name
                  {index === 0 && <span className="admin-badge">Admin</span>}
                </div>
                <p>This is a sample comment to demonstrate scrolling functionality.</p>
                <div className="comment-actions">
                  <span>Like</span>
                  <span>Reply</span>
                  <button className="comment-menu">•••</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className="comment-input-container">
          <img src={profilePic} alt="Current user" className="current-user-avatar" />
          <div className="comment-input-wrapper">
            <input type="text" placeholder="Write a comment..." className="comment-input" />
            <div className="comment-input-actions">
              <button className="attachment-button">📎</button>
              <button className="emoji-button">😊</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}