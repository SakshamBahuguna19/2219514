import React, { useEffect, useState } from 'react';
import { Log } from './Log.jsx';

const StatsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem('shortenedUrls') || '[]');
    setData(stored);
    Log("frontend", "info", "component", "Loaded statistics page");
  }, []);

  return (
    <div className="container">
      <h2>Statistics</h2>
      {data.length === 0 ? (
        <p>No shortened URLs found.</p>
      ) : (
        data.map((item, i) => (
          <div key={i}>
            <p><strong>Shortcode:</strong> {item.shortcode}</p>
            <p><strong>Original URL:</strong> {item.longUrl}</p>
            <p><strong>Expiry:</strong> {item.expiry}</p>
            <p><strong>Clicks:</strong> ~ (Not tracked in this version)</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StatsPage;
