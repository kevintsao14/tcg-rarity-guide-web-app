import './App.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import English from './English';
import Chinese from './Chinese';
import Japanese from './Japanese';
import Guaranteed_PTCG from './English/Games/PTCG/Guaranteed';
import Guaranteed_OPCG from './English/Games/OPCG/Guaranteed';
import Layout from './English/Layout';
import Rarity_OPCG from './English/Games/OPCG/Rarity';
import Navigation_OPCG from './English/Games/OPCG/navigation';
import Rarity_PTCG from './English/Games/PTCG/Rarity';
import Recentboosters from './English/Games/OPCG/Recentboosters';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {/* Redirect root to Cheinese */}
          <Route path="/" element={<Navigate to="/Chinese" />} />

          {/* English Routes */}
          <Route path="/English" element={<English />} >
            <Route index element = {<Layout />} />
            <Route path="Games/OPCG/Rarity" element={<Rarity_OPCG/>} />
            <Route path="Games/OPCG/Guaranteed" element={<Guaranteed_OPCG />} />
            <Route path="Games/OPCG/navigation" element={<Navigation_OPCG />} />
            <Route path="Games/OPCG/Recentboosters" element={<Recentboosters />} />

            <Route path="Games/PTCG/Rarity" element={<Rarity_PTCG />} />
            <Route path="Games/PTCG/Guaranteed" element={<Guaranteed_PTCG />} />

          </Route>
         


          <Route path="/Chinese" element={<Chinese />} />
          <Route path="/Japanese" element={<Japanese />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
