import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../styles/ChatInterface.css';
import { FiSend, FiDownload } from 'react-icons/fi';

function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Halo! Saya Atri, asisten AI yang terinspirasi dari keindahan laut. Senang bertemu denganmu! Apa yang bisa aku bantu hari ini? 🌊",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/chat/message', {
        message: input
      });

      const botMessage = {
        id: messages.length + 2,
        text: response.data.response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "Maaf, ada kesalahan saat berkomunikasi. Pastikan backend sedang berjalan di http://localhost:8080",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const downloadChat = () => {
    let chatText = "Percakapan dengan Atri 🌊\n";
    chatText += "================================\n\n";
    
    messages.forEach(msg => {
      const sender = msg.sender === 'user' ? 'Anda' : 'Atri';
      const time = msg.timestamp.toLocaleTimeString('id-ID');
      chatText += `[${time}] ${sender}:\n${msg.text}\n\n`;
    });

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(chatText));
    element.setAttribute('download', 'chat_with_atri.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="header-info">
          <div className="avatar-ocean">🌊</div>
          <div>
            <h2>Atri</h2>
            <p className="status">🟢 Online</p>
          </div>
        </div>
        <button className="download-btn" onClick={downloadChat} title="Download chat">
          <FiDownload /> Unduh
        </button>
      </div>

      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className={`message-bubble ${message.sender}`}>
              <p>{message.text}</p>
              <span className="message-time">{message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <div className="message-bubble bot loading">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form className="input-area" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pesan Anda di sini... 💭"
          disabled={loading}
          className="message-input"
        />
        <button type="submit" disabled={loading} className="send-button">
          <FiSend /> Kirim
        </button>
      </form>
    </div>
  );
}

export default ChatInterface;
