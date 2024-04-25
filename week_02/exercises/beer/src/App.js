import "./App.css";
import Beers from "./components/Beers";
import TeamMember from "./components/TeamMember";

function App() {
  return <div>
      <TeamMember firstname="Erin" lastName="Lindfort" role="Costumer Support" email="Erin@hotmail.com" phoneNumber="0484525452"/>
      <Beers />
    </div>
  ;
}

export default App;
