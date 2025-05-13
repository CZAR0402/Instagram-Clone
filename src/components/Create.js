import React, { useState } from 'react';
import './Create.css';

function Create() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [preview, setPreview] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle post creation logic here
    console.log('Creating post with:', { selectedFile, caption });
  };

  return (
    <div className="create">
      <div className="create__container">
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit} className="create__form">
          <div className="create__upload">
            {!preview ? (
              <div className="create__uploadPlaceholder">
                <i className="far fa-image"></i>
                <p>Drag photos and videos here</p>
                <label className="create__uploadButton">
                  Select from computer
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    hidden
                  />
                </label>
              </div>
            ) : (
              <div className="create__preview">
                <img src={preview} alt="Preview" />
                <button
                  type="button"
                  className="create__removeButton"
                  onClick={() => {
                    setSelectedFile(null);
                    setPreview(null);
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            )}
          </div>
          
          <div className="create__details">
            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="create__caption"
            />
            <button
              type="submit"
              className="create__submitButton"
              disabled={!selectedFile}
            >
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create; 