import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header, MainContainer } from './components';
import { About, Contact, Donations, Faq, Home, NotFound } from './screens';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import InstagramFeed from './components/Instagram/InstagramFeed';

const App = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
    setShowFooter(isBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: '80px' }}>
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Routes>
            <Route path="/" element={<InstagramFeed />} /> {/* Apenas na home */}
          </Routes>

        </MainContainer>
      </div>
      {showFooter && <Footer />}
      <WhatsAppButton />
    </div>
  );
};

export default App;