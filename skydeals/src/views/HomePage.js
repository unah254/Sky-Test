import React from 'react';
import HeaderComponent from '../components/Header';
import ContentComponent from '../components/Content';
import FooterComponent from '../components/Footer';

function HomePage() {
  return (
    <div>
      Homepage
      <HeaderComponent/>
      <ContentComponent/>
      <FooterComponent/>
    </div>
  );
}

export default HomePage;
