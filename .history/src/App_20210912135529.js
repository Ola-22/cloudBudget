import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div
        className="app-main"
        style={{
          backgroundImage: "url(/bg.png)",
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