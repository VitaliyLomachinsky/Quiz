import logo from "./logo.svg";
import "./App.css";
import TestsContainer from "./components/Tests/TestsContainer";
import Header from "./components/Header/Header";
import Settings_ButtonsContainer from "./components/Settings_Buttons/Settings_ButtonsContainer";

function App() {
  return (
    <div>
      <Header />
      <TestsContainer />
      <Settings_ButtonsContainer />
    </div>
  );
}

export default App;
