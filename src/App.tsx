import React from 'react';
import './App.css';
import PTCG from './Games/PTCG';
import OPCG from './Games/OPCG';
import WS from './Games/WS';
import YGO from './Games/Yu-Gi-Oh';
import Lorcana from './Games/Lorcana';
import UA from './Games/UA';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <HashRouter>
      <h1>TCG Rarity Guide</h1>
      <PTCG />
      <OPCG />
      <YGO />
      <Lorcana />
      <WS /> 
      <UA />
      </HashRouter>

    </div>
  );
}

export default App;
