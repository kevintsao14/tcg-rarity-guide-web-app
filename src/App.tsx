import React from 'react';
import './App.css';
import PTCG from './English/Games/PTCG';
import OPCG from './English/Games/OPCG';
import WS from './English/Games/WS';
import YGO from './English/Games/Yu-Gi-Oh';
import Lorcana from './English/Games/Lorcana';
import UA from './English/Games/UA';
import { HashRouter, Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import English from './English';
import Chinese from './Chinese';
import Japanese from './Japanese';
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/Chinese" />} />
          <Route path="/English" element={<English />} />
          <Route path="/Chinese" element={<Chinese />} />
          <Route path="/Japanese" element={<Japanese />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
