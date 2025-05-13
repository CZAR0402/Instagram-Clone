import React, { useState } from 'react';
import './Profile.css';

// Dummy profile data
const profileData = {
  username: 'being_harsh_raj',
  name: 'Harsh Raj',
  profilePic: 'https://picsum.photos/150/150?random=profile',
  posts: 123,
  followers: 1234,
  following: 567,
  bio: 'Digital Creator 📸\nExploring life through my lens 🌎\nTech enthusiast 💻',
  highlights: [
    { id: 1, title: 'Travel', image: 'https://picsum.photos/100/100?random=h1' },
    { id: 2, title: 'Food', image: 'https://picsum.photos/100/100?random=h2' },
    { id: 3, title: 'Tech', image: 'https://picsum.photos/100/100?random=h3' },
    { id: 4, title: 'Nature', image: 'https://picsum.photos/100/100?random=h4' },
  ],
};

// Dummy posts data - using the same structure as Home posts
const userPosts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: `https://picsum.photos/600/600?random=profile${i}`,
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 50),
}));

function Profile() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__picture">
          <img src={profileData.profilePic} alt={profileData.username} />
        </div>
        
        <div className="profile__info">
          <div className="profile__infoTop">
            <h2>{profileData.username}</h2>
            <div className="profile__buttons">
              <button className="profile__editButton">Edit profile</button>
              <button className="profile__settingsButton">
                <i className="fas fa-cog"></i>
              </button>
            </div>
          </div>

          <div className="profile__stats">
            <div className="profile__stat">
              <span className="profile__statNumber">{profileData.posts}</span> posts
            </div>
            <div className="profile__stat">
              <span className="profile__statNumber">{profileData.followers}</span> followers
            </div>
            <div className="profile__stat">
              <span className="profile__statNumber">{profileData.following}</span> following
            </div>
          </div>

          <div className="profile__bio">
            <h1>{profileData.name}</h1>
            {profileData.bio.split('\\n').map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="profile__highlights">
        {profileData.highlights.map(highlight => (
          <div key={highlight.id} className="profile__highlight">
            <div className="profile__highlightImage">
              <img src={highlight.image} alt={highlight.title} />
            </div>
            <span>{highlight.title}</span>
          </div>
        ))}
      </div>

      <div className="profile__nav">
        <button
          className={`profile__navButton ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          <i className="fas fa-th"></i>
          <span>POSTS</span>
        </button>
        <button
          className={`profile__navButton ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <i className="far fa-bookmark"></i>
          <span>SAVED</span>
        </button>
        <button
          className={`profile__navButton ${activeTab === 'tagged' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagged')}
        >
          <i className="far fa-id-badge"></i>
          <span>TAGGED</span>
        </button>
      </div>

      <div className="profile__posts">
        {userPosts.map(post => (
          <div key={post.id} className="profile__post">
            <img src={post.image} alt={`Post ${post.id}`} />
            <div className="profile__postOverlay">
              <div className="profile__postStats">
                <div className="profile__postStat">
                  <i className="fas fa-heart"></i>
                  <span>{post.likes}</span>
                </div>
                <div className="profile__postStat">
                  <i className="fas fa-comment"></i>
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile; 