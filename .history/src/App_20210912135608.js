import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div
        className="app-main"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)),url(/bg.png)",
          height: "600px",
        }}
      >
        <Navbar />
        {/* <div className="overlay"></div> */}
      </div>
    </div>
  );
}

export default App;
