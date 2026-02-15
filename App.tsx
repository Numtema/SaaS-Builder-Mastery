import React, { useState, useEffect, useRef } from 'react';
import { LandingPage } from './components/LandingPage';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-200 selection:bg-purple-500/30 selection:text-purple-200">
      <CustomCursor />
      <LandingPage />
    </div>
  );
};

export default App;