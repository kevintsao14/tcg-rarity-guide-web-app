import React from 'react';
import { HashRouter, Router, Link, Route, Routes, } from 'react-router-dom';
import PTCG from './Games/PTCG';
import OPCG from './Games/OPCG';
import WS from './Games/WS';
import YGO from './Games/Yu-Gi-Oh';
import Lorcana from './Games/Lorcana';
import UA from './Games/UA';
import Chinese from '../Chinese';
import Japanese from '../Japanese';
export default function English() {
    return (
        <div id = "English_screen">
          <table>
            <tr>
              <td> <h1>TCG Rarity Guide ENGLISH</h1></td>
              <td> <Link to="/English"><h2>Home</h2></Link></td>
              <td>
                <select id = "select-games">
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
                <Route path="/Chinese" element={<Chinese />} />
                <Route path="/Japanese" element={<Japanese />} />
                </Routes>
              </td>
            </tr>
          </table>

          <table id = "games_layout" >
            <tr>   
              <td>
              <PTCG />
              </td>
              <td>
                <OPCG />
              </td>

            </tr>
            <tr>
              <td>
                <YGO />
              </td>
              <td>
                <Lorcana />
              </td>
            </tr>
            <tr>
              <td>
                <WS />
              </td>
              <td>
                <UA />
              </td>
            </tr>
          </table>

          <hr />
          <table id = "about">
            <tr>
              <td>
                  About
              </td>
              <td> 
              <a href="https://www.linkedin.com/in/cheyun-tsao">LinkedIn</a><br />
              </td>
              <td>
              <a href="https://github.com/kevintsao14/tcg-rarity-guide-web-app/tree/main">GitHub</a><br />
              </td>
            </tr>
          </table>
          
        </div>
    );
}