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
        <div className="comment-modal-content">
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
          
          <div className="comment-modal-header">
            <h3>Comments</h3>
          </div>

          <div className="comments-container">
            <div className="comments-list">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="comment">
                  <img src={profilePic} alt="User" className="comment-avatar" />
                  <div className="comment-content">
                    <div className="comment-author">User {index + 1}</div>
                    <p>This is a sample comment.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="comment-input-container">
          <img src={profilePic} alt="Current user" className="current-user-avatar" />
          <input type="text" placeholder="Write a comment..." className="comment-input" />
        </div>
      </div>
    </div>
  );
}

