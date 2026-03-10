import React, { useState } from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import SentimentAnalyzer from './components/SentimentAnalyzer';

function App() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="app-container">
      <div className="ocean-background">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div className="app-content">
        <header className="app-header">
          <div className="header-content">
            <div className="logo">🌊</div>
            <div className="title-section">
              <h1>Atri</h1>
              <p className="subtitle">Asisten AI yang Mencintai Keindahan Laut</p>
            </div>
          </div>
        </header>

        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            💬 Chat dengan Atri
          </button>
          <button 
            className={`tab-button ${activeTab === 'sentiment' ? 'active' : ''}`}
            onClick={() => setActiveTab('sentiment')}
          >
            💭 Analisis Sentimen
          </button>
        </div>

        <div className="main-content">
          {activeTab === 'chat' && <ChatInterface />}
          {activeTab === 'sentiment' && <SentimentAnalyzer />}
        </div>

        <footer className="app-footer">
          <p>Made with 💙 by Atri - Platform Asisten AI Pintar</p>
          <p className="footer-subtitle">Seindah ombak yang terus bergerak, kami terus berinovasi untuk Anda</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
