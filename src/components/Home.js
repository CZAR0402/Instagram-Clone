import React, { useState } from 'react';
import './Home.css';

// Dummy data for stories
const stories = [
  { id: 1, username: 'user1', image: 'https://picsum.photos/200/200?random=1' },
  { id: 2, username: 'user2', image: 'https://picsum.photos/200/200?random=2' },
  { id: 3, username: 'user3', image: 'https://picsum.photos/200/200?random=3' },
  { id: 4, username: 'user4', image: 'https://picsum.photos/200/200?random=4' },
  { id: 5, username: 'user5', image: 'https://picsum.photos/200/200?random=5' },
];

// Dummy data for posts
const initialPosts = [
  {
    id: 1,
    username: 'user1',
    userImage: 'https://picsum.photos/50/50?random=1',
    image: 'https://picsum.photos/600/600?random=1',
    caption: 'Beautiful sunset! 🌅',
    likes: 120,
    comments: [
      { id: 1, username: 'user2', text: 'Amazing!' },
      { id: 2, username: 'user3', text: 'So beautiful!' },
    ],
  },
  {
    id: 2,
    username: 'traveler_jane',
    userImage: 'https://picsum.photos/50/50?random=2',
    image: 'https://picsum.photos/600/800?random=2',
    caption: 'Exploring the streets of Paris 🗼 #Travel #Paris',
    likes: 432,
    comments: [
      { id: 3, username: 'wanderlust', text: 'This is gorgeous! 😍' },
      { id: 4, username: 'photoart', text: 'Perfect composition!' },
    ],
  },
  {
    id: 3,
    username: 'foodie_master',
    userImage: 'https://picsum.photos/50/50?random=3',
    image: 'https://picsum.photos/600/750?random=3',
    caption: 'Homemade pasta for dinner 🍝 #FoodLover',
    likes: 891,
    comments: [
      { id: 5, username: 'chef_mike', text: 'Recipe please! 🙏' },
      { id: 6, username: 'pasta_lover', text: 'Looks delicious!' },
    ],
  },
  {
    id: 4,
    username: 'fitness_guru',
    userImage: 'https://picsum.photos/50/50?random=4',
    image: 'https://picsum.photos/600/600?random=4',
    caption: 'Morning workout done! 💪 #FitnessMotivation',
    likes: 567,
    comments: [
      { id: 7, username: 'gym_rat', text: 'Keep crushing it! 💪' },
      { id: 8, username: 'healthy_life', text: 'Inspiring!' },
    ],
  },
  {
    id: 5,
    username: 'art_gallery',
    userImage: 'https://picsum.photos/50/50?random=5',
    image: 'https://picsum.photos/600/900?random=5',
    caption: 'New exhibition opening this weekend 🎨 #ArtGallery',
    likes: 789,
    comments: [
      { id: 9, username: 'art_lover', text: 'Cannot wait! 😊' },
      { id: 10, username: 'creative_soul', text: 'Beautiful pieces!' },
    ],
  },
  {
    id: 6,
    username: 'pet_paradise',
    userImage: 'https://picsum.photos/50/50?random=6',
    image: 'https://picsum.photos/600/600?random=6',
    caption: 'Meet our newest family member! 🐱 #CatLover',
    likes: 1243,
    comments: [
      { id: 11, username: 'cat_lady', text: 'So adorable! 😻' },
      { id: 12, username: 'pet_lover', text: 'What\'s their name?' },
    ],
  },
  {
    id: 7,
    username: 'tech_geek',
    userImage: 'https://picsum.photos/50/50?random=7',
    image: 'https://picsum.photos/600/450?random=7',
    caption: 'New setup is ready! 🖥️ #TechLife #Setup',
    likes: 445,
    comments: [
      { id: 13, username: 'pc_master', text: 'Specs?' },
      { id: 14, username: 'gamer_pro', text: 'Clean setup! 🔥' },
    ],
  },
  {
    id: 8,
    username: 'nature_explorer',
    userImage: 'https://picsum.photos/50/50?random=8',
    image: 'https://picsum.photos/600/800?random=8',
    caption: 'Found this hidden waterfall today! 🏞️ #Nature',
    likes: 892,
    comments: [
      { id: 15, username: 'hiker', text: 'Where is this?' },
      { id: 16, username: 'adventure_time', text: 'Breathtaking view!' },
    ],
  },
  {
    id: 9,
    username: 'music_vibes',
    userImage: 'https://picsum.photos/50/50?random=9',
    image: 'https://picsum.photos/600/600?random=9',
    caption: 'Studio session in progress 🎸 #Music',
    likes: 673,
    comments: [
      { id: 17, username: 'guitar_hero', text: 'Drop the track! 🎵' },
      { id: 18, username: 'music_fan', text: 'Can\'t wait to hear it!' },
    ],
  },
  {
    id: 10,
    username: 'coffee_addict',
    userImage: 'https://picsum.photos/50/50?random=10',
    image: 'https://picsum.photos/600/700?random=10',
    caption: 'Perfect morning brew ☕ #CoffeeLover',
    likes: 334,
    comments: [
      { id: 19, username: 'barista', text: 'Nice latte art!' },
      { id: 20, username: 'cafe_hopper', text: 'Which cafe is this?' },
    ],
  },
  {
    id: 11,
    username: 'bookworm',
    userImage: 'https://picsum.photos/50/50?random=11',
    image: 'https://picsum.photos/600/800?random=11',
    caption: 'Current read 📚 #BookLover #CozyVibes',
    likes: 445,
    comments: [
      { id: 21, username: 'reader_123', text: 'Great choice!' },
      { id: 22, username: 'book_club', text: 'One of my favorites!' },
    ],
  }
];

