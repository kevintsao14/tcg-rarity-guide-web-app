import { Routes, Route } from "react-router";
import Guaranteed from "./Guaranteed";
import Navigation from "./navigation";
import Recentboosters from "./Recentboosters";

export default function Rarity() {
    return (
        <div>
            <h2>Rarity</h2>
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <Navigation />
                        </td>
                        <td valign="top">
                            <Routes>
                                <Route path="/Guaranteed" element={<Guaranteed />} />
                                <Route path="/Rarity" element={<Rarity />} />
                                <Route path="/Recentboosters" element={<Recentboosters />} />
                            </Routes>
                        </td>
                    </tr>
                </tbody>
            </table>
            <body>
                <h2>One Piece Card Game Rarities: What Collectors Need to Know</h2>

                In the One Piece Card Game, cards are divided into six basic rarity levels:
                <ol>
                    <li>Common (C)</li>
                    <li>Uncommon (U)</li>
                    <li>Rare (R)</li>
                    <li>Super Rare (SR)</li>
                    <li>Secret Rare (SEC)</li>
                    <li>Leader Card (L)</li>
                </ol>

                While these rarity tiers give players an idea of a card’s availability, true collectors know that the most coveted cards go beyond these standard rarities. The real treasures lie in the <b>parallel versions, treasure rare, and the manga versions.</b> These special variations often feature unique artwork, making them highly sought after by fans and collectors alike.

                <h3>How to identify the rarity of a card?</h3>
                To determine a card’s rarity in the One Piece Card Game, simply look at the bottom right corner of the card. You’ll find a sequence of numbers and letters indicating the series number, card number, and a letter that represents the card’s rarity. The rarity is marked as one of the following letters:
            </body>
        </div>
    )
}