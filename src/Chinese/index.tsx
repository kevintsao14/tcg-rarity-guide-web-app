import { Link, Route, Routes, } from 'react-router-dom';
import PTCG from './Games/PTCG';
import OPCG from './Games/OPCG';
import WS from './Games/WS';
import YGO from './Games/Yu-Gi-Oh';
import Lorcana from './Games/Lorcana';
import UA from './Games/UA';
import English from '../English';
import Japanese from '../Japanese';
export default function Chinese() {
    return (

        <div>
  
          <table>
            <tr>
              <td> <h1>TCG卡牌稀有度指南</h1></td>
              <td> <Link to="/Chinese"><h2>Home</h2></Link></td>
              <td>
                <select>
                  <option value="PTCG">Pok&eacute;mon Trading Card Game</option>
                  <option value="OPCG">One Piece Card Game</option>
                  <option value="YGO">Yu-Gi-Oh!</option>
                  <option value="Lorcana">Lorcana</option>
                  <option value="WS">Weiss Schwarz</option>
                  <option value="UA">Union Arena</option>
                </select>
              </td>
              <td>
  
                <Link to="/English">English</Link> /
                <Link to="/Chinese">中文</Link> /
                <Link to="/Japanese">日文</Link>
                <Routes>
                <Route path="/Japanese" element={<Japanese />} />
                <Route path="/Chinese" element={<Chinese />} />
                </Routes>
  
              </td>
            </tr>
          </table>
  
          <PTCG />
          <OPCG />
          <YGO />
          <Lorcana />
          <WS />
          <UA />
        </div>
    );
}