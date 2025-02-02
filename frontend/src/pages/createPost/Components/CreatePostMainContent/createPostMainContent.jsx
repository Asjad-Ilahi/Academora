import { useState } from "react";
import "./createPostMainContent.css";

export function CreatePostMainContent() {
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <div className="main-content">
      <h1 className="page-title">Create Post</h1>

      <form className="create-post-form">
        <div className="form-group">
          <label>
            Title<span className="required">*</span>
          </label>
          <input type="text" placeholder="Write a title" required />
        </div>

        <div className="form-group">
          <label>
            Description<span className="required">*</span>
          </label>
          <textarea
            placeholder="Write Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
            required
          ></textarea>
          <span className="character-count">{description.length}/500</span>
        </div>

        <div className="form-group">
          <label>
            Picture/Video <span className="optional">(Optional)</span>
          </label>
          <div className="file-upload">
            {imagePreview && <img src={imagePreview} alt="Preview" className="uploaded-image" />}
            <span className="chooseFile">Choose File</span>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>
            Links <span className="optional">(Optional)</span>
          </label>
          <input type="url" placeholder="Attach links" />
        </div>

        <button type="submit" className="post-button">
          Post
        </button>
      </form>
    </div>
  );
}
