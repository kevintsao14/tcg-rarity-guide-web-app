import { Link } from "react-router-dom";
export default function PTCGNavigation() {
  return (
    <div id="OPCG-navigation">
      <Link to={`/English/Games/PTCG/Rarity`}  > Rarity </Link> <br/>
      <Link to={`/English/Games/PTCG/Guaranteed`}  > Guaranteed Pull Rates </Link> <br/>
      <Link to={`/English/Games/PTCG/Recentboosters`} > Recent Boosters </Link> <br/>
    </div>
);}