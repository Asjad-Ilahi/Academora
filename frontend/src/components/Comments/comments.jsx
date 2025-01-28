import React from "react";
import "./Comment.css";

export default function CommentModal({ isOpen, onClose, postId }) {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("comment-modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="comment-modal-overlay" onClick={handleClickOutside}>
      <div className="comment-modal">
        <div className="comment-modal-header">
          <h3>Comments</h3>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="comments-container">
          {/* Example comments */}
          <div className="comment">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="User avatar"
              className="comment-avatar"
            />
            <div className="comment-content">
              <div className="comment-author">
                Author <span className="admin-badge">Admin</span>
              </div>
              <div className="comment-text">Fire🔥</div>
              <div className="comment-actions">
                <span>300</span>
                <span>12</span>
                <button>Reply</button>
              </div>
            </div>
            <button className="comment-menu">⋮</button>
          </div>
        </div>

        <div className="comment-input-container">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Current user"
            className="current-user-avatar"
          />
          <div className="comment-input-wrapper">
            <input
              type="text"
              placeholder="Something on your mind"
              className="comment-input"
            />
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
