import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Organogram from './pages/Organogram';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organogram" element={<Organogram />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
