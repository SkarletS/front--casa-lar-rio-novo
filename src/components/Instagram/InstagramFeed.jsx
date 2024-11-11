import React, { useEffect } from 'react';
import './InstagramFeed.css'; 

const InstagramFeed = () => {
  useEffect(() => {
    // Carregar o script do LightWidget
    const script = document.createElement('script');
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

  }, []);

    const seguir = () => {
        window.location.href = 'https://www.instagram.com/casalarderionovo/';
    };

  return (
    <div className="instagram-feed-card">
      {/*conteúdo acima do feed */}
      <div className="top-section">
        <div className="logo-container">
          <img 
            src="public/perfil.jpg" 
            alt="Logo" 
            className="logo-img" 
          />
          <p className="sub-text">casalarderionovo</p>
          <button className="follow-btn" onClick={seguir}>Seguir</button>
        </div>
      </div>

      {/* feed do Instagram */}
      <iframe 
        src="" 
        scrolling="no" 
        allowtransparency="true" 
        className="lightwidget-widget"
        style={{ width: '100%', border: '0', overflow: 'hidden' }}
      ></iframe>
    </div>
  );
};

export default InstagramFeed;
