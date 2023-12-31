import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Stars from "./components/Stars";

function App() {
  const [countVite, setCountVite] = useState(0);
  const [countReact, setCountReact] = useState(0);

  return (
    <>
      <div>
        <div className="item">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
          <div className="item-info">
            <div className="title">Vite logo</div>
            <div className="stars">
              <Stars count={countVite} />
            </div>
            <button
              className="countButton"
              onClick={() => setCountVite((countVite) => (countVite + 1) % 6)}
            >
              count is {countVite}
            </button>
          </div>
        </div>

        <div className="item">
          <img
            src={reactLogo}
            className="logo"
            alt="React logo"
          />
          <div className="item-info">
            <div className="title">React logo</div>
            <div className="stars">
              <Stars count={countReact} />
            </div>
            <button
              className="countButton"
              onClick={() => setCountReact((countReact) => (countReact + 1) % 6)}
            >
              count is {countReact}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