function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [comments, setComments] = useState({});
  const [likedPosts, setLikedPosts] = useState({});

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: likedPosts[postId] ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleComment = (postId, comment) => {
    if (!comment.trim()) return;
    
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            comments: [...post.comments, { 
              id: Date.now(), 
              username: 'currentUser', 
              text: comment 
            }]
          }
        : post
    ));
    setComments({ ...comments, [postId]: '' });
  };

  return (
    <div className="home">
      <div className="stories">
        {stories.map(story => (
          <div key={story.id} className="story">
            <div className="story__image">
              <img src={story.image} alt={story.username} />
            </div>
            <p className="story__username">{story.username}</p>
          </div>
        ))}
      </div>

      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <div className="post__header">
              <img src={post.userImage} alt={post.username} className="post__avatar" />
              <h3 className="post__username">{post.username}</h3>
            </div>
            
            <img src={post.image} alt="Post" className="post__image" />
            
            <div className="post__actions">
              <button onClick={() => handleLike(post.id)}>
                <i className={`${likedPosts[post.id] ? 'fas' : 'far'} fa-heart`} 
                   style={{ color: likedPosts[post.id] ? '#ed4956' : '#262626' }}></i>
              </button>
              <button>
                <i className="far fa-comment"></i>
              </button>
              <button>
                <i className="far fa-paper-plane"></i>
              </button>
            </div>
            
            <p className="post__likes">{post.likes} likes</p>
            <p className="post__caption">
              <strong>{post.username}</strong> {post.caption}
            </p>
            
            <div className="post__comments">
              {post.comments.map(comment => (
                <p key={comment.id}>
                  <strong>{comment.username}</strong> {comment.text}
                </p>
              ))}
            </div>
            
            <form 
              className="post__commentBox"
              onSubmit={(e) => {
                e.preventDefault();
                handleComment(post.id, comments[post.id] || '');
              }}
            >
              <input
                type="text"
                placeholder="Add a comment..."
                value={comments[post.id] || ''}
                onChange={(e) => setComments({ ...comments, [post.id]: e.target.value })}
              />
              <button type="submit">Post</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 