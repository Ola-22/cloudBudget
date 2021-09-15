import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import VideoSection from "./components/VideoSection";
// import { Navbar, MainContent, VideoSection } from "./components/component-path";

function App() {
  return (
    <div className="App">
      <div
        className="app-main"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(213, 32, 71, 0.8) 0%, rgba(238, 61, 27, 0.8) 100%),url(/bg.png)",
          height: "782px",
        }}
      >
        <Navbar />
        <MainContent />
      </div>
      <VideoSection />
    </div>
  );
}

export default App;
