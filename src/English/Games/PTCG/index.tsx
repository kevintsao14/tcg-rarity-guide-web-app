import React from 'react';
import { Link } from "react-router-dom";
export default function PTCG() {
    return (
    <div>
        <Link to = "/English/Games/PTCG/Guaranteed"><h2>Pokémon Trading Card Game</h2></Link>
        <img id = "PTCG_Logo" src="images/PTCG_Logo.jpg" alt="Pokemon Trading Card Game Logo" height={200} width={400}/>
    </div>
 
    )
}