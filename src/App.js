import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Messages from './components/Messages';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Search from './components/Search';
import Explore from './components/Explore';
import Reels from './components/Reels';
import Notifications from './components/Notifications';
import Create from './components/Create';
import More from './components/More';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <div className="app__body">
            <Sidebar />
            <div className="app__content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/reels" element={<Reels />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/create" element={<Create />} />
                <Route path="/more" element={<More />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
