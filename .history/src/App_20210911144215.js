import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <div
        className="app-main"
        style={{ backgroundImage: "url(/bg.png)", height: "782px" }}
      ></div>
    </div>
  );
}

export default App;
