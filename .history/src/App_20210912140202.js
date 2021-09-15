import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div
        className="app-main"
        style={{
          backgroundImage:
            "linear-gradient(0deg, #D52047, #EE3D1B),url(/bg.png)",
          height: "600px",
          backgroundColor: "#EE3D1B",
        }}
      >
        <Navbar />
        {/* <div className="overlay"></div> */}
      </div>
    </div>
  );
}

export default App;
