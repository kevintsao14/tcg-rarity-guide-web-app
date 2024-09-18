import { Routes, Route } from "react-router";
import Rarity from "./Rarity";
import Recentboosters from "./Recentboosters";
import Navigation from "./navigation";

export default function Guaranteed() {
    return (
        <div>
            <h2>Guaranteed Pull Rates in OPCG</h2>
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
            <p>
                One Piece Card Game cards are offered in several types of packages, each with its own set of pull rates. These rates dictate the likelihood of obtaining cards of specific rarities, providing collectors with transparent expectations about what they might receive with each purchase. The most common packages include individual booster packs, booster boxes, or full cases
                <br />
                <br />

                Note: Pull rates may vary between different language editions.
                <br />
                Note: Pull rates can also differ from one set release to another

                <br />
                <br />
                Japnese OPCG Guaranteed Pull Rates:
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <table id="English_OPCG_Guaranteed_Pull_Rates_Japanese_V">
                        <thead>
                            <tr>
                                <th>Rarity</th>
                                <th>1 Booster Box (12 Boosters)</th>
                                <th>1 Case (12 Booster Boxes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>C, UC, R</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SR</td>
                                <td>4</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>Parallel Rare (with *)</td>
                                <td>1</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>SEC</td>
                                <td>0-1 (Chance of double Hit)</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>L - Parallel</td>
                                <td>0-1 (Double Hit)</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>SP</td>
                                <td>0-1 (Double Hit)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>TR</td>
                                <td>0-1</td>
                                <td>0-1</td>
                            </tr>
                            <tr>
                                <td>Manga Rare</td>
                                <td>0-1</td>
                                <td>0-1</td>
                            </tr>
                            <tr>
                                <td>Gold Manga Rare</td>
                                <td>0-1</td>
                                <td>0-1</td>
                            </tr>
                            <tr>
                                <td>God Pack</td>
                                <td>0-1</td>
                                <td>0-1</td>
                            </tr>
                        </tbody>
                    </table>

                    <ul style={{ textAlign: "center" }}>
                        <h4>Percentage % per pack:</h4>
                        <li>SR: ~16%</li>
                        <li>Parallel Rare: ~4%</li>
                        <li>SEC: 0~1%</li>
                        <li>SP: ~0.35%</li>
                        <li>Manga Rare: 0.2% or lower</li>
                    </ul>

                </div>


                <br />
                English OPCG Guaranteed Pull Rates:
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Rarity</th>
                                <th>1 Booster Box (12 Boosters)</th>
                                <th>1 Case (12 Booster Boxes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>C, UC, R</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SR</td>
                                <td>7-8</td>
                                <td>84 - 96</td>
                            </tr>
                            <tr>
                                <td>Parallel Rare (with *)</td>
                                <td>2-3</td>
                                <td>24 - 36</td>
                            </tr>
                            <tr>
                                <td>SEC</td>
                                <td>0-1</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>L - Parallel</td>
                                <td>0-1</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>SP</td>
                                <td>0-1</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>TR</td>
                                <td>0-1</td>
                                <td>0-1 (1 per 2-3 cases)</td>
                            </tr>
                            <tr>
                                <td>Manga Rare</td>
                                <td>0-1</td>
                                <td>0-1</td>
                            </tr>
                            <tr>
                                <td>Gold Manga Rare</td>
                                <td>0-1</td>
                                <td>0-1</td>
                            </tr>
                            <tr>
                                <td>God Pack</td>
                                <td>0-1</td>
                                <td>0-1</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul style={{ textAlign: "center" }}>
                        <h4>Percentage % per pack:</h4>
                        <li>SR: ~33%</li>
                        <li>Parallel Rare: ~8%</li>
                        <li>SEC: 0~4%</li>
                        <li>SP: ~0.35%</li>
                        <li>Manga Rare: 0.2% or lower</li>
                        <li>Gold Manga Rare: Rariest</li>
                        <li>God Pack: Rariest</li>
                    </ul>
                </div>

                <br />
                Chinese OPCG Guaranteed Pull Rates:
            </p>
        </div>
    )
}   