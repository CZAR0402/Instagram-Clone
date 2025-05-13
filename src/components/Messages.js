import React, { useState } from 'react';
import './Messages.css';

// Dummy data for conversations
const initialConversations = [
  {
    id: 1,
    username: 'user1',
    avatar: 'https://picsum.photos/50/50?random=1',
    lastMessage: 'Hey, how are you?',
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    username: 'user2',
    avatar: 'https://picsum.photos/50/50?random=2',
    lastMessage: 'Did you see the new post?',
    timestamp: '9:45 AM',
  },
  {
    id: 3,
    username: 'user3',
    avatar: 'https://picsum.photos/50/50?random=3',
    lastMessage: 'Thanks for the follow!',
    timestamp: 'Yesterday',
  },
];

function Messages() {
  const [conversations] = useState(initialConversations);
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add message sending logic here
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="messages">
      <div className="messages__sidebar">
        <div className="messages__header">
          <h2>Messages</h2>
        </div>
        <div className="messages__conversations">
          {conversations.map(conversation => (
            <div
              key={conversation.id}
              className={`messages__conversation ${selectedChat === conversation.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(conversation.id)}
            >
              <img src={conversation.avatar} alt={conversation.username} />
              <div className="messages__conversationInfo">
                <h3>{conversation.username}</h3>
                <p>{conversation.lastMessage}</p>
              </div>
              <span className="messages__timestamp">{conversation.timestamp}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="messages__chat">
        {selectedChat ? (
          <>
            <div className="messages__chatHeader">
              <img
                src={conversations.find(c => c.id === selectedChat)?.avatar}
                alt="User"
              />
              <h3>{conversations.find(c => c.id === selectedChat)?.username}</h3>
            </div>
            <div className="messages__chatMessages">
              {/* Chat messages will go here */}
            </div>
            <form className="messages__chatInput" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <div className="messages__noChat">
            <h2>Select a conversation to start messaging</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages; 