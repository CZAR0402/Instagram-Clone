import React from 'react';
import './Reels.css';

function Reels() {
  return (
    <div className="reels">
      <div className="reels__container">
        <div className="reels__header">
          <i className="fas fa-film reels__headerIcon"></i>
          <h2>Reels</h2>
        </div>
        <div className="reels__grid">
          {Array.from({ length: 12 }, (_, i) => ({
            id: i + 1,
            video: `https://picsum.photos/400/600?random=reel${i}`,
            likes: Math.floor(Math.random() * 100000) + 1000,
            comments: Math.floor(Math.random() * 1000) + 100,
            username: `user_${i + 1}`,
            caption: 'Check out this amazing reel! #reels #instagram',
          })).map(reel => (
            <div key={reel.id} className="reels__item">
              <div className="reels__video">
                <img src={reel.video} alt={`Reel ${reel.id}`} />
                <div className="reels__playIcon">
                  <i className="fas fa-play"></i>
                </div>
                <div className="reels__overlay">
                  <div className="reels__stats">
                    <div className="reels__stat">
                      <i className="fas fa-heart"></i>
                      <span>{reel.likes.toLocaleString()}</span>
                    </div>
                    <div className="reels__stat">
                      <i className="fas fa-comment"></i>
                      <span>{reel.comments.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reels__info">
                <span className="reels__username">{reel.username}</span>
                <p className="reels__caption">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reels; 