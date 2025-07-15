import  { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Log } from './Log.jsx';

const RedirectHandler = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(sessionStorage.getItem('shortenedUrls') || '[]');
    const match = stored.find(item => item.shortcode === shortcode);

    if (match) {
      Log("frontend", "info", "component", `Redirecting to ${match.longUrl}`);
      window.location.href = match.longUrl;
    } else {
      Log("frontend", "error", "component", `Shortcode not found: ${shortcode}`);
      alert("Shortcode not found.");
      navigate('/');
    }
  }, [shortcode, navigate]);

  return null;
};

export default RedirectHandler;
