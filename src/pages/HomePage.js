import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import OfflineIndicator from '../components/OfflineIndicator';

function HomePage() {
  return (
    <div>
      <Header />
      <OfflineIndicator />
      <MainContent />
    </div>
  );
}

export default HomePage;
