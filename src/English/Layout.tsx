import Lorcana from "./Games/Lorcana";
import OPCG from "./Games/OPCG";
import PTCG from "./Games/PTCG";
import UA from "./Games/UA";
import WS from "./Games/WS";
import YGO from "./Games/Yu-Gi-Oh";

export default function Layout() {
    return (
        <div>
            <table id="games_layout" >
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
        </div>
    )
}