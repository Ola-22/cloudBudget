import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div
        className="app-main"
        style={{ backgroundImage: "url(/bg.png)", backgroundRepeat: "repeat" }}
      >
        <Navbar />
      </div>
    </div>
  );
}

export default App;
