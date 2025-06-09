import React from 'react';
import './App.css';

// Import React Router components
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

// Import created pages
import HomePage from './pages/HomePage';
import ItineraryPage from './pages/ItineraryPage';
import WeatherPage from './pages/WeatherPage';
import ChatPage from './pages/ChatPage';

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> TravelGenie
              </div>
              <div>
                <Link to="/" className="btn" style={{ marginRight: '12px' }}>
                  Home
                </Link>
                <Link to="/itinerary" className="btn" style={{ marginRight: '12px' }}>
                  Itinerary
                </Link>
                <Link to="/weather" className="btn" style={{ marginRight: '12px' }}>
                  Weather
                </Link>
                <Link to="/chat" className="btn">
                  Chat
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="container" style={{ paddingTop: 120 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/itinerary" element={<ItineraryPage />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/chat" element={<ChatPage />} />
              {/* Default redirect to home */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;