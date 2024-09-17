import React from 'react';
import { HashRouter, Router, Link, Route, Routes, Outlet, } from 'react-router-dom';
export default function English() {
    return (
        <div id="English_screen">

            <table className='english_table'>
                <tr>
                    <td> <h1>TCG Rarity Guide ENGLISH</h1></td>
                    <td> <Link to="/English"><h2>Home</h2></Link></td>
                    <td>
                        <select id="select-games">
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
                    </td>
                </tr>
            </table>

            <hr />

            <Outlet />

            <hr />
            <table id="about">
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