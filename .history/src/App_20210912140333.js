import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div
        className="app-main"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(213, 32, 71, 0.8) 0%, rgba(238, 61, 27, 0.8) 100%),url(/bg.png)",
          height: "600px",
        }}
      >
        <Navbar />
      </div>
    </div>
  );
}

export default App;
