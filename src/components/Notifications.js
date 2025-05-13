import React from 'react';
import './Notifications.css';

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: {
        username: 'user1',
        image: 'https://picsum.photos/44/44?random=1'
      },
      post: {
        image: 'https://picsum.photos/44/44?random=post1'
      },
      time: '2h'
    },
    {
      id: 2,
      type: 'comment',
      user: {
        username: 'user2',
        image: 'https://picsum.photos/44/44?random=2'
      },
      post: {
        image: 'https://picsum.photos/44/44?random=post2'
      },
      comment: 'Amazing post! 👏',
      time: '3h'
    },
    {
      id: 3,
      type: 'follow',
      user: {
        username: 'user3',
        image: 'https://picsum.photos/44/44?random=3'
      },
      time: '5h'
    }
  ];

  return (
    <div className="notifications">
      <div className="notifications__container">
        <h2>Notifications</h2>
        <div className="notifications__list">
          {notifications.map(notification => (
            <div key={notification.id} className="notifications__item">
              <div className="notifications__user">
                <img src={notification.user.image} alt={notification.user.username} />
              </div>
              <div className="notifications__content">
                <div className="notifications__text">
                  <span className="notifications__username">{notification.user.username}</span>
                  {notification.type === 'like' && ' liked your post'}
                  {notification.type === 'comment' && ' commented: '}
                  {notification.type === 'follow' && ' started following you'}
                  {notification.type === 'comment' && (
                    <span className="notifications__comment">{notification.comment}</span>
                  )}
                </div>
                <span className="notifications__time">{notification.time}</span>
              </div>
              {notification.type !== 'follow' && (
                <div className="notifications__post">
                  <img src={notification.post.image} alt="Post" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications; 