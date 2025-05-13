import React from 'react';
import './Explore.css';

function Explore() {
  return (
    <div className="explore">
      <div className="explore__grid">
        {Array.from({ length: 30 }, (_, i) => ({
          id: i + 1,
          image: `https://picsum.photos/600/600?random=explore${i}`,
          likes: Math.floor(Math.random() * 100000) + 1000,
          comments: Math.floor(Math.random() * 1000) + 100,
          type: Math.random() > 0.7 ? 'video' : 'image',
          isMultiple: Math.random() > 0.7,
        })).map(post => (
          <div 
            key={post.id} 
            className={`explore__post ${post.type === 'video' ? 'video' : ''}`}
          >
            <img src={post.image} alt={`Explore ${post.id}`} />
            <div className="explore__postOverlay">
              <div className="explore__postStats">
                <div className="explore__postStat">
                  <i className="fas fa-heart"></i>
                  <span>{post.likes.toLocaleString()}</span>
                </div>
                <div className="explore__postStat">
                  <i className="fas fa-comment"></i>
                  <span>{post.comments.toLocaleString()}</span>
                </div>
              </div>
            </div>
            {post.type === 'video' && (
              <div className="explore__postType">
                <i className="fas fa-play"></i>
              </div>
            )}
            {post.isMultiple && (
              <div className="explore__postType multiple">
                <i className="far fa-clone"></i>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore; 