import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Log } from './Log.jsx';

const ShortenerPage = () => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleShorten = () => {
    const allResults = [];

    urls.forEach(({ longUrl, validity, shortcode }, i) => {
      try {
        new URL(longUrl); 
        const code = shortcode || Math.random().toString(36).substr(2, 5);
        const expiry = new Date(Date.now() + ((parseInt(validity) || 30) * 60000));
        const record = { longUrl, shortcode: code, expiry: expiry.toLocaleString() };

        allResults.push(record);
        Log("frontend", "info", "component", `Shortened ${longUrl} to ${code}`);
      } catch (err) {
        alert(`Invalid URL at entry ${i + 1}`);
        Log("frontend", "error", "component", `Invalid URL: ${longUrl}`);
      }
    });

    setResults(allResults);
    sessionStorage.setItem('shortenedUrls', JSON.stringify(allResults));
  };

  return (
    <div className="container">
      <h2>URL Shortener</h2>
      {urls.map((url, idx) => (
        <div className="url-input" key={idx}>
          <input type="text" placeholder="Long URL" onChange={(e) => handleChange(idx, 'longUrl', e.target.value)} />
          <input type="text" placeholder="Validity (mins)" onChange={(e) => handleChange(idx, 'validity', e.target.value)} />
          <input type="text" placeholder="Custom Shortcode" onChange={(e) => handleChange(idx, 'shortcode', e.target.value)} />
        </div>
      ))}
      <button onClick={handleShorten}>Shorten URLs</button>

      <div className="result">
        {results.map((r, i) => (
          <div key={i}>
            <p><strong>Original:</strong> {r.longUrl}</p>
            <p><strong>Short:</strong> <a href={`/${r.shortcode}`}>localhost:3000/{r.shortcode}</a></p>
            <p><strong>Expiry:</strong> {r.expiry}</p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/stats')}>View Statistics</button>
    </div>
  );
};

export default ShortenerPage;
