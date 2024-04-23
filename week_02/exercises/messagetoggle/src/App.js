import "./App.css";
import ToggleMessage from "./components/ToggleMessage";
import DimmedLight from "./components/DimmedLight";
import Username from "./components/Username";
import Color from "./components/Color";
function App() {
  return (
    <div className="App">
      <DimmedLight />
      <ToggleMessage message="hello this is a message" />
      <Username/>
      <Color/>
    </div>
  );
}

export default App;
