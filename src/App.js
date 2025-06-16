import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Services from './Services';
import Footer from './Footer';
import Refund from './Refund';
import Skill from './Accountbuy';
import Promotion from './Promotion';
import QueryForm from './QueryForm';

function App() {
  const homeRef     = useRef(null);
  const servicesRef = useRef(null);
  const skillRef    = useRef(null);
  const refundRef   = useRef(null);

  const [activeView, setActiveView] = useState('main'); // 'main', 'buy', 'refund'
  const [pendingScrollRef, setPendingScrollRef] = useState(null);

  const scrollTo = (ref) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (sectionRef) => {
    if (activeView !== 'main') {
      setPendingScrollRef(sectionRef);
      setActiveView('main');
    } else {
      scrollTo(sectionRef);
    }
  };

  useEffect(() => {
    if (activeView === 'buy') {
      scrollTo(skillRef);
    } else if (activeView === 'refund') {
      scrollTo(refundRef);
    } else if (activeView === 'main' && pendingScrollRef) {
      scrollTo(pendingScrollRef);
      setPendingScrollRef(null);
    }
  }, [activeView]);

  const handleBuyAccountClick = () => setActiveView('buy');
  const handleRefundClick = () => setActiveView('refund');

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, servicesRef }}
        onBuyAccountClick={handleBuyAccountClick}
        onRefundClick={handleRefundClick}
      />

      {/* Services Section */}
      <div ref={servicesRef}>
        <Services
          homeRef={homeRef}
          onBuyAccountClick={handleBuyAccountClick}
          scrollToSection={scrollToSection}
          refs={{ homeRef }}
        />
      </div>

      {/* Buy Account Section */}
      {activeView === 'buy' && (
        <div ref={skillRef}>
          <Skill />
        </div>
      )}

      {/* Refund Section */}
      {activeView === 'refund' && (
        <div ref={refundRef}>
          <Refund />
        </div>
      )}

      {/* Home Page */}
      {activeView === 'main' && (
        <div ref={homeRef}>
          <HomePage />
        </div>
      )}

      {/* Always visible sections */}
      <Promotion />
      <QueryForm />
      <Footer />
    </div>
  );
}

export default App;