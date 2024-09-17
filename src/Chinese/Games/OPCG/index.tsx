import React from 'react';
import { HashRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
export default function OPCG() {
    return (
        <div id = "chinese-OPCG">
            <Link to="/Chinese/Games/OPCG/Guaranteed"><h2>One Piece Card Game</h2></Link>
            
            <img id = "OPCG_Logo" src="images/OPCG_Logo.jpg" alt= "One Piece Card Game Logo" height={150} width={400}/>

        </div>

    )
}


