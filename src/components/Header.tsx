import React from 'react';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md text-emerald-950 py-6 sticky top-0 z-50 border-b border-emerald-100 animate-fade-in">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Pistache Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-emerald-950">Pistache</h1>
        </div>
      </div>
    </header>
  );
}