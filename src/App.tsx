import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import DivisiIT from './pages/DivisiIT';
import OrganogramKAT from './pages/OrganogramKAT';
import PageNotFound from './pages/PageNotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/organogram-kat" element={<OrganogramKAT />} />
        <Route path="/divisi-it" element={<DivisiIT />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
