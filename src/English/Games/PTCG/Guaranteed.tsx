import { Routes, Route } from "react-router";
import Rarity from "./Rarity";
import Recentboosters from "./Recentboosters";

export default function Guaranteed() {
    return (
        <div>
            <h2>Guaranteed Pull Rates PTCG</h2>
            <table>
                <tbody>
                    <tr>
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
        </div>
    )
}