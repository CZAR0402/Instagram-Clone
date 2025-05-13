import React, { useState } from 'react';
import './Search.css';

// Dummy search suggestions
const searchSuggestions = [
  {
    id: 1,
    username: 'photography_hub',
    name: 'Photography Hub',
    image: 'https://picsum.photos/50/50?random=s1',
    followers: '1.2M',
    verified: true,
  },
  {
    id: 2,
    username: 'travel_diaries',
    name: 'Travel Diaries',
    image: 'https://picsum.photos/50/50?random=s2',
    followers: '856K',
    verified: true,
  },
  {
    id: 3,
    username: 'food_lover',
    name: 'Food & Cuisine',
    image: 'https://picsum.photos/50/50?random=s3',
    followers: '432K',
    verified: false,
  },
  // Add more suggestions...
].concat(
  Array.from({ length: 15 }, (_, i) => ({
    id: i + 4,
    username: `user_${i + 1}`,
    name: `User ${i + 1}`,
    image: `https://picsum.photos/50/50?random=s${i + 4}`,
    followers: `${Math.floor(Math.random() * 900 + 100)}K`,
    verified: Math.random() > 0.8,
  }))
);

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches] = useState(searchSuggestions.slice(0, 5));

  return (
    <div className="search">
      <div className="search__topBar">
        <div className="search__topContainer">
          <div className="search__logo">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="search__mainInput">
            <i className="far fa-search"></i>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="search__clearButton"
                onClick={() => setSearchTerm('')}
              >
                <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>
          <div className="search__topIcons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-paper-plane"></i>
          </div>
        </div>
      </div>

      <div className="search__container">
        <div className="search__content">
          {!searchTerm ? (
            <div className="search__recent">
              <div className="search__recentHeader">
                <h5>Recent</h5>
                <button className="search__clearAll">Clear all</button>
              </div>
              {recentSearches.map(user => (
                <div key={user.id} className="search__recentItem">
                  <div className="search__userInfo">
                    <img src={user.image} alt={user.username} />
                    <div className="search__userDetails">
                      <div className="search__username">
                        {user.username}
                        {user.verified && <i className="fas fa-badge-check"></i>}
                      </div>
                      <div className="search__name">{user.name}</div>
                    </div>
                  </div>
                  <button className="search__removeButton">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="search__results">
              {searchSuggestions
                .filter(user => 
                  user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(user => (
                  <div key={user.id} className="search__resultItem">
                    <div className="search__userInfo">
                      <img src={user.image} alt={user.username} />
                      <div className="search__userDetails">
                        <div className="search__username">
                          {user.username}
                          {user.verified && <i className="fas fa-badge-check"></i>}
                        </div>
                        <div className="search__name">
                          {user.name} • {user.followers} followers
                        </div>
                      </div>
                    </div>
                    <button className="search__followButton">Follow</button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search; 