import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SentimentAnalyzer.css';
import { FiBarChart2 } from 'react-icons/fi';

function SentimentAnalyzer() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Silakan masukkan teks untuk dianalisis');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/sentiment/analyze', {
        text: text
      });

      setResult(response.data);
    } catch (err) {
      setError('Gagal menganalisis sentimen. Pastikan backend sedang berjalan.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getSentimentEmoji = (sentiment) => {
    switch(sentiment.toLowerCase()) {
      case 'positive':
        return '😊';
      case 'negative':
        return '😢';
      case 'neutral':
        return '😐';
      default:
        return '🤔';
    }
  };

  const getSentimentColor = (sentiment) => {
    switch(sentiment.toLowerCase()) {
      case 'positive':
        return '#4CAF50';
      case 'negative':
        return '#f44336';
      case 'neutral':
        return '#FFC107';
      default:
        return '#2196F3';
    }
  };

  const getSentimentLabel = (sentiment) => {
    switch(sentiment.toLowerCase()) {
      case 'positive':
        return 'Positif 🌞';
      case 'negative':
        return 'Negatif 🌧️';
      case 'neutral':
        return 'Netral 🌤️';
      default:
        return 'Tidak Terdefinisi';
    }
  };

  return (
    <div className="sentiment-analyzer">
      <div className="analyzer-card">
        <div className="analyzer-header">
          <FiBarChart2 className="header-icon" />
          <h2>Analisis Sentimen Mendalam</h2>
          <p>Biarkan Atri memahami perasaan di balik kata-katamu</p>
        </div>

        <form className="analysis-form" onSubmit={handleAnalyze}>
          <div className="form-group">
            <label htmlFor="text-input">Masukkan Teks:</label>
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ketik teks yang ingin Anda analisis sentimen-nya... Bisa tentang bagaimana perasaanmu hari ini, pendapat tentang sesuatu, atau apapun yang ingin dibagikan."
              rows="6"
              disabled={loading}
            />
          </div>

          <button type="submit" disabled={loading} className="analyze-button">
            {loading ? 'Menganalisis...' : 'Analisis Sentimen'}
          </button>
        </form>

        {error && <div className="error-message">⚠️ {error}</div>}

        {result && (
          <div className="result-container">
            <div className="result-header">
              <h3>Hasil Analisis</h3>
            </div>

            <div className="sentiment-result">
              <div className="sentiment-badge" style={{ borderColor: getSentimentColor(result.sentiment) }}>
                <div className="badge-emoji">{getSentimentEmoji(result.sentiment)}</div>
                <div className="badge-info">
                  <p className="sentiment-type">{getSentimentLabel(result.sentiment)}</p>
                  <p className="sentiment-score">Skor: {result.score?.toFixed(2) || 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="analysis-details">
              <div className="detail-item">
                <h4>📊 Statistik Teks:</h4>
                <ul>
                  <li>Total Kata: <strong>{result.wordCount || 0}</strong></li>
                  <li>Kata Positif: <strong style={{ color: '#4CAF50' }}>{result.positiveCount || 0}</strong></li>
                  <li>Kata Negatif: <strong style={{ color: '#f44336' }}>{result.negativeCount || 0}</strong></li>
                </ul>
              </div>

              {result.positiveKeywords && result.positiveKeywords.length > 0 && (
                <div className="detail-item">
                  <h4>✨ Kata Kunci Positif:</h4>
                  <div className="keywords">
                    {result.positiveKeywords.map((keyword, idx) => (
                      <span key={idx} className="keyword positive">{keyword}</span>
                    ))}
                  </div>
                </div>
              )}

              {result.negativeKeywords && result.negativeKeywords.length > 0 && (
                <div className="detail-item">
                  <h4>⚡ Kata Kunci Negatif:</h4>
                  <div className="keywords">
                    {result.negativeKeywords.map((keyword, idx) => (
                      <span key={idx} className="keyword negative">{keyword}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="atri-message">
              <p>
                {result.sentiment.toLowerCase() === 'positive' && 
                  "🌊 Senang mendengar sentimen positifmu! Seperti ombak yang indah, semoga energi positif ini terus mengalir dalam hidupmu!"}
                {result.sentiment.toLowerCase() === 'negative' && 
                  "🌧️ Atri memahami perasaanmu. Seperti badai di laut, ini akan berlalu. Jangan ragu untuk berbagi jika butuh mendengarkan."}
                {result.sentiment.toLowerCase() === 'neutral' && 
                  "🌤️ Teks Anda cukup netral. Seperti laut yang tenang, ada keseimbangan dalam kata-katamu."}
              </p>
            </div>

            <button className="reset-button" onClick={() => { setText(''); setResult(null); }}>
              Analisis Lagi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SentimentAnalyzer;
