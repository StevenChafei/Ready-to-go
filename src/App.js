import "./App.css";
import { useState } from "react";
import logo from "./assets/img/logo.png";

import Switch from "./components/Switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header className="head">
        <img src={logo} alt="logo fusée" />
        <span>Ready To Go</span>
      </header>

      <div className="App">
        <Switch setState={setSwitch1} state={switch1} />
        <Switch setState={setSwitch2} state={switch2} />
        <Switch setState={setSwitch3} state={switch3} />

        {!switch1 || !switch2 || !switch3 ? (
          <p className="red">NO WAY !</p>
        ) : (
          <p className="green">GO !!</p>
        )}
      </div>
    </>
  );
}

export default App;
