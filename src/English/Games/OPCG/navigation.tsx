import { Link } from "react-router-dom";
export default function OPCGNavigation() {
  return (
    <div id="OPCG-navigation">
      <Link to={`/English/Games/OPCG/Guaranteed`}  > Guaranteed Pull Rates </Link> <br/>
      <Link to={`/English/Games/OPCG/Rarity`}  > Rarity </Link> <br/>
      <Link to={`/English/Games/OPCG/Recentboosters`} > Recent Boosters </Link> <br/>
    </div>
);}