import { Routes, Route } from "react-router";
import Guaranteed from "./Guaranteed";
import Navigation from "./navigation";
import Rarity from "./Rarity";

export default function Recentboosters() {
    return (
        <div>
            <h2>Recent Boosters</h2>
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
        </div>
    )
}