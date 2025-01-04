import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Benefits from './components/Benefits';
import Recipes from './components/Recipes';
import ImageCarousel from './components/ImageCarousel';
import Curiosities from './components/Curiosities';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Properties />
      <Benefits />
      <ImageCarousel />
      <Recipes />
      <Curiosities />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;